import React from "react";

function ImageCard(props){
    return(
        <div className="">
            <img src={props.img} className='w-64 ' alt={props.name}/>
            <h1 className="text-4xl uppercase font-bold font-pokemon2 text-yellow-400 strokeme tracking-widest">{props.name}</h1>
          </div>
    )
}
export default ImageCard;