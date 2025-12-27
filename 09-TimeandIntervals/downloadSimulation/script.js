let count = 0;
let sec = 5;
let progress = document.querySelector('.progress-bar');

let intv = setInterval(function() {
    if(count<=99) {
        count++;
        progress.style.width = `${count}%`;
        document.querySelector('.percent').innerText = `${count}%`;
    } else{
        document.querySelector("h3").innerText = "Downloaded !";
        clearInterval(intv);
    }
},(sec * 1000) / 100);