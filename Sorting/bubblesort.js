let a = [1,5,7,8,2]

for(let i =0;i<a.length;i++)
{
    for(j=i+1;j<a.length;j++)
    {
        if(a[i]>a[j])
        {
            let temp = a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log(a)