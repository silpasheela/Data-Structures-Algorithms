class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor()
    {
        this.head=null
    }

    enqueue(value)
    {
        const node = new Node(value)
        if(this.head ==null)
        {
            this.head=node
        }
        else{
            let curr=this.head
            while(curr && curr.next!=null)
            {
                curr=curr.next
            }
            curr.next=node
        }
    }

    dequeue()
    {
        if(this.head ==null){
            console.log("queue underflow")
        }
        else{
            let del = this.head.value
            this.head = this.head.next
        }
    }

    display()
    {   
        const node = new Node()
        if(this.head ==null)
        {
            console.log("queue underflow")
        }
        else{
            let curr=this.head
            let listValue =''
            while(curr)
            {
                listValue+=`${curr.next} `
                curr=curr.next
            }
            console.log(listValue)
        }
    }
}

const myqueue = new Queue()
myqueue.display()
myqueue.enqueue(10)
myqueue.enqueue(20)
myqueue.enqueue(30)
myqueue.enqueue(40)
myqueue.display()
myqueue.dequeue()
myqueue.display()
