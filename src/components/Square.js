import React from 'react'

function Square({ id, handleClick, squares }) {
  const value = squares[id] || null
  return (
    <button id={id} className='square' onClick={handleClick}>
      {value}
    </button>
  )
}

export default Square
