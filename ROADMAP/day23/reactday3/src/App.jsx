import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <p>React Day 3</p>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </header>
        </div>
  </>
  )
}
 
export default App
