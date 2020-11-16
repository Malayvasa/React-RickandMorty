import React from 'react'
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img className="card-image" alt="character" src={props.character.image}/>
        <h2 >{props.character.name}</h2>
        <p>Origin : {props.character.origin.name}</p>
        <p>Species : {props.character.species}</p>
    </div>
)
