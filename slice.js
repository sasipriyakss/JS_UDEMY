//slice

const num=[1,2,3,4,5,6,7,8];

console.log(num.slice(2,6));


//splice is to remove elements in array it will change the original  array

// removed_element=Splice(start,length,new element)


const n1=[1,2,3,4,5,6,7,8];
n1.splice(2,0,45,56);
console.log(n1);


// array concat method

const a=[10,20,30];
const b=[40,50];
const c=[60,70];

let d=a.concat(b,c,[34,56],['a','b','c']);
console.table(d);
