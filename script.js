const gameBoard = (() => {
//const board = Array.from({length: 9});//
const board = ['x','o','x','o','x','o','x','o','x']
const gridContainer = document.querySelector('grid-container');
const gridBoard = document.querySelectorAll(`gridBoard`);
for(let i = 0; i < board.length; i ++){
    document.getElementById(`${i}`).textContent = board[i];
}       
})();