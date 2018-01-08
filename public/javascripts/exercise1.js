function gameOfLife(){}

gameOfLife.prototype.checkAround = function (board, row, column){
  let count = 0
  for (let i = row - 1; i <= row + 1; i++){
    if (i < 0 || i >= board.length) continue;
    for (let j = column - 1; j <= column + 1; j++){
      if ((i === row && j === column) || j < 0 || j >= board[0].length) continue;
      let value = board[i][j]
      count += value
    }
  }
  return count
}
//we only need the row length, since then we can tack on an array however we like. without the row to start though, we cannot access it like an array
gameOfLife.prototype.createBlankBoard = function (length){
  let blankBoard = []
  for (let i = 0; i < length; i++){
    blankBoard[i] = []
  }
  return blankBoard
}

gameOfLife.prototype.playTurn = function (boardArray){
  let newBoard = this.createBlankBoard(boardArray.length)
  for (let row = 0; row < boardArray.length; row++){
    for (let column = 0; column < boardArray[0].length; column++){
      let count = this.checkAround(boardArray, row, column)
      //initially alive conditions:
      if (boardArray[row][column]){
        if (count < 2 || count > 3) {
          newBoard[row][column] = 0;
        }
        else {newBoard[row][column] = 1}
      }//initially dead conditions:
      else if (count === 3) {
          newBoard[row][column] = 1;
      }
      else {newBoard[row][column] = 0}
    }
  }
  return newBoard
}
