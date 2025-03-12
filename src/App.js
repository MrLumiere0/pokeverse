import './App.css';
import Card from './card';
import DeleteCard from './DeleteCard';
import { useState, useEffect, use, } from 'react'; 

function App() {

  const [pokemon, setPokemon] = useState([])
  const [deck, setDeck] = useState([])
  const [battle, setBattle] = useState(false)

  function handleAdd (poke) {
    console.log(poke)

if (deck.length < 6){
  const updated =  pokemon.filter((i) => i !== poke);
  setPokemon(updated)

    setDeck([...deck, poke])
    console.log(deck)

    if (deck.length > 2){
      setBattle(true)
    }
}


else {
  console.log("Ready for battle")
}
    

  }

  function handleDelete (poke){
    console.log(poke)

    const updated = deck.filter((i) => i !== poke)
    setDeck(updated)

    setPokemon([...pokemon, poke])

    if (deck.length < 2){
      setBattle(false)
    }
  }

  useEffect( () => {

    
    async function fetchData () {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()
        const list = data.results
        console.log(list)
        setPokemon(data.results)
      }

      catch (err){
        console.log(err)
      }
     
    }
   
    fetchData()
  }, [deck, setDeck])


  return (
    <div className="App">
      <nav className='nav'>
        <div className='navHeading'>
        <h1 id='Pokeverse'>Pokeverse</h1>
        <p id='navText'>All Pokemon</p>
        </div>

        {battle ?  <div className='buttonNav'>
          <button id='battle'>Battle!</button>
        </div> : <></>}
        
      </nav>

      <div className='searchDiv'>
        <h2 className='divLabel'>Search Pokemon:</h2>
        <input placeholder='Search Pokemon' type='text' id='search'></input>
      </div>

      <div className='player'>
        <div id='deck'>
          <h3> Player Deck</h3>
          <ul id='deckList'> 

            {deck.map( (ele) => {
            return (
              <li className='card' key={ele}  >
              <img></img>
              <h3>{ele.name}</h3>
              <p>Pokemon Attack</p>
              <p>Level</p>
              <button className='bttnDelete' type='button'onClick={()=> handleDelete(ele)} > Delete </button>
          </li>
            )
          })} 

          </ul>
        </div>
        <div id='pokemon'>
        <h3> Pokemon</h3>
        <ul id='cardList'> 

            
          {pokemon.map( (ele) => {
            return (
              <li className='card' key = {ele} >
            <h3>{ele.name}</h3>
            {/* <p>Pokemon Attack</p>
            <p>Level</p> */}
            <button className='bttnAdd' type='button' onClick={()=>handleAdd(ele)}> Add </button>
        </li>
            )
           })} 
        </ul>

        </div>

      </div>
    </div>
  );
}

export default App;
