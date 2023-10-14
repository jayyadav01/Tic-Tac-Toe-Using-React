import React from 'react'
import './Box.css'

const Box = ({value,id,onClick}) => {
  return (  <button className={`box ${value === 'X' ? 'x' : 'o'}`} onClick={onClick}>{value}</button>
  )
}

export default Box