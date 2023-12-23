// Display représente la liste des boxes
import React, { useState } from 'react'
import Box from './Box'

const Display = ({ color }) => {
    const boxes =["red","blue", "purple"] // c'est un array dynamique, d'où il faut utiliser "useState"
    const [allboxes, setAllBoxes]= useState(boxes)  //useState(boxes):boxes c'est l'état de départ 
    return (
        <div className='list'>
            {allboxes.map((box_one => <Box color={box_one} setAllBoxes={setAllBoxes}/>))} 
            {/* setAllBoxes va faire une copie du boxes et elle va ajouter à chaque fois un box. la copie va étre enregistrer dans allboxes */}
        </div>
    )
}

export default Display