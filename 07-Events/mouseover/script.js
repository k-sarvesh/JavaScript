const block = document.querySelector('.block');

block.addEventListener('mouseover', () =>{
    block.style.backgroundColor = 'blue';

})
block.addEventListener('mouseout', () =>{
    block.style.backgroundColor = '#4CAF50';
})
