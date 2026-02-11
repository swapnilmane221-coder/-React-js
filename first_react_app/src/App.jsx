// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import User from './user'
// import Users, { Logins,Settings,Userkey } from './usercomponent'
// import Exercise from './exercise'


// function App() {
//   const [count, setCount] = useState(0);
//   let name="swapnil";
//   let [frruit,setFruit]=useState("apple");
//   let changeFruit=()=>{
//     setFruit("banana");
//   }

//   return (
//     <>
//      <h1>code step by step</h1>
//      <h1>hello react</h1>
//      <User />
//      <h2>count: {count} </h2>
//       <button onClick={() => setCount(count + 1)}>increment</button>
//       <Users />
//       <Logins />
//       <Settings />
//       <h1>{Userkey}</h1>
//       <Exercise />
//       <h1>{name?name:"user not found"}</h1>
//       <h1>{frruit}</h1>
//       <button onClick={changeFruit}>change fruit</button>
//     </>
//   )
// }

// export default App


import  {useState} from 'react'
import Tabs from './tab'

function App(){
  // const [display,setDisplay]=useState(false);
  // const [table,setTable]=useState(true);
  const [count,setCount]=useState(0);
  return(
  <>  
  {/* <div>
    <h1>toggle in react</h1>
    {
    display?<h1>Swapnil Mane </h1>:null
    }
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    <button onClick={()=>setTable(!table)}>Table</button> 
    {table?<Tabs/>:null}
  </div>*/}

  <div>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>counter</button>
    {
      count==0?<h1>condition 1</h1>
      :count==1?<h1>condition 2</h1>
      :count==2?<h1>condition 3</h1>
      :null
    }

  </div>
  </>
  )

}

export default App;