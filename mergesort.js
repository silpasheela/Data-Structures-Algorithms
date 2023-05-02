let a = [10,25,12,7,18,9,5,8,1,14]

let sorted = sort(a)
console.log(sorted)

function sort(a=[])
{
    if(a.length==1)
    {
        return a
    }

    let mid = Math.ceil((a.length)/2)
    let left = sort((a.slice(0,mid)))
    let right = sort((a.slice(mid,a.length)))

    return merge(left,right)
}

function merge(left=[],right=[])
{
    let i=0;
    let j=0;
    let k=0;

    let mixed = []

    while(i<left.length && j<right.length)
    {
        if(left[i]<right[j])
        {
            mixed[k] = left[i]
            i++
        }

        else
        {
            mixed[k] = right[j]
            j++
        }
        k++;
    }

    while(i<left.length)
    {
        mixed[k] = left[i]
        i++
        k++
    }

    while(j<right.length)
    {
        mixed[k] = right[j]
        j++
        k++
    }

    return mixed
}