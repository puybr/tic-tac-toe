// The Gameboard Module
const gameBoard = (function () {
    'use strict'
    const sayHi = () => console.log('Hi, this is a new gameboard!');
    const generateBoard = () => {
        const container = document.querySelector('#container');
        for (let i = 0; i < 9; i++) {
            const content = document.createElement('div');
            content.classList.add('box');
            container.appendChild(content);
            content.setAttribute("id", i);        
        } // end of for loop
    }
    const playGame = () => {
        console.log('Playing the game ...')
    }
    playGame();
    return { sayHi, generateBoard };
})();


gameBoard.sayHi();
gameBoard.generateBoard();

// Event LISTENERS
const boxes = Array.from(document.getElementsByClassName('box'));
boxes.forEach((box) => {box.addEventListener('click', addPlayerMark);});
let player1Turn = true;

// player factory
const playerFactory = mark => {
    const addMark = () => {
    console.log(`${mark} Selected`);
};
return { addMark };
};


player1 = playerFactory('x');
player2 = playerFactory('o');
console.log(player1Turn);

function addPlayerMark(e) { //on click event
    console.log(player1Turn);
    if (player1Turn) {
        e.target.innerText = 'x';
        player1.addMark();
        player1Turn = false;
        console.log(player1Turn);
    }
    else {
        e.target.innerText = 'o';
        player2.addMark();
        player1Turn = true;
        console.log(player1Turn);
    }
};