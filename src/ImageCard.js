import React from "react";

function ImageCard(props){
    
        
    
    // if (props.type == 'electric'){
    //      document.getElementById('card').classList.add('bg-yellow-300')
    //  }else if (props.type == 'normal'){
    //      document.getElementById('card').classList.add('bg-slate-300')
    // }else if (props.type === 'grass'){
    //     document.getElementById('card').classList.add('bg-green-300')
    // }else if (props.type === 'fire'){
    //     document.getElementById('card').classList.add('bg-red-400')
    // }else if (props.type === 'ground'){
    //     document.getElementById('card').classList.add('bg-brown-300')
    // }else if (props.type === 'water'){
    //     document.getElementById('card').classList.add('bg-blue-300')
    // }else if (props.type === 'ice'){
    //     document.getElementById('card').classList.add('bg-sky-200')
    // }else if (props.type === 'fighting'){
    //     document.getElementById('card').classList.add('bg-brown-300')
    // }else if (props.type === 'poison'){
    //     document.getElementById('card').classList.add('bg-purple-300')
    // }

    
    return(
        <div className="h-[360px] rounded" id="card">
            <img src={props.img} className='w-64 ' alt={props.name}/>
            <h1 className="text-4xl uppercase font-bold font-pokemon2 text-yellow-400 strokeme tracking-widest">{props.name}</h1>
          </div>
    )
}
export default ImageCard;