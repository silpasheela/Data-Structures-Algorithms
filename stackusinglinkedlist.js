class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor()
    {
        this.head = null
    }

    push(value)
    {
        const node = new Node(value)
        if(this.head==null)
        {
            this.head=node
        }
        else{
            node.next = this.head
            this.head=node
        }
        this.size++
    }

    pop()
    {
        if(this.head==null){
            console.log("stack underflow")
        }
        else{
            let del = this.head.value
            this.head=this.head.next
            console.log(del)
        }
    }

    display()
    {
        if(this.head==null){
            console.log("stack underflow")
        }
        else{
            const node = new Node()
            let listValue = ''
            let curr = this.head
            while(curr)
            {
                listValue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue)
        }
    }
}

let myst = new Stack();
myst.display()
myst.push(10)
myst.push(20)
myst.push(30)
myst.push(40)
myst.display()
myst.pop()
myst.display()