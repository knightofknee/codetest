import React from 'react';
import GameOfLife from '../../public/javascripts/exercise1';

/**
 * exercise 1
 * can switch it up so that the state holds a board as a variable, then just brings
 * in the methods from GameOfLife
 */
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      game: [],
      boardSize: 0
    };
    this.clearBoard = this.clearBoard.bind(this)
    this.updateField = this.updateField.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.cellClick = this.cellClick.bind(this)
  }
  componentWillMount(){
    this.setState({
      game: [[0, 1, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 1, 0], [1, 0, 1, 0, 1], [0, 0, 1, 0, 1]]
    })
  }

  clearBoard(width, height){
    let newBoard = GameOfLife.createBlankBoard(width)
    // oldBoard.forEach(function(row, rIndex){
    //   row.forEach(function(column, cIndex){
    //     newBoard[rIndex][cIndex] = 0
    //   })
    // })
    for (let i = 0; i < width; i++){
      for (let j = 0; j < height; j++){
        newBoard[i][j] = 0
      }
    }
    return newBoard
  }
  updateField(ev){
    this.setState({boardSize: ev.target.value})
  }
  formSubmit(ev){
    ev.preventDefault()
    this.setState(function(prevState){
      return {game: this.clearBoard(prevState.boardSize, prevState.boardSize)}
    })
  }
  cellClick(ev){
    let target = ev.relatedTarget
    ev.persist()
    console.log('clicked',ev.target)
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState(function(prevState){
              return {game: GameOfLife.playTurn(prevState.game)}
            })
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Turn: {this.state.count}
        </button>
        <button
          onClick={() => {
            this.setState(function(prevState, props){
              return {game: this.clearBoard(prevState.game.length, prevState.game[0].length)}
            })
            this.setState({ count: 0 });
          }}
        >
          Clear Board
        </button>
        <form onSubmit={this.formSubmit}>
          <label>
            Board Size:
            <input type="number" max="10" min="1" name="boardSize"
            onChange={(ev) => this.updateField(ev)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <tbody onClick={(ev) => this.cellClick(ev)} value="hi">
          {this.state.game.map(function(row = [], index){
            return (
              <tr key={index}>
                {row.map(function(cellValue, index2){
                  return <td value={index + ' ' + index2} key={index2}>{cellValue}</td>})}
              </tr>
          )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Game;
