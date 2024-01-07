import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditAuthor = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");

    const nav = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/'+id)
        .then(res =>{
            setName(res.data.name)
        })
        .catch(err => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/update/'+id, {name})
        .then((res)=> {nav('/')})
        .catch((err)=>{
            const errorResponse = err.response.data.errors;
            const errorArr = []
            for(const key of Object.keys(errorResponse)){errorArr.push(errorResponse[key].message)}
            setErrors(errorArr)

        })
    }


  return (
    <div>
        <form className='container' onSubmit={onSubmitHandler}>
            
            <h1>Update Author:</h1>

            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='form-control' />

            {errors? errors.map((err,index)=>(
                <p key={index} className='text-danger'> {err} </p>
            )):<></> }
        
            <button type='submit' className='btn btn-secondary'>Submit</button>
            <button className='btn btn-secondary' onClick={()=>{nav(`/`)}}>Cancel</button>
            
        
        </form>
    </div>
  )
}

export default EditAuthor