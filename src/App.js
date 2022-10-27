import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
import ImageCard from './ImageCard';
import DescCard from './DescCard';
import Button from './Button';

function App() {
  const [data, setData] = useState({})
  const [pokemon, setPokemon] = useState('')
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const searchPokemon = () => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setPokemon('')

    }
  
  
  return (
    <>
    <div className=''>
      <div className='text-2xl w-full h-[300px] text-center bg-sky-400 p-10 flex flex-col'>
          <p className='text-6xl font-bold text-center text-white font-pokemon2 text-yellow-400 strokeme tracking-widest'>Pokemon Stats</p>
          <input className='mt-10 rounded text-center p-2 w-[400px] m-auto'
            value={pokemon}
            onChange={(e) => {setPokemon(e.target.value)}}
          >
          </input>
          <Button
          searchPokemon={searchPokemon}
          />
      </div>
      <div className='w-full h-[670px] text-center bg-slate-200 flex justify-around pt-24'>
          {data.sprites || data.types ? <ImageCard
            img={data.sprites.front_default}
            name={data.name}
            type={data.types[0].type.name}
          /> : null}
          {data.sprites ? <DescCard
            weight={data.weight}
            type={data.types[0].type.name}
            hp={data.stats[0].base_stat}
            attack={data.stats[1].base_stat}
            defense={data.stats[2].base_stat}
            sattack={data.stats[3].base_stat}
            sdefense={data.stats[4].base_stat}
            speed={data.stats[5].base_stat}
          /> : null}
      </div>
    </div>
    </>
  );
}

export default App;
