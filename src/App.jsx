import React, { useState } from 'react'
import './App.css'
import Board from './Components/Board/Board'
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

const App = () => {
  const [board,setboard] = useState(Array(9).fill(null));
  const [XIsPlaying,setXIsPlaying] = useState(true);
  const [XScore,setXScore] = useState(0)
  const [OScore,setOScore] = useState(0)
  const [GameOver,setGameOver] = useState(false)
  const [Tie,setTie] = useState(0)

  const win_conditions = [

            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
  ]

  const handleBoxClick = (boxID) => {
      const updatedboard = board.map((value,id) => {
          if(boxID === id)
          {
            return XIsPlaying ? 'X' : 'O';
          }
          else
          {
            return value
          }
      })
      setXIsPlaying(!XIsPlaying);
      setboard(updatedboard);
      const winner = checkWinner(updatedboard);
      if(winner)
      {
        if(winner === 'X')
        {
            setXScore(XScore + 1)
            setGameOver(true)
        }
        else
        {
            setOScore(OScore + 1)
            setGameOver(true)
        }
      }

  let filled = true

  updatedboard.map((item) => {
      if(item === null)
      {
        filled = false;
      }
      return null;
  })

  if(filled && winner !== 'X' && winner !=='O')
  {
    alert('Tie');
    setboard(Array(9).fill(null))
    filled = true;
    setTie(Tie + 1)
  }

}

  const checkWinner = (updatedboard) => {
      for(let i=0; i<win_conditions.length ; i++)
      {
          const [x,y,z] = win_conditions[i];
          if(updatedboard[x] && updatedboard[x] === updatedboard[y] && updatedboard[y] === updatedboard[z])
          {
            return updatedboard[x]
          }
      }
  }

  const reset = () => {
    setGameOver(false);
    setboard(Array(9).fill(null))
  }

  const restart = () => {
    setGameOver(false);
    setboard(Array(9).fill(null))
    setXScore(0)
    setOScore(0)
    setTie(0)
  }
 
  return (
    <div className='app'>
        <ScoreBoard XScore={XScore} OScore={OScore} Tie={Tie} Playing={XIsPlaying}/>
        <Board board={board} onClick={GameOver === true ? reset : handleBoxClick}/>
        <button className='btn' onClick={reset}>Play Again</button>
        <button className='btn' onClick={restart}>Restart</button>
    </div>
  )
}

export default App
