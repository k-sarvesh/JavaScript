const input = document.querySelector('input');
const button = document.querySelector('button');
const copyImg = document.querySelector('img');


function generatePass(length = 12){
    if(length < 8 ){
        throw new Error("Password length must be at least 8");
    }
     const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}<>?/";
    const allchar = lower + upper + numbers + symbols;

    const Password = [];
    Password.push(randomChar(lower));
    Password.push(randomChar(upper));
    Password.push(randomChar(numbers));
    Password.push(randomChar(symbols));

    for(let i = Password.length; i < length;i++){
        Password.push(randomChar(allchar));
    }
    input.value = shuffle(Password).join("");
}

function randomChar(chars) {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % chars.length;
    return chars[randomIndex];
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function copyPass(){
    input.select();
    document.execCommand("copy");
}

