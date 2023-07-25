import './card.css';
import { useState, useEffect } from 'react';

function Card(){
    const [Card, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(Card => setData(Card))
    .then(err => console.log(err));
  },[])
    return(
        <div className='card'>
            <table>
                <thead>
                    <th className='cardHeading'>
                <span >College</span>
                </th>
                </thead>
                <tbody>
                {Card.map((d, i) =>  (
            <tr key={i} className='carddata'>
              <td><li>{d.Data}</li></td>
              </tr>
          ))}
          </tbody>
            </table>
        </div>
)}
export default Card