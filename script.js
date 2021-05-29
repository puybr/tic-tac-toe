// The Gameboard Module
const gameBoard = (function () {
    'use strict'
    const generateBoard = () => {
        const container = document.querySelector('#container');
        for (let i = 0; i < 9; i++) {
            const content = document.createElement('div');
            content.classList.add('box');
            container.appendChild(content);
            content.setAttribute("id", i);        
        } // end of for loop
    }
    const splitArray = () => {
        let xArray = [];
        for (let i = 0; i < gameArray.length; i=i+2) {
            xArray.push(gameArray[i]);
        }
        const oArray = gameArray.filter(val => !xArray.includes(val));
        console.log(oArray);
        checkWinner(xArray.sort());
        checkWinner(oArray.sort())

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
    return { generateBoard, splitArray };
})();

gameBoard.generateBoard();

// Event LISTENERS
const boxes = Array.from(document.getElementsByClassName('box'));
boxes.forEach((box) => {box.addEventListener('click', addPlayerMark);});



// player factory
const playerFactory = mark => {
    const addMark = () => { console.log(`${mark}`); };
    selectedMark = mark;
    return { addMark, selectedMark };
    };

// create player objects
player1 = playerFactory('x');
player2 = playerFactory('o');
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