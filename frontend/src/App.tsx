import { useEffect, useState } from "react"
import Logo from './logo'
import Update from "./update";
function App(){

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .then(err => console.log(err));
  },[])
  return(
    <div>
      <Logo></Logo>
      <Update></Update>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          {data.map((d, i) =>  (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
              <td>{d.Password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App