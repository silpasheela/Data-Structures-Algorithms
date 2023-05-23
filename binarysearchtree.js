class Node{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
        this.close = 0;
        this.largest = Number.MAX_VALUE;
        this.difference = 0;
    }

    isEmpty(){
        return this.root==null
    }

    //INSERTION

    insert(value)
    {
        const node = new Node(value);
        if(this.isEmpty())
        {
            this.root=node
        }
        else{
            this.insertNode(this.root,node);
        }
    }

    insertNode(root,node)
    {
        if(node.value<root.value)
        {
            if(root.left==null)
            {
                root.left = node
            }
            else{
                this.insertNode(root.left,node)
            }
        }
        else{
            if(root.right==null)
            {
                root.right=node
            }
            else{
                this.insertNode(root.right,node)
            }
        }
    }

    //SEARCH

    search(root,value)
    {
        if(!root)
        {
            return false
        }
        else{
            if(root.value==value)
            {
                return true
            }
            else if(value<root.value)
                {
                    return this.search(root.left,value)
                }
            else{
                return this.search(root.right,value)
            }
        }
    }

    //DFS - PREORDER

    preorder(root)
    {
        if(root)
        {
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    //DFS - INORDER

    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left)
            // console.log(root.value)
            let val = root.value
            if(val%2 == 0)
            {
                console.log(val)
            }
            this.inorder(root.right)
        }
    }

    //DFS - POSTORDER

    postorder(root)
    {
        if(root)
        {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }

    // BFS

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

    //MIN

    min(root)
    {
        if(!root.left)
        {
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    //MAX

    max(root)
    {
        if(!root.right)
        {
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }

        //MIN

    min(root)
    {
        if(!root.left)
        {
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    //MAX

    max(root)
    {
        if(!root.right)
        {
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }

    //SECOND - MIN

    secondMin(root)
    {
        if(!root.left.left)
        {
            return root.value
        }
        else{
            return this.secondMin(root.left)
        }
    }

    //SECOND - MAX

    secondMax(root)
    {
        if(!root.right.right)
        {
            return root.value
        }
        else{
            return this.secondMax(root.right)
        }
    }

    //DELETION

    delete(value)
    {
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value)
    {
        if(root==null)
        {
            return root
        }
        if(value<root.value)
        {
            root.left = this.deleteNode(root.left,value)
        }
        else if(value>root.value)
        {
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right)
            {
                return null
            }
            if(!root.left)
            {
                return root.right
            }
            if(!root.right)
            {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    //VALIDATE BST

    isBST(root , minValue , maxValue) 
    {
        return this.validateBST(root, minValue , maxValue) 
    }
 
    validateBST(root , minValue , maxValue) {
        // console.log(maxValue)
        // console.log(minValue)

        if(root === null) {
            return true;
        }
        if(root.value >= maxValue || root.value <= minValue) {
            // console.log(maxValue);
            // console.log(minValue);
            // console.log(root.value)
            return false;
        } 
        else {
            // console.log(root.value);
            // console.log(minValue)
            // console.log(maxValue)
            return this.validateBST(root.left , minValue , root.value) && this.validateBST(root.right , root.value , maxValue);
        }
    }

    //CLOSEST VALUE 

    closest(root , value ) {
        if(!root) {
            return this.close
        }
        if(root.value === value) {
            this.close = root.value;
            return root;
        }
        else {
            if(value < root.value) {
                this.difference = Math.abs(value - root.value) ;
                console.log(this.difference);
                if(this.difference < this.largest) {
                    this.largest = this.difference;
                    this.close = root.value
                }
                return this.closest(root.left , value);
            }
            if(value > root.value) {
                this.difference = Math.abs(value - root.value) ;
                if(this.difference < this.largest) {
                    this.largest = this.difference;
                    this.close = root.value
                }
                return this.closest(root.right, value);
            }
        }
        // return this.close;
    }
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,20))
// console.log(bst.search(bst.root,15))

// // bst.preorder(bst.root)
// // bst.inorder(bst.root)
// // bst.postorder(bst.root)

bst.delete(15)
bst.levelOrder()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

