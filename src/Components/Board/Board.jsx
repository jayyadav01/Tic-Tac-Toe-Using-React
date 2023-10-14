import React from 'react'
import './Board.css'
import Box from '../Box/Box'

function Board({board , onClick ,id}) {
  return (
    <div className='board'>
        {
          board.map((item,id) => (
              <Box id={id} value={item} key={id} onClick={() => item === null && onClick(id)}/>
          ))
        }
    </div>
  )
}

export default Board
