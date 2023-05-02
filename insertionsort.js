let a = [10,5,9,4,3,8,6,1,7]

function insertion(a)
{
    for(let i =1;i<a.length;i++)
    {
        numberToInsert = a[i]
        let j = i-1
        while(j>=0 && a[j]>numberToInsert)
        {
            a[j+1] = a[j]
            j--
        }
        a[j+1] = numberToInsert
    }
}
insertion(a)
console.log(a)