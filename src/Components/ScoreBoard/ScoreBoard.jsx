import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({XScore,OScore,Tie,Playing}) => {
  return (
    <div className='scoreboard'>
        <span className={`x-score ${Playing === true ? 'xplay' : ''}`}>X - {XScore}</span>
        <span className={`o-score ${Playing === false ? 'oplay' : ''}`}>O - {OScore}</span>
        <span className='tie-score'>Tie - {Tie}</span>
    </div>
  )
}

export default ScoreBoard
