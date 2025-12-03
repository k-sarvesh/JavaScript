// object literals
const email = Symbol("email")
const obj1 = {
    name : "Sarvesh",
    age : 18,
    location : "India",
    [email] : "sarveshkhawale17@rbunagpur.in",
    isLoggedIn :false,
    lastLoginDays : ["Monday","Friday"]
}


console.log(obj1)
console.log(obj1.name)
console.log(obj1["age"])
console.log(obj1[email])

obj1.greeting = function(){
    console.log("Hello User")
}
console.log(obj1.greeting())
obj1.greeting2 = function(){
    console.log(`Hello, ${this.name} here`)
}
console.log(obj1.greeting2())