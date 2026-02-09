function Exercise() {
  function callFun(){
    alert("function called");
  }
  return(
    <div>
      <h1>Swapnil Mane</h1>
      <img src="https://images.pexels.com/photos/12228456/pexels-photo-12228456.jpeg?cs=srgb&dl=pexels-alexasfotos-12228456.jpg&fm=jpg" alt="dog" class="dog-image" height="300" />
      <ul>
        <li>invent new traffic lights</li>
      </ul>
      <button onClick={()=>callFun()}>click me</button>
    </div>
  )
}
export default Exercise;