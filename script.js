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
            content.setAttribute("id", i);
        } // end of for loop
    }
    console.log(container)
    const playGame = () => {
        console.log('Playing the game ...')
    }
    return { sayHi, generateBoard };
})();

let gameArray = [];
const gameObject = {
    player1Mark: 'x',
    player2Mark: 'o'
};

gameBoard.sayHi();
gameBoard.generateBoard();

// Event LISTENERS
const boxes = Array.from(document.getElementsByClassName('box'));
boxes.forEach((box) => {box.addEventListener('click', addMark);});
player1Turn = true;

function addMark(e) {
    // player factory
    const playerFactory = mark => {
        const addXMark = () => {
            console.log(`Player ${mark} is here`);
            e.target.innerText = mark;
        };
        return { addXMark };
    };
player1 = playerFactory('x');
player1.addXMark();
};