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
            const newGameObject = Object.create(gameObject);
            console.log(newGameObject.player1)
        }

    }
    return {
        sayHi,
        generateBoard
    };
})();

const gameObject = {
    player1: 'x',
    player2: 'o'
};

gameBoard.sayHi();
gameBoard.generateBoard();