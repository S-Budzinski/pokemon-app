import './App.css';
import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [pokemon, setPokemon] = useState('')
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const searchPokemon = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setPokemon('')

    }
  }
  
  return (
    <>
    <div className=''>
      <div className='text-2xl w-full h-[300px] text-center bg-sky-400 p-10 flex flex-col'>
          <p className='text-6xl font-bold text-center text-white'>Pokemon Stats</p>
          <input className='mt-10 rounded text-center p-2 w-[400px] m-auto'
          value={pokemon}
          onKeyPress={searchPokemon}
          onChange={(e) => {setPokemon(e.target.value)}}
          >
          </input>
          <button className='ring-4 ring-pink-400 focus:ring-pink-500 hover:bg-pink-400 p-2 rounded-md text-white w-64 m-auto'
          onClick={(event) => searchPokemon(event.key === 'Enter')}
          >
            Search Pokemon
          </button>
      </div>
      <div className='w-full h-[670px] text-center bg-slate-200 flex'>
          <div className=''>
            {data.sprites ?<img src={data.sprites.front_default} className='w-64 content-end'></img> : null}
          </div>
          <div></div>
      </div>
    </div>
    </>
  );
}

export default App;
