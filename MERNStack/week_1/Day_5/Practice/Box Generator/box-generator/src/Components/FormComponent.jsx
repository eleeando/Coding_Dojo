import React, { useState } from 'react'
import Display from './Display'

const FormComponent = () => {
    const [color, setColor]=useState("") //setColor: c'est la fonction qui va changer la couleur et color: c'est la variable
    
    return (
        <fieldset>
            <div>
                Color <input type="text" onChange={(e)=>{setColor(e.target.value)}}/> 
            </div>
            <button>Add</button>
            <Display color={color} />

        </fieldset>
    )
}

export default FormComponent