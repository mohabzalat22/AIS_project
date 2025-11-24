import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter-container">
      <h1>Simple Counter</h1>
      <div className="counter-display">
        <span className="count-number">{count}</span>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} className="counter-btn decrement">
          -
        </button>
        <button onClick={reset} className="counter-btn reset">
          Reset
        </button>
        <button onClick={increment} className="counter-btn increment">
          +
        </button>
      </div>
    </div>
  )
}

export default App
