let a = [10,5,9,4,2,7,3,6,11,1]

let res = select(a)
console.log(a)

function select(a)
{
    for(let i=0;i<a.length;i++)
    {
        let large = i
        for(let j = i+1;j<a.length;j++)
        {
            if(a[large]<a[j])
            {
                large = j
            }
        } 
        let temp = a[i]
        a[i] = a[large]
        a[large] = temp
    }
    return a
}