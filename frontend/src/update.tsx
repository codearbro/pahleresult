import './update.css'
import { useState, useEffect } from 'react';
function Update(){
    const [update, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(update => setData(update))
    .then(err => console.log(err));
  },[])
    return(
        <div>
            <div className='headline'>
            <span>Find The Right Result</span>
            </div>
            <div className='b2'>
                <span className='up'>New Updates</span>
                {update.map((d, i) =>  (
            <ul key={i} className='data'>
              <li>{d.Name}</li>
            </ul>
          ))}
            </div>
        </div>
)}
export default Update