const num=[1,2,4,5,6];
const contact=[{name:"ram",city:"salem"},
    {name:"sam",city:"Trich"}
]
num.forEach(n => console.log (n));
contact.forEach(value=>{
  console.log(value.name, value.city);
    
})
let count=0;
// find the total
let total=0;
num.forEach(n=>{
    total+=n;
    count++;
})

console.log(total);

// double the arrya values and double the number and store the values in the new array

const double=[];

num.forEach(n => {
    double.push(n*2)
})

console.log(double);

// find the maximum number in the given array

let max=num[0];

num.forEach(n => {
    if(max<n)
    {
        max=n;
    }
});
console.log("maximum number is:")
console.log(max);

console.log("The average of the given array is"+" "+ total/num.length);
console.log("The average of the given array is"+" "+ total/count);