import { useState,useEffect } from "react";
function Counter({count}){

  useEffect(()=>{
    console.log("mounting");
  },[])
  useEffect(()=>{
    console.log("updating");
  },[count])
  useEffect(()=>{
    return ()=>{
      console.log("unmounting");
    }},[]);   
   
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter;