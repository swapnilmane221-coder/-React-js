import { useState } from "react"
function Radio(){
  const [gender, setGender] = useState("male")
  const [city, setCity] = useState("delhi")
  return(
    <div>
      <h2>selected Gender: {gender}</h2>
      <input type="radio" name="gender" id="male" value="male" onChange={(event)=>setGender(event.target.value)} checked={gender === "male"}/>
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="female" value="female" onChange={(event)=>setGender(event.target.value)} checked={gender === "female"}/>
      <label htmlFor="female">Female</label>
      <br /><br /><br />

      <h3>select city:</h3>
      <select name="city" id="city" defaultValue={city} onChange={(event)=>setCity(event.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chennai</option>
      </select>
      <p>Selected City: {city}</p>
    </div>
  )
}

export default Radio