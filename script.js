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
    const filterArray = () => {
        let xArray = [];
        let oArray = [];
        for (let i = 0; i < gameArray.length; i=i+2) {
            xArray.push(gameArray[i]);
        }
        console.log(xArray)

        if (xArray.length > 3) {
            checkWinner(xArray);
            console.log(xArray)
        }

    }
    const checkWinner = arr => {
        winningXCombinations.forEach((combination) => {
            if (combination = arr) {
                declareWinner('X');
            } else return;
        });
    }
    const declareWinner = mark => {
        console.log(mark + ' WINS')
    }
    return { generateBoard, filterArray };
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
winningXCombinations = [
    ["0", "4", "8"],
    ["2", "4", "6"]
];

function addPlayerMark(e) { //on click event
    console.log(player1Turn);
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
    console.log(gameArray);
    gameBoard.filterArray();
};