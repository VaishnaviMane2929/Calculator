const playboard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5, snakeY = 10;

const changeFoodPosition = () => {
    //
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    htmlMarkup += `<div class="food" style="grid-area: ${snakeY} / ${snakeX}"></div>`;

    playboard.innerHTML = htmlMarkup;
}
changeFoodPosition();
initGame();