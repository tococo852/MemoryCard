import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { CardManager } from './Components/cardManager/cardManager'
import { ScoreBoard } from './Components/scoreBoard/scoreBoard'
import './App.css'

function App() {
  const [currentScore,setCurrentScore]=useState(0)
  const [maxScore,setMaxScore]=useState(0)

  return (
    <>
      <header>
          <h4>Memory card!</h4>
          <p>click all 10 different cards without repeating!</p>
      </header>
      <ScoreBoard
      currentScore={currentScore}
      maxScore={maxScore}/>

      <CardManager
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      maxScore={maxScore}
      setMaxScore={setMaxScore}
      />

      <footer>by Luciano</footer>
    </>
  )
}

export default App
