import React from 'react'
import {Card} from '../card/card.component'
import './card-list.styles.css'
import {motion, AnimatePresence} from 'framer-motion'

export const CardList = props => {
    // let x = props.characters[0].id;
    return(
    <div className="card-list"> 
    {props.characters.map((character,i) => (
            <Card key={character.id} character={character}/>
     ))}
     </div>
     );
 };