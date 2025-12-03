function add(num1 , num2){
    return num1 + num2
}
let result = add(3,5)
console.log(result)

function loginusermessage(username = "user"){
    if(!username){
        console.log("Please enter a valid username")
    }
    return `Hello ${username}, welcome back!`
}
console.log(loginusermessage("Sarvesh"))

// object passing to fuction 
const user = {
    name : "Sarvesh",
    courcename : "JavaScript"
}

function handleobject(obj){
    return `Hello ${obj.name} welcome to my cource ${obj.courcename}`
}

console.log(handleobject(user))
// u can also do like this without creating object
// console.log({
//     name : "Sarvesh",
//     courcename : "JavaScript"
// })

const myarray = [1,2,3,4,5]

function handlearray(arr){
    return arr[3]

}
console.log(handlearray(myarray))
// u can also do like this without creating array
// console.log(handlearray([1,2,3,4,5]))
