function Component(props){
    return(
      <div style={{color:"green",border:"2px solid green", backgroundColor:"white"}}>
        <h3>name: {props.name}</h3>
        <p>Age: {props.age}</p><hr />
      </div>
    )
}

export default Component;