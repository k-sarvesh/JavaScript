const form = document.querySelector('form');
const nameInput = document.querySelector('.nameError');
const emailInput = document.querySelector('.emailError');
const passwordInput = document.querySelector('.passError');
const successMessage = document.querySelector('.success');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    let nm = e.target[0].value;
    let em = e.target[1].value;
    let ps = e.target[2].value;
    if(nm <= 2){
        nameInput.style.display='inline';
    }
    if(em.indexOf('@') === -1 || em.indexOf('.') === -1){
        emailInput.style.display='inline';
    }
    if(ps.length < 6){
        passwordInput.style.display='inline';
    }
    else{
        successMessage.style.display='inline';
    }  
    });