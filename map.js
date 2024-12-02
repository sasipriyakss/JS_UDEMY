const number=[1,2,3,4,5];

const sqrt= number.map(num=>{
   return Math.sqrt(num).toFixed(1);
})

console.log(sqrt);


const users=[{name:"sam",age:15},{name:"ram", age:20},{name:"hari", age:23}];

console.table(users);

let eligible_status=users.map((user)=>({
  name:user.name,
  age:user.age,
  status:user.age>=18?"Eligible":"Not Eligible"


}));

console.table(eligible_status);

let spread_eligible=users.map((user)=>({
...user,
status:user.age>=18?"Eligible":"Not Eligible"

}));

console.table(spread_eligible);

//1.Simple transfermation of the array

const num1=[1,2,3,4,5];

const double=num1.map(n=> n*2);

console.log(double);
// 2. Change case of the array element
const words=["hello","world"];
console.log(words);

const capital=words.map(word=>word.toUpperCase());
console.log(capital);

//3. cpmbine the two arrays

const fruits=["apple", "banana"];
const color=["red","yellow"];

const newarr=fruits.map((f,i)=>f+"-"+color[i]);

console.log(newarr);


//4.Extracting properties from an Array of Object

const names1=users.map(user=>user.name);

console.log(names1);

//5.updating the array

const update=users.map(user=>{
return{
  name:user.name,
  age:user.age+5

}
}
);

console.table(users);
console.table(update);
