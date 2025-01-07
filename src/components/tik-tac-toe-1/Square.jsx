import React from 'react'

export const Square = ({ value, onClick }) => {
 
    return (
    <div>
      <button className="square" onClick={onClick}>
      {value}
    </button>
    </div>
  )
}


