  const user = {
    name :  "Sarvesh",
    age  :  18,

    welcomemessage : function () {
        console.log(`${this.name}, welcome to website`)
        console.log(this)

    }
}

  user.welcomemessage()

  function myfunn(){
    console.log(this)
  }
myfunn()


// delcreation of arrow function
const myfun = () => {
    let name = "Sarvesh"
    console.log(name)
}
myfun()

