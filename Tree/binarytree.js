class Node {
    constructor(value) {
      this.right = null;
      this.left = null;
      this.value = value
    }
}

class Btree {
    constructor() {
      this.root = null ;
    }

    insert(value) {
      const node = new Node(value);
      if(this.root === null) {
        this.root = node;
      } else {
        let queue = [];
        queue.push(this.root);
        while(queue.length) {
            let current = queue.shift();
            if(!current.left) {
                current.left = node;
                break;
            }
            queue.push(current.left);
            if(!current.right) {
                current.right = node;
                break;
            }
            queue.push(current.right);
        }
      }
    }

    inorder(root) {
      if(root) {
        this.inorder(root.left)
        console.log(root.value);        
        this.inorder(root.right);
      }
    }

    preOrder(root)
    {
      if(root)
      {
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
      }
    }

    levelOrder()
    {
      const queue = []
      queue.push(this.root)
      while(queue.length)
      {
        let curr = queue.shift()
        console.log(curr.value)
        if(curr.left)
        {
          queue.push(curr.left)
        }

        if(curr.right)
        {
          queue.push(curr.right)
        }
      }
    }

  min(root)
  {
    if(root==null)
    {
      return null
    }

    let minVal = root.value

    const leftMin = this.min(root.left)
    if(leftMin != null && leftMin<minVal)
    {
      minVal = leftMin
    }

    const rightMin = this.min(root.right)
    if(rightMin != null && rightMin<minVal)
    {
      minVal = rightMin
    }

    return minVal
  }

  search(root,value)
  {
    if(root.value == null)
    {
      return false
    }

    if(root.value = value)
    {
      return true
    }

    const foundleft = this.search(root.left,value)
    if(foundleft)
    {
      return true
    }

    const foundright = this.search(root.right,value)
    if(foundright)
    {
      return true
    }
    return false
  }

  delete(value){
    this.root = this.deleteNode(this.root, value)
}

deleteNode(root, value){
    if(root === null){
        return null
    }
    if(value < root.value){
        root.left = this.deleteNode(root.left, value)
    }
    else if(value > root.value){
        root.right = this.deleteNode(root.right, value)
    }

    else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        else if(!root.right){
            return root.left
        }
        
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right, root.value)
    }
    return root
}
}


let btree = new Btree();
btree.insert(100);
btree.insert(200);
btree.insert(300);
btree.insert(400);
btree.insert(500);
console.log(btree);

btree.inorder(btree.root)
btree.preOrder(btree.root)

btree.levelOrder()

console.log(btree.min(btree.root))

// console.log(btree.search(btree.root,10))
// console.log(btree.search(btree.root,200))

btree.delete(100)
// console.log(btree);
console.log(btree.min(btree.root))

