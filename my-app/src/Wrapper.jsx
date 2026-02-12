function Wrapper({children,color}){

  return(
    <>
    <h1 style={{color:color}}>hi everyOne</h1>
    {children}
    </>
  )
}
export default Wrapper;