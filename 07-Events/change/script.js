

const changes = document.querySelector('select');
const device = document.getElementById('device');
const fullbody = document.querySelector('body');
let images = null;

changes.addEventListener('change', function(dets){
    const result = dets.target.value;
    console.log(result);
    device.innerHTML = `${result} selected`;
    
    
    if(images != null){
        images.remove();
    }
    images = document.createElement('img'); 
    if(result === 'samsung'){
        images.src = 'https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png';
}
    else if(result === 'Apple'){
        images.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBp1jaowJIAnli5A7WT6ksGCzx8P9pLunyg&s';
    }
    else if(result === 'Oppo'){
        images.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsluIwXzMkRqOH93axplqk4j196b5aUvGEw&s';
    }
    else{
        images.src = 'https://static.vecteezy.com/system/resources/previews/068/764/237/non_2x/realme-wordmark-typography-logo-mobile-company-brand-official-icon-transparent-background-free-png.png';
    }
    fullbody.appendChild(images);

})