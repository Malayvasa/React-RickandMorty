import React from 'react'
import './card.styles.css'
import Badge from 'react-bootstrap/badge'

export const Card = (props) => {
    let alert;
    if (props.character.status === "Alive") {
      alert = <Badge  variant="success">Alive</Badge>;
    }else if(props.character.status === "Dead"){
        alert = <Badge  variant="danger">Dead</Badge>;
    }else{
        alert = <Badge  variant="secondary">Unknown</Badge>;
    }

    return(
    <div className="card-container">
        <img className="card-image" alt="character" src={props.character.image}/>
        <p className="name">{props.character.name}</p>
        <p className="badge">{alert}</p>
        {/* <p>Origin : {props.character.origin.name}</p>
        <p>Species : {props.character.species}</p> */}
    </div>
);}

