import React, { useState } from 'react'

const FormComponent = ({addBox}) => {
    const [color, setColor]= useState("")
    const submitHandler=(e) =>{
        e.preventDefault()
        console.log("Boxes After push", )
        addBox(color)
        setColor("")
    }
    return (
        
    <form onSubmit={submitHandler}>
        <legend>Form Component</legend>
        <div>
            Color <input type="text" onChange={e=>setColor(e.target.value)} value={color}/>
        </div>
        <button>Add</button>
    </form>
        
    )
}

export default FormComponent