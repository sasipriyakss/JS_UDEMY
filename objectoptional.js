// const user={
//     name:"sam",
//     address:{
//         city:"salem",
//     }
// }

// console.log(user.address?user.address.city:undefined);

// console.log(user.address&&user.address.city);

// //optional chaning method

// console.log(user.address?.city);//checks user.address if it present print that city value unless it returns undefined
//  let key='city';

//  console.log(user.address?.[key]);


 // complex data structure working in real time 

 const user_details={
    userId:'456',
    account:{
        accountNumber:'AE75457',
        holder:{
            profile:{
                firstName:'Tutor',
                lastName:'Joes',
                birthDate:'1989-10-12'
            }
        },
        contact:{
            address:{
                city:'salem',
                state:'Tamil Nadu',
                country:'India',
            },
            phone:[
                {
                    type:'Home',
                    phoneNumber:'4027825'
                },
                {
                    type:'Office',
                    phoneNumber:'9043017679'
                }
            ]
        }
    }
 }

 console.log(user_details);

//  console.log(user_details.account.holder.profile.birthDate);
 // if the profile is not not there the error occurs so avoid this use option chanining 
 // to check the object keys are available or not

 console.log(user_details.account?.holder.profile?.birthDate);