

const board = document.querySelector('.board');
const message = document.querySelector('.message');
const blockSize = 50;
const blocks = [];

let score = document.querySelector('#score');
let time = document.querySelector('#time');
let highScore = document.querySelector('#high-score');

let seconds = 0;
let timer;
let gameLoop;

let count = 0;

let snake = [
    {x:1,y:5}
];

let direction = "right";
let food;

// board size
let cols;
let rows;



function createBoard(){

    board.innerHTML = "";

    cols = Math.floor(board.clientWidth / blockSize);
    rows = Math.floor(board.clientHeight / blockSize);

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){

            const block = document.createElement('div');
            block.classList.add('block');

            board.appendChild(block);

            blocks[`${i}-${j}`] = block;
        }
    }
}



function render(){

    snake.forEach((segment, index) => {

        let block = blocks[`${segment.x}-${segment.y}`];

        if(!block) return;

        if(index === 0){
            block.classList.add("snake-head");   // head
        }
        else{
            block.classList.add("snake-fill");   // body
        }

    });

}




function moveSnake(){

    let head ;
    if(direction === "right"){
        head = {x:snake[0].x , y:snake[0].y + 1};
    }

    else if(direction === "left"){
        head = {x:snake[0].x , y:snake[0].y - 1};
    }

    else if(direction === "up"){
        head = {x:snake[0].x - 1 , y:snake[0].y};
    }

    else if(direction === "down"){
        head = {x:snake[0].x + 1 , y:snake[0].y};
    }

    

    // wall collision
    if(head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols){

        gameOver();
        return;
    }



    // self collision
    if(snake.some(seg => seg.x === head.x && seg.y === head.y)){

        gameOver();
        return;
    }



    // clear old snake
    snake.forEach(segment => {

    let block = blocks[`${segment.x}-${segment.y}`];

    if(block){
        block.classList.remove("snake-fill");
        block.classList.remove("snake-head");
    }

});



    snake.unshift(head);

    let headCoord = `${head.x}-${head.y}`;



    // food collision
    if(headCoord === food){

        food = generateFood();

        count++;
        score.textContent = count;

        highScoreUpdate();
    } 
    else{
        snake.pop();
    }
    
    render();
}



function generateFood(){

    if(food){
        blocks[food].classList.remove('food-fill');
    }

    let foodCoord = `${getRandomIntInclusive(0,rows-1)}-${getRandomIntInclusive(0,cols-1)}`;

    if(snake.some(seg => `${seg.x}-${seg.y}` === foodCoord)){
        return generateFood();
    }

    blocks[foodCoord].classList.add('food-fill');

    return foodCoord;
}



function gameOver(){

    clearInterval(gameLoop);
    clearInterval(timer);

    message.style.display = "block";
}



function highScoreUpdate(){

    let savedHighScore = parseInt(localStorage.getItem('highScore')) || 0;

    if(count > savedHighScore){

        localStorage.setItem('highScore',count);
        highScore.textContent = count;

    }

}



function getRandomIntInclusive(min,max){

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()*(max-min+1)+min);
}



addEventListener("keydown",(e)=>{

    if(e.key === "ArrowRight" && direction !== "left"){
        direction = "right";
    }

    else if(e.key === "ArrowLeft" && direction !== "right"){
        direction = "left";
    }

    else if(e.key === "ArrowUp" && direction !== "down"){
        direction = "up";
    }

    else if(e.key === "ArrowDown" && direction !== "up"){
        direction = "down";
    }

});



window.addEventListener("load",()=>{

    createBoard();

    food = generateFood();

    render();



    gameLoop = setInterval(moveSnake,500);



    // timer
    timer = setInterval(()=>{

        seconds++;
        time.textContent = `${seconds}s`;

    },1000);



    let savedHighScore = localStorage.getItem('highScore');

    if(savedHighScore){
        highScore.textContent = savedHighScore;
    }

});