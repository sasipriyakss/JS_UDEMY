const number=[1,2,3,4,5,6,7,8,9,10];
const even=[];
const odd=[];
number.forEach(n =>{
    if(n%2===0)
    {
        even.push(n);
    }
    else
{
    odd.push(n);
}
}
)

console.log(even);
console.log(odd);