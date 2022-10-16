import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    // deleted the constructor in this instance because 'Square' no longer keeps track of the game's state!
  render() {
    return (
        <button className='square'
         onClick={() => this.props.onClick()}>
        {this.props.value}
        </button>
    );
  }
   // this inherits the value property from 'class Board'
}

// 'class Square' renders a single <button>

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
  renderSquare(i) {
    return (<Square value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} />); //Splitting return element and added parens to override JavaScript adding a semicolon to the code.
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// 'class Board' renders 9 different squares. 


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


// To collect data from multiple children, or to have two child components communicate with each other, 
// you need to declare the shared state in their parent component instead.
// The parent component can pass the state back down to the children by using props;
// this keeps the child components in sync with each other and with the parent component.