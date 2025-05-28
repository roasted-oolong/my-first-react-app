import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"]

  return (
    <>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>
        })}
      </ul>
    </>
  )
}

export default App
