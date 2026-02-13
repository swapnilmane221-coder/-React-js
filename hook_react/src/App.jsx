// import { useEffect, useState } from 'react'
// // import './App.css'
// import Counter from './counter';

// function App() {
//   const [count, setCount] = useState(0)
//     const [display, setDisplay] = useState(true);

//   // function callOnce(){
//   //   console.log("Called once called");
//   // }

//   // useEffect(()=>{
//   //   callOnce();
//   // },[count])
//   return (
//     <>
//       <div>
//         <button onClick={() => setCount(count + 1)}>count:{count}</button>
// {
//           display?<Counter count={count}/>:null

// }        <button onClick={() => setDisplay(!display)}>toggle display</button>

//       </div>
//     </>
//   )
// }

// export default App
// import { useState } from "react";

// function App() {
//   const [styleobj, setStyleobj] = useState({border:"1px solid black",width:"200px",boxShadow:"10px 10px 15px gray",padding:"5px",margin:"50px",backgroundColor:"white"});
//   return (
//     <div>
//       <h1 style={{color:"red",fontSize:"24px"}}>Inline Css</h1>
//       <button onClick={() => setStyleobj({...styleobj, backgroundColor: "grey"})}>grey theme</button>
//       <button onClick={() => setStyleobj({...styleobj, backgroundColor: "white"})}>default theme</button>
//       <div style={styleobj}>
//         <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="tree" style={{width:"200px",height:"200px"}}/>
//         <div>
//           <h4>Swapnil Mane</h4>
//           <p>Software Developer </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";
// import "./css/style.css";

// function App() {
//   return (
//     <div>
//       <h1 className="heading">External Css</h1>
//       <div className="card">
//         <div className="img-style">
//           <img
//             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//             alt="tree"
//             style={{
//               height: "200px",
//               width: "200px",
//             }}
//           />
//         </div>
//         <div className="content">
//           <h4>Swapnil Mane</h4>
//           <p>Software Developer </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import User from "./User";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Alert,Card } from 'react-bootstrap';

function App() {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {/* <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />  */}
      <Button>ok</Button>
      <button>ok</button>
      <Alert variant="danger">This is a danger alert—check it out!</Alert>
      <Card>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
      </Card>

    </div>
  );
}

export default App;
