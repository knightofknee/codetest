import React from 'react';
import GameOfLife from '../../public/javascripts/exercise1';

/**
 * exercise 1
 */
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      game: {}
    };
  }
  componentWillMount(){
    this.setState({
      game: new GameOfLife([[0, 1, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 1, 0], [1, 0, 1, 0, 1], [0, 0, 1, 0, 1]])
    })
  }

  render() {
    return (
      <div>
        <button
        onClick={() => {
          this.setState(function(prevState, props){
            return {game: new GameOfLife(prevState.game.playTurn())}
          })
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Turn: {this.state.count}
        </button>
        <table>
          <tbody>
          {/*ternary operator here for seeing if the state is populated yet???*/}{this.state.game.currentBoard.map(function(row = [], index){
            return (
              <tr key={index}>
                {row.map(function(columnValue, index2){
                  return <td key={index2}>{columnValue}</td>})}
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
