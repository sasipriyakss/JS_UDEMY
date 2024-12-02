const names=["ram","sam","pinky"];

names.forEach((n,i)=>
{
console.log(n,i);
names[i]=n.toUpperCase();
});

console.log(names);