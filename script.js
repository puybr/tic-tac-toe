// The Gameboard Module
const gameBoard = (function () {
    'use strict'
    const generateBoard = () => {  
        for (let i = 0; i < 9; i++) {
            const content = document.createElement('div');
            content.classList.add('box');
            container.appendChild(content);
            content.setAttribute("id", i);     
        } // end of for loop
        const boxes = Array.from(document.getElementsByClassName('box')); // Event Listeners
        boxes.forEach((box) => {box.addEventListener('click', addPlayerMark);});
        const winnerHeader = document.querySelector('#winner');
        winnerHeader.innerHTML = '';
    }
    const restartBoard = () => {
        console.log('restart');
        console.log(container);
        container.innerHTML = '';
        gameArray = [];
        generateBoard();

    }

    const splitArray = () => {
        let xArray = [];
        for (let i = 0; i < gameArray.length; i=i+2) {
            xArray.push(gameArray[i]);
        }
        const oArray = gameArray.filter(val => !xArray.includes(val));
        checkWinner(xArray.sort());
        checkWinner(oArray.sort());

    }
    const checkWinner = arr => {
        const winningCombinations = [
            ["0", "4", "8"],
            ["2", "4", "6"],
            ["2", "5", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"]
        ];
        winningCombinations.forEach((combination) => {
            const filteredArray = arr.filter(val => combination.includes(val));
            if (JSON.stringify(combination) === JSON.stringify(filteredArray)) {
                const getElement =  document.getElementById(combination[0]);
                const winner = getElement.innerText
                combination.forEach((combo) => {
                    const winnerMark = document.getElementById(combo);
                    winnerMark.setAttribute('style', 'background-color: grey');
                })
                declareWinner(winner);
            } else return;
        });
    }
    const declareWinner = mark => {
        const winner = document.createElement('div');
        const winnerHeader = document.querySelector('#winner');
        winnerHeader.appendChild(winner);
        winner.innerHTML = `${mark} WINS!`;
        console.log(`${mark} WINS!`);
    }
    return { generateBoard, splitArray, restartBoard };
})();

gameBoard.generateBoard();

// Restart Game
const restartGame = document.querySelector('#restart');
restartGame.addEventListener('click', restart);
function restart() {
    gameBoard.restartBoard();
}

// Player Factory
const playerFactory = mark => {
    const addMark = () => { console.log(`${mark}`); };
    selectedMark = mark;
    return { addMark, selectedMark };
    };

// Create Player Objects
player1 = playerFactory('X');
player2 = playerFactory('O');
let player1Turn = true;
let gameArray = [];

function addPlayerMark(e) { //on click event
    if (player1Turn) {
        e.target.innerText = player1.selectedMark;
        player1.addMark();
        player1Turn = false;
    }
    else {
        e.target.innerText = player2.selectedMark;;
        player2.addMark();
        player1Turn = true;
    }
    e.target.removeEventListener('click', addPlayerMark);
    gameArray.push(e.target.id);
    gameBoard.splitArray();
};