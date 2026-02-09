import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'
import Users, { Logins,Settings,Userkey } from './usercomponent'
import Exercise from './exercise'


function App() {
  const [count, setCount] = useState(0);
  let name="swapnil";

  return (
    <>
     <h1>code step by step</h1>
     <h1>hello react</h1>
     <User />
     <h2>count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <Users />
      <Logins />
      <Settings />
      <h1>{Userkey}</h1>
      <Exercise />
      <h1>{name?name:"user not found"}</h1>
    </>
  )
}

export default App
