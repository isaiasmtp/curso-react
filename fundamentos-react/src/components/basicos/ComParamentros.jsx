import React from 'react'

export default function  ComParamentro (params){
    console.log(params)
    return ( 
        <div>
            <h2>{ params.titulo }</h2>
            <h3>{ params.subtitulo }</h3>
        </div>
    )
}
