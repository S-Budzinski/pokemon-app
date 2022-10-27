import React from "react";

function Button(props){
    return(
        <button className='ring-4 ring-pink-400 focus:ring-pink-500 hover:bg-pink-400 p-2 rounded-md text-white w-64 m-auto'
          onClick={props.searchPokemon}
          >
            Search Pokemon
          </button>
    )
}
export default Button;