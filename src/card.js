
import './card.css'
import {  useEffect, } from 'react'; 



export default function Card ({ele,name, url}){
 
    function handleAdd (ele) {
        console.log(ele)
    }
    return (
        <li className='card' key = {ele} >
            <img></img>
            <h3>{name}</h3>
            {/* <p>Pokemon Attack</p>
            <p>Level</p> */}
            <button className='bttnAdd' type='button' onClick={()=>handleAdd(ele)}> Add </button>
        </li>
    )
}