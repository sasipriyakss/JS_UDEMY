let numbers=[1,2,3,4,5];
let sum=numbers.reduce((acc,curr)=>acc+curr);

console.log(sum);

//flattening the array

let nestedArray=[[1,2],[2,3],[4,5]];
let flatenedArray=nestedArray.reduce((acc,curr)=> acc.concat(curr)); //each small array is comes inside the curr

console.log(flatenedArray);

//create a empty object count the values in an array and finally return the value

let colors=["red","blue","red","green","red","blue"];

let colourCount=colors.reduce((acc,curr)=>{
    if(curr in acc)
    {
     acc[curr]++;
    }else{
        acc[curr]=1;   // it takes the colors as the index
    }
    return acc;
},{})

console.table(colourCount);

// find the largest value in the arrya

let num2=[4,7,98,78,67,100];

let largest= num2.reduce((acc,curr)=>{
    return Math.max(acc,curr);
});

console.log("largest number is  "+largest);


// 