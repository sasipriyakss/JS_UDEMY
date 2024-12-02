//print odd and even numbers

const num1=[1,2,3,4,5,6,7,8,9,10];

const even=num1.filter(n=> n%2===0);
const odd=num1.filter(n=> n%2!==0);

console.log(even);
console.log(odd);

//print age>30 in an object array

let users=[
    {name:"ram",age:34},
    {name:"sam",age:23},
    {name:"balu",age:31}
]

let eligibleAge=users.filter(user=> user.age>30);

console.log(eligibleAge);

//select a four letter word in the given array

let animals=['cat','dog','fish','elephant','duck'];

let four=animals.filter(animal=>animal.length===4);

console.log(four);

//working with shopping cart 

let products=[
    {name:'apple',category:'fruit',price:100},
    {name:'carrot',category:'vegitable',price:120},
    {name:'banana',category:'fruit',price:80},
    {name:'mango',category:'fruit',price:130}
];

let fruit=products.filter(product=> product.category==='fruit');

console.log(fruit);

//Multiple condition=>shopping cart

let expenciveFruits=products.filter(product=> product.category==='fruit' && product.price>=100);

console.log(expenciveFruits);

//List of books find the books with the term 'HTMl'

const books=[
{title:'JAVA', year:2011},
{title:'HTML and CSS',year:2012},
{title:'python',year:2013},
{title:'html',year:2010}

];

const searchTerm='HTML'.toLowerCase();

const year=2011;

const filterBook=books.filter(book=>{
    return book.title.toLowerCase().includes(searchTerm) || book.year===2011
})

console.log(filterBook);