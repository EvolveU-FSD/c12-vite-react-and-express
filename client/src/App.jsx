import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(100)

  const fetchCount = async () => {
    const response = await fetch('/api/value')
    const countText = await response.text()
    setCount(Number.parseInt(countText))  
  }

  const incrementCount = async () => {
    const response = await fetch('/api/increment')
    const countText = await response.text()
    setCount(Number.parseInt(countText))  
  }

  const decrementCount = async () => {
    const response = await fetch('/api/decrement')
    const countText = await response.text()
    setCount(Number.parseInt(countText))  
  }

  useEffect(() => {
    fetchCount()
  }, [])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCount}>
          count is {count}
        </button>
        <button onClick={decrementCount}>Decrement</button>
        <p>
          We are freely editing App.jsx
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
