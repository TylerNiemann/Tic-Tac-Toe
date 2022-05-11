const gameBoard = (() => {
    const board = Array.from({length: 9});
    let counter = 0;
    let endGame = false
    const updateGrid = (num,sign) => {
        if (counter == 9 || endGame == true) return;
        if (board[num] !== 'x' && board[num] !== 'o') {
            board.splice(num,1,sign);
            for(let i = 0; i < board.length; i ++){
                document.getElementById(`${i}`).textContent = board[i];
            }
            checkGrid(sign);
            if (sign === 'x') {
                compInput();
            }
        }
        else if(sign === 'o'){
            compInput();
        }
        else return;
    }
    const endingGame = () => {
     endGame = true;
    }
    const checkGrid = (sign) =>{
        counter ++;
        console.log(counter);
        if((board[0] == board[1] && board [1] == board[2] && board[2] !== undefined)
        ||(board[0] == board[3] && board[3] == board[6] && board[6]!== undefined)
        ||(board[6] == board[7] && board[7] == board[8] && board[8]!== undefined)
        ||(board[3] == board[4] && board[4] == board[5] && board[5] !== undefined)
        ||(board[2] == board[5] && board[5] == board[8]&& board[8] !== undefined)
        ||(board[1] == board[4] && board[4] == board[7] && board[7] !== undefined)
        ||(board[2] == board[4] && board[4] == board[6]&& board[6] !== undefined)
        ||(board[0] == board[4] && board[4] == board[8] && board[8] !== undefined)){
            if (sign === 'x') {
                results.playerWon();
                endingGame();
            }
            else if(sign === 'o') {
                results.computerWon();
                endingGame();
            }
        }
        else if(counter === 9) results.draw();
    }

    return {
        updateGrid,
        checkGrid,
        endingGame
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

const results = (() =>{
    const playerWon = () => console.log('You won');
    const computerWon = () => console.log('Computer won');
    const draw = () => console.log('It\'s a tie');
    return{
        playerWon,
        computerWon,
        draw
    }
})();