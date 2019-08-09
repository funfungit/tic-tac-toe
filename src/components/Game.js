import React from 'react'
import Board from './Board'
import { calculateWinner } from '../utils'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(16).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick = ({ target: { id } }) => {
    const { stepNumber, xIsNext } = this.state
    const history = this.state.history.slice(0, stepNumber + 1)
    const current = history[stepNumber]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[id]) {
      return
    }
    squares[id] = xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    })
  }

  jumpTo = ({ target: { value } }) => {
    const { history } = this.state
    this.setState({
      stepNumber: value,
      xIsNext: value % 2 === 0,
      history: history.filter((turn, index) => {
        return index <= value
      })
    })
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      if (move === history.length - 1) {
        return null
      }
      return (
        <li key={move}>
          <button value={move} onClick={this.jumpTo}>
            {move ? `Go to move #${move}` : 'Go to game start'}
          </button>
        </li>
      )
    })

    let status
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} handleClick={this.handleClick} />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default Game
