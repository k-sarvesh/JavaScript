let h1 = document.querySelector('h1');

window.addEventListener('keydown', function(dets){
    if(dets.key === " "){
        h1.innerText = "SPC";
    }
    else{
        h1.innerText = dets.key;
    }
    console.log(dets.key);
})