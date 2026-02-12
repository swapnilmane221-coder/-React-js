import { useState } from 'react'
function Checkboxes(){
    const [skills, setSkills] = useState([]);
    const handleChange = (event)=>{
      console.log(event.target.value,event.target.checked);
      if(event.target.checked){
        setSkills([...skills,event.target.value])
    }else{
        setSkills(skills.filter((skill)=>skill!==event.target.value))
    }
  }
  return(
    <div>
      <h6>Select Your skills</h6>
    <input onChange={handleChange} type="checkbox"  id="php" value="php"/>
    <label htmlFor="php">PHP</label><br />

    <input onChange={handleChange} type="checkbox"  id="js" value="javascript"/>
    <label htmlFor="js">JavaScript</label><br />

    <input onChange={handleChange} type="checkbox"  id="python" value="python"/>
    <label htmlFor="python">Python</label><br />

    <input type="checkbox" onChange={handleChange} id="java" value="java"/>
    <label htmlFor="java">Java</label><br />

    <h5>{skills.toString()}</h5>
    </div>
  )
}

export default Checkboxes;