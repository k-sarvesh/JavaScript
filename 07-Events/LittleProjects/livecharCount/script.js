const one
 = document.querySelector('.one');
const two = document.querySelector('.two');
const span = document.querySelector('.unlimit');
const temp = document.querySelector('.limit');

one.addEventListener('input', (dets)=>{
    span.innerText = dets.target.value.length;
})

two.addEventListener('input', (e)=>{
    let value = 20 - e.target.value.length; 
    temp.innerText = value;
    if(value < 0){  
        temp.style.color = 'red';
    }
    else{
        temp.style.color = 'black';
    }
})