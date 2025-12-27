const windows = document.querySelector('window');
const box = document.querySelector('.block');

window.addEventListener('mousemove', (dets)=>{
    box.style.top= dets.clientY + 'px';
    box.style.left= dets.clientX + 'px';
})