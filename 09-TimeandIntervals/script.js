let count= 10;
const finalCount = document.querySelector('.countDown');

let countdown = setInterval(() =>{
    if(count >= 1){
        console.log(count);
        finalCount.innerHTML = count;
        count--;
    }
    else{
        clearInterval(countdown);
        finalCount.innerHTML = "Happy New Year!";
    }
}, 1000);