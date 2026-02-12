// import { useState } from 'react'
// // import './App.css'
// import User from './User'
// import Wrapper from './Wrapper'
// import Checkboxes from './checkboxes'
// import Radio from './radio'
// import Map from './map'
// function App() {
//   // const [count, setCount] = useState(0)
//   // const [name, setName] = useState("")

//   const [name, setName] = useState("")
//   const [password, setPassword] = useState("")
//   const [email, setEmail] = useState("")

//   return (
//     <>
//       {/* <div style={{color:"green",border:"2px solid black", backgroundColor:"white"}}>

//         <input type="text" value={name} placeholder="Enter User name" onChange={(event)=>setName(event.target.value)} />
//         <Wrapper color="red">
//           <User name={name} />
//         </Wrapper>
//         <button onClick={()=>setName("")}>clear</button>
//       </div> */}

//       <div>
//         <form action="" method="get">
//           {/* <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter name"/><br /><hr />
//           <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" /><br /><hr />
//           <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" /><hr />
//           <button type="submit">Submit</button>
//           <button onClick={()=>{setName("");setPassword("");setEmail("")}}>Clear</button>
//           <hr />
//           <table>
//             <th>index</th>
//             <th>Value</th>
//             <tr></tr>
//             <td>name</td>
//             <td>{name}</td>
//             <tr></tr>
//             <td>password</td>
//             <td>{password}</td>
//             <tr></tr>
//             <td>email</td>
//             <td>{email}</td>
//           </table> */}
//           {/* <Checkboxes /> */}
//           {/* <Radio /> */}
//           <Map />
//         </form>
//       </div>
//     </>
//   )
// }

// export default App

// import Component from "./reuseComponent"
// function App(){
//   const user=[
//     {id:1,name:"john",age:30},
//     {id:2,name:"doe",age:25},
//     {id:3,name:"smith",age:35},
//     {id:4,name:"jane",age:28},
//     {id:5,name:"michael",age:32},
//     {id:6,name:"emily",age:27},
//     {id:7,name:"david",age:29},
//     {id:8,name:"sarah",age:31},
//     {id:9,name:"robert",age:33},
//     {id:10,name:"lisa",age:26}
//   ]
//   return(
//     <div>
//       {
//         user.map((user)=>(
//           <Component key={user.id} name={user.name} age={user.age}  />
//         ))
//       }
//     </div>
//   )
// }
import { useState } from "react";
import Clock from "./clock"
function App(){
  const [clr, setClr] = useState("green");
  return(
    <div>
      <select name="color" onChange={(event)=>setClr(event.target.value)}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
      <Clock  color={clr} />
    </div>
  )
}

export default App;
