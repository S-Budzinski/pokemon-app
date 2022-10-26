import React from "react";


function DescCard(props){
    return(
        
        <div className="w-1/4 h-5/6 bg-[url('D:\coding\pokemon-app\src\img\pokeball.jpg')] border-8 border-blue-500 rounded-lg">
            <p className="uppercase text-5xl font-pokemon2 text-yellow-400 strokeme tracking-widest">Stats</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Type: {props.type}</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Hp: {props.hp}</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Attack: {props.attack}</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Defense: {props.defense}</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Special attack: {props.sattack}</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Special defense: {props.sdefense}</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Speed: {props.speed}</p>
            <p className="pt-5 font-pokemon2 text-xl text-yellow-600 tracking-wider">Weight: {props.weight}</p>
        </div>
    )
}

export default DescCard;