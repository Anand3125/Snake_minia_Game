// Game Constants & Variables
let direction = { x:0, y:0 };
const foodsound = new Audio('food.mp3');
const gameoversound = new Audio('gameover.mp3');
const movesound = new Audio('./music/move.mp3');
const musicsound = new Audio('music.mp3')
let speed = 2;
let lastPaintTime= 0;
let snakearr = [
    {x: 13, y: 15}
]
food =  {x: 6, y: 7};
// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if ((ctime - lastPaintTime)/1000 < 1/speed) {
        return;
    }
    lastPaintTime= ctime;
    gameengine();
}
function gameengine() {
    // Part1: Updating the snake array & Food

    // Part2: Display the Snake and Food
    // Display the Snake

    board.innerHTML= " ";
    snakearr.forEach((e, index)=>{
        snakeElement = document.createElement('div'); 
        snakeElement.style.gridRowStart =e.y;
        snakeElement.style.gridColumnStart =e.x;
       
        if(index===0){
            snakeElement.classList.add('head');
                     }
                     else{
                        snakeElement.classList.add('snake');
                     }
                     board.appendChild(snakeElement);
      
     });
         // Display the Food
         foodElement = document.createElement('div'); 
         foodElement.style.gridRowStart =food.y;
         foodElement.style.gridColumnStart =food.x;
         foodElement.classList.add('food')
      board.appendChild(foodElement);
}

// Main Logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir ={x:0, y:1} // start the game
    movesound.play();
    switch(e.key){
        case "ArrowUp":
        console.log("ArrowUp")
        break;

        case "ArrowDown":
            console.log("ArrowDown")
            break;
            case "ArrowLeft":
                console.log("ArrowLeft")
                break;
                case "ArrowRight":
                    console.log("ArrowRight")
                    break;
    }
})
