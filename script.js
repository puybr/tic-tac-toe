// The Gameboard Module
const gameBoard = (function () {
    'use strict'
    const sayHi = () => console.log('This is a new gameboard!');
    const generateBoard = () => {
        const container = document.querySelector('#container');
        for (let i = 0; i < 9; i++) {
            const content = document.createElement('div');
            content.classList.add('content');
            container.appendChild(content);
        }

    }
    return {
        sayHi,
        generateBoard
    };
})();

gameBoard.sayHi();
gameBoard.generateBoard();