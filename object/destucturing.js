//destructuring before ES6 and after ES6

//before ES6
//array
const numbers=[1,2,3,4,5];
const first=numbers[0];
const second=numbers[1];
const rest=numbers.slice(2);  // slice from the index 2

console.log(first);
console.log(second);
console.log(rest);

//after ES6

const num=[1,2,3,4,5];
const[f,s,...r]=num;
console.log(f);
console.log(s);
console.log(r);   // same result to compare the above array

//Object Destructuring
//before ES6

const person={name:"Joes", age:30, gender:"male"};

const name=person.name;  // Dot notation

const age=person["age"]; //bracket notation

const gender=person.gender;

console.log(name);
console.log(age);
console.log(gender);

// After ES6
const person1={name1:"Joes", age1:30, gender1:"male"};

const {name1, age1, gender1} = person1;

console.log(name1);
console.log(age1);
console.log(gender1);

//using default values with array destucturing

const n1=[1, 2 ,30];

const [x , y ,z=3]=n1;
console.log(x);
console.log(y);
console.log(z);

// using default value for the object 

const person2={name2:"dev",age2:30}; //the third key gender is not available in the object using destucturing we can crate and assign gender key

const {name2,age2,gender2="male"}=person2;

console.log(name2);
console.log(age2);
console.log(gender2);

// using spread operator for object

let myObj={a:1,b:2,c:3,d:4,e:5,f:6,g:7};

let {a,b,...res}=myObj;
console.log(a);
console.log(b);
console.log(res);


//skipping unwanted elements in an array

let myArray=[1,2,3,4,5];
let [fir,,,,fifth]=myArray;
console.log(fir,fifth);

