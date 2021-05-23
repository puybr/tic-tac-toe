// The Gameboard Module
const gameBoard = (function () {
    'use strict'
    const sayHi = () => console.log('This is a new gameboard!');
    const generateBoard = () => {
        const container = document.querySelector('#container');
        for (let i = 0; i < 9; i++) {
            const content = document.createElement('div');
            content.classList.add('box');
            container.appendChild(content);
            gameArray.push(gameObject);
        } // end of for loop
    }
    const playGame = () => {
        console.log('Playing the game ...')
    }
    return {
        sayHi,
        generateBoard
    };
})();

let gameArray = [];
console.log(gameArray)

const gameObject = {
    player1: 'x',
    player2: 'o'
};

gameBoard.sayHi();
gameBoard.generateBoard();

const boxes = Array.from(document.getElementsByClassName('box'));
boxes.forEach((box) => {
    box.addEventListener('click', addXMark);
    function addXMark(e) {
        e.target.innerText = 'x';
    }
});