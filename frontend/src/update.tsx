import './update.css'
import { useState, useEffect } from 'react';
function Update(){
    const [update, setData] = useState<any[]>([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(update => setData(update))
    .then(err => console.log(err));
  },[])
    return(
        <div className='update'>
            <div className='Top'>
            <span>Find The Right Result</span>
            </div>
            <div className='Mid'>
                <span className='Heading'>New Updates</span>
                {update.map((d, i) =>  (
            <ul key={i} className='data'>
              <li><a href ="https://codearbro.com">{d.Data}</a></li>
            </ul>
          ))}
            </div>
        </div>
)}
export default Update