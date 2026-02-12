function Map(){
  const users=[
    {id:1,name:"john",age:30,email:"john@gmail.com"},
    {id:2,name:"jane",age:25,email:"jane@gmail.com"},
    {id:3,name:"bob",age:35,email:"bob@gmail.com"}
  ]
  return(
    <div>
      <table>
        <thead>
          <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>email</th>
          </tr>
          
        </thead>
        <tbody>
            
            {
              users.map((user)=>(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                <td>{user.email}</td>
                </tr>
              ))
            }

          </tbody>
      </table>
    </div>
  )
}

export default Map;