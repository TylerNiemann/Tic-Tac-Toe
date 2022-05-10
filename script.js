const gameBoard = (() => {
    const board = Array.from({length: 9});
    const updateGrid = (num,sign) => {
        if (board[num] !== 'x' && board[num] !== 'o') {
            board.splice(num,1,sign);
            for(let i = 0; i < board.length; i ++){
                document.getElementById(`${i}`).textContent = board[i];
            }
            if (sign === 'x') {
                compInput();
            }
        }
        else if(sign === 'o'){
            compInput();
        }
        else return;
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

const compInput = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        num = Math.floor(Math.random() * (max - min) + min); 
        gameBoard.updateGrid(num,'o');
      }
      getRandomInt(0,9);
}