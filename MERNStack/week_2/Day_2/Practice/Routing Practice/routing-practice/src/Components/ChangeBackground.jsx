import React from 'react'
import { useParams } from 'react-router-dom'

const ChangeBackground = () => {
    const {word,color1,color2}= useParams()
    return (
        <fieldset>
            <legend>Change The Background Color</legend>
            <h1 style={{backgroundColor:`${color1}`, color:`${color2}`}}>The word is: {word} </h1>
        </fieldset>
    )
}

export default ChangeBackground