import React from 'react'
import Square from './Square'

function Board({ squares, handleClick }) {
  return (
    <div>
      <div className='board-row'>
        <Square id='0' squares={squares} handleClick={handleClick} />
        <Square id='1' squares={squares} handleClick={handleClick} />
        <Square id='2' squares={squares} handleClick={handleClick} />
        <Square id='3' squares={squares} handleClick={handleClick} />
      </div>
      <div className='board-row'>
        <Square id='4' squares={squares} handleClick={handleClick} />
        <Square id='5' squares={squares} handleClick={handleClick} />
        <Square id='6' squares={squares} handleClick={handleClick} />
        <Square id='7' squares={squares} handleClick={handleClick} />
      </div>
      <div className='board-row'>
        <Square id='8' squares={squares} handleClick={handleClick} />
        <Square id='9' squares={squares} handleClick={handleClick} />
        <Square id='10' squares={squares} handleClick={handleClick} />
        <Square id='11' squares={squares} handleClick={handleClick} />
      </div>
      <div className='board-row'>
        <Square id='12' squares={squares} handleClick={handleClick} />
        <Square id='13' squares={squares} handleClick={handleClick} />
        <Square id='14' squares={squares} handleClick={handleClick} />
        <Square id='15' squares={squares} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Board
