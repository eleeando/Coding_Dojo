import React, { useState } from 'react'

const FormComponent = ({addList}) => {
    const[liste, setListes]=useState({content:"", status:false})  //c'est une variable qu'on va sauvegarder dedans les données venues de l'input
    const formHandler=(e)=>{
        e.preventDefault()
        console.log("Event", e);
        console.log("Event Target", e.target.value);
        addList(liste)
        setListes({content:"", status:false})
    }
    return (
        <div>
            <form onSubmit={formHandler}>  {/* // la forme n'a pas l'attribu "value" */}
                <input type="text" onChange={(e)=>setListes({...liste, content:e.target.value})}
                value={liste.content}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default FormComponent