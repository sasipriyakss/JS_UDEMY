// const student={
//     fullname:"sam",
//     father:"raj",
//     age:22,
//     address:"cherry road",
//     city:"salem",
//     about:function(){
//         return `${this.fullname}is from ${this.city}`;
//     },
//     eligibility:function(){
//         return this.age>=18;
//     }
// }

// console.table(student);
// console.log(student.about());

// const studentWithMethodResult={
//     ...student,
//     about:student.about(),
//     eligibility:student.eligibility()
// }

// console.log(studentWithMethodResult);
const methods={
    about:function(){
        return `${this.fullname}is from ${this.city}`;
    },
    eligible:function(){
        return this.age>=18;
    }
}

function addUser(fullname,father,age,address,city){
    const user={};
    user.fullname=fullname;
    user.father=father;
    user.age=age;
    user.address=address;
    user.city=city;
    // user.about=function(){
    //     return `${this.fullname}is from ${this.city}`;
    // };
    // user.eligible=function(){
    //     return this.age>=18;
    // };
    // return user;

    user.about=methods.about;
    user.eligible=methods.eligible;
return user;

} 


const user2=addUser("sam","bal",45,"chennai");

console.log(user2);

