class Queue{
    constructor()
    {
        this.queue = []
        this.size=0
    }

    enqueue(value)
    {
        if(this.size==0)
        {
            this.queue[0] = value
        }
        else{
            this.queue[this.size] = value
        }this.size++
    }

    dequeue(){
        if(this.size==0)
        {
            console.log("queue underflow")
        }
        else{
            let first = this.queue[0]
            for(let i=0;i<this.size-1;i++)
            {
                this.queue[i] = this.queue[i+1]
            }
            this.queue.length--;
            this.size--
        }
    }

    display(){
        for(let i=0;i<this.size;i++)
        {
            console.log(this.queue[i])
        }
    }
}

const q = new Queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.display()
q.dequeue();
q.display();