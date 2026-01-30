const clocks = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clocks.innerHTML = date.toLocaleTimeString();
}, 1000);