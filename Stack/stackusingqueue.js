class Stack{
    constructor()
    {
        this.queue = []
    }

    push(value)
    {
        this.queue.push(value)
        for(let i=0;i<this.queue.length;i++)
        {
            this.queue.push(this.queue[0])
            this.queue.shift();
        }
    }

    pop()
    {
        if(this.queue.length==0)
        {
            console.log("stack underflow")
        }
        else{
            this.queue.shift();
        }
    }

    display()
    {
        if(this.queue.length==0)
        {
            console.log("stack underflow")
        }
        else{
            for(let i=0;i<this.queue.length;i++)
            {
                console.log(this.queue[i])
            }
        }
    }
}

const stackqueue = new Stack()
stackqueue.display()
stackqueue.push(10)
stackqueue.display();
stackqueue.push(20)
stackqueue.push(30)
stackqueue.push(40)
stackqueue.display();
stackqueue.pop()
stackqueue.display();