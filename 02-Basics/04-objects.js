// const tinderuser = {
//     name : "Sarvesh", 
//     age : 18,
//     isLoggedIn : false
// }
// console.log(tinderuser)

// const regularuser = {
//     Email : "abcd@gmail.com",
//     Name : {
//         Fullname: {
//             Firstname : "Sarvesh",
//             Lastname : "Khawale"
//         }
//     }
     
// }
// console.log(regularuser)
// console.log(regularuser.Name.Fullname.Firstname)

// const ob1 = {1: "a", 2:"b"}
// const ob2 = {3:"c", 4:"d"}
// // const ob3 = Object.assign({}, ob1, ob2)
// const ob3 = {...ob1, ...ob2}
// console.log(ob3)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))


// de-structing 

const cource = {
    name : "Sarvesh",
    courcename : "JavaScript",
    price : 999

}
const {courcename} = cource
console.log(courcename)
const {name: user} = cource
console.log(user)