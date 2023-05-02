let arr = [10,5,7,2,8,9,6,3,1]

quick(arr,0,arr.length-1);

function quick(arr=[],start,end)
{
    if(start>=end)
    {
        return
    }

    let low = start
    let high = end
    let mid = Math.ceil(low+high)/2

    let piv = arr[mid]

    while(start<=end)
    {
        if(arr[start]<piv)
        {
            start++
        }
        if(arr[end]>piv)
        {
            end--
        }
    }
    if(start<=end)
    {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    quick(arr,low,end)
    quick(arr,start,high)
}
console.log(arr)