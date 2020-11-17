import React from 'react'
import {Card} from '../card/card.component'
import './card-list.styles.css'
import {motion, AnimatePresence} from 'framer-motion'

export const CardList = props => {
    return(
    <AnimatePresence initial={true}>
    <div 
    className="card-list"> {
        props.characters.map(character => (
        <motion.li
        variants ={{
            hidden: {
                opacity :0,
            },
            visible: (i) => ({
                opacity:1,
                transition :{
                    delay: 0.125*i,
                }
            })
        }}
        animate= "visible"
        initial= "hidden"
        custom={character.id}
        className="card-li" key={character.id}>
            <Card character={character}/>
        </motion.li>
     ))}
     </div>
     </AnimatePresence>
     );
 };