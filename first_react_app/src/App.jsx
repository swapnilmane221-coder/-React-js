import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>code step by step</h1>
     <h1>hello react</h1>
     <User />
     <h2>count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  )
}

export default App
