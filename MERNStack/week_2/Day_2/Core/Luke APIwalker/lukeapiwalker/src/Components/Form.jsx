import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const nav = useNavigate()
    
    const [coordinates, setCoor] = useState({
    })

    const handleChange=(e)=>{
        setCoor({...coordinates, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        nav(`/${coordinates.category}/${coordinates.id}`)
    }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Search for:</label>
        <select name="category" onChange={handleChange}>
          <option>Select an option</option>
          <option value="people" >Poeple</option>
          <option value="planets" >Planets</option>
        </select>
      </div>
      <div>
        <label>ID:</label>
        <input type="number" name="id" onChange={handleChange}/>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
