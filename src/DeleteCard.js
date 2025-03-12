
import './card.css'
import {  useEffect, } from 'react'; 


export default function DeleteCard ({name, url}){


    return (
        <li className='card'  >
            <img></img>
            <h3>{name}</h3>
            <p>Pokemon Attack</p>
            <p>Level</p>
            <button className='bttnDelete' type='button'> Delete </button>
        </li>
    )
}