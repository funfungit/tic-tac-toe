import React from 'react'
import Square from './Square'

function Board({ squares, handleClick }) {
  return (
    <div>
      <div className='board-row'>
        <Square id='0' squares={squares} handleClick={handleClick} />
        <Square id='1' squares={squares} handleClick={handleClick} />
        <Square id='2' squares={squares} handleClick={handleClick} />
      </div>
      <div className='board-row'>
        <Square id='3' squares={squares} handleClick={handleClick} />
        <Square id='4' squares={squares} handleClick={handleClick} />
        <Square id='5' squares={squares} handleClick={handleClick} />
      </div>
      <div className='board-row'>
        <Square id='6' squares={squares} handleClick={handleClick} />
        <Square id='7' squares={squares} handleClick={handleClick} />
        <Square id='8' squares={squares} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Board
