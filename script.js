const gameBoard = (() => {
    const board = Array.from({length: 9});
    const updateGrid = (num,sign) => {
        board.splice(num,1,sign);
        console.log(board);
        for(let i = 0; i < board.length; i ++){
            document.getElementById(`${i}`).textContent = board[i];
        }
    }
    return {
        updateGrid
    };          
})();

const playerInput = (() => {
    const grid = Array.from(document.querySelectorAll('button.gridBoard'));
   for(let i = 0; i < grid.length; i++){
       grid[i].addEventListener('click', function(){gameBoard.updateGrid(i,'x')});
   }
})();