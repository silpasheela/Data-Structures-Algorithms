class Queue{
    constructor(){
        this.s1=[]
        this.s2=[]
    }

    enqueue(value){
        this.s1.push(value)
    }

    dequeue(){
        if(this.s1.length==0&&this.s2.length==0)
        {
            console.log("queue underflow")
        }
        if(this.s2.length==0)
        {
            while(this.s1.length!=0)
            {
                this.s2.push(this.s1[0])
                this.s2.shift()
            }
        }
    }

    display(){
        for(let i=0;i<this.s1.length;i++)
        {
            console.log(s1[i])
        }
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.display()