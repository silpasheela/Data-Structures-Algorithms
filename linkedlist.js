class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null
    }
}

class LinkedList{
    constructor()
    {
        this.head=null;
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    prepend(value)
    {
        const node = new Node(value)
        if(this.isEmpty())
        {
            this.head=node
        }
        else{
            node.next=this.head;
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty())
        {
            console.log("list is empty!")
        }
        else{
            let curr = this.head;
            let listValue = ''
            while(curr)
            {
                listValue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue)
        }
    }

    append(value)
    {
        const node = new Node(value)
        if(this.isEmpty())
        {
            this.head = node
        }
        else{
            let prev = this.head
            while(prev.next)
            {
                prev = prev.next
            }
            prev.next = node 
        }
        this.size++
    }

    insert(value,index)
    {
        if(index<0 || index>this.size)
        {
    
            console.log("Invalid index")
        }
        else if(index==0)
        {
            this.prepend(value)
        }
        else{
            let prev = this.head
            const node = new Node(value)
            for(let i =0;i<index-1;i++)
            {
                prev=prev.next
            }
            node.next=prev.next;
            prev.next=node
            this.size++
        }
    }

    remove(index)
    {
        if(index<0 || index>this.size)
        {
            console.log("Invalid index!")
        }
        else if(index==0){
            this.head=this.head.next
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++)
            {
                prev=prev.next
            }
            let removedNode = prev.next;
            prev.next=removedNode.next
        }
        this.size--;
    }

    removeValue(value)
    {
        if(this.isEmpty())
        {
            console.log("the list is empty!")
        }
        else if(value==this.head.value)
        {
            this.head=this.head.next
            this.size--
        }
        else{
            let prev=this.head
            while(prev.next && prev.next.value!=value)
            {
                prev=prev.next
            }
            if(prev.next)
            {
                let rmvd = prev.next
                prev.next = rmvd.next
                this.size--
            }
            else{
                console.log("value not found")
            }
        }
    }

    search(value)
    {
        if(this.isEmpty())
        {
            console.log("list is empty   !!!")
        }
        let i=0;
        let curr = this.head
            while(curr)
            {
                if(curr.value==value){
                    return i;
                }
                curr=curr.next;
                i++
            }
        return -1
    }

    reverse(){
        let prev=null
        let curr=this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}


const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.search(100)
list.print()
list.append(10)
list.append(20)
list.print()
list.append(30)

list.print()

list.insert(100,0)
list.insert(100,-1)
list.insert(100,2)
list.print()

list.remove(10)
list.remove(0)
list.print()
list.remove(2)
list.removeValue(10)
list.removeValue(1000)
console.log(list.search(10))
const position = list.search(10)

if(position==-1)
{
    console.log("element not found!!")
}
else
console.log("element found at position "+(position+1));

list.print() 

list.reverse()

list.reversenew()
list.print()