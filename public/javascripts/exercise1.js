 class GameOfLife{

  static validateBoard(board){
    if (!Array.isArray(board)) throw new Error('board must be Array')
    board.forEach(function(row, index){
      if (!Array.isArray(row)) throw new Error('row ' + index + 'is not an Array')
    })
    if (board.length < 1) throw new Error('input must be a non-empty array')
  }

  static createBlankBoard (length){
    let blankBoard = []
    for (let i = 0; i < length; i++){
      blankBoard[i] = []
    }
    return blankBoard
  }
  static checkAround (board, row, column){
    GameOfLife.validateBoard(board)
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
  static playTurn (oldBoard){
    GameOfLife.validateBoard(oldBoard)
    let newBoard = GameOfLife.createBlankBoard(oldBoard.length)
    for (let row = 0; row < oldBoard.length; row++){
      for (let column = 0; column < oldBoard[0].length; column++){
        let count = GameOfLife.checkAround(oldBoard, row, column)
        //initially alive conditions:
        if (oldBoard[row][column]){
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
}
//export default GameOfLife

module.exports = GameOfLife
