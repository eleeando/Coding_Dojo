import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
  const{number}=useParams()
  return (
    <fieldset>
        <legend>Number</legend>
        {(isNaN(+`${number}`))?<h1>The word is: {number}</h1>:<h1>The number is: {number}</h1>}
    </fieldset>
  )
}

export default Number