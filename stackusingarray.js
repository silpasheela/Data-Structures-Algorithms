class Stack{
    constructor()
    {
        this.stack =[]
        this.size =0
    }

    push(value)
    {
        if(this.size==0)
        {
            this.stack[0] = value
        }
        else{
            this.stack[this.size]=value
        }
        this.size++
    }

    pop()
    {
        if(this.size==0)
        {
            console.log("stack underflow")
        }
        else{
            let popped = this.stack[this.size-1]
            this.size--
            this.stack.length--
            return popped
        }
    }

    display()
    {
        if(this.size==0)
        {
            console.log("stack underflow")
        }
        else{
            for(let i=0;i<this.stack.length;i++)
            {
                console.log(this.stack[i])
            }
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
