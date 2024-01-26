import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateAuthor = () => {
    const [name, setName] = useState("")
    const [errors,setErrors] = useState([])

    const nav = useNavigate();

    const submitHundler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {name})
        .then((res => {
            console.log(res)
            nav('/')
        }))
        .catch((err) => {
            const errorResponse = err.response.data;
            const errArr=[]
            for(const key of Object.keys(errorResponse)){errArr.push(errorResponse[key].message)}
            setErrors(errArr)
            
        })

    const createObj = () =>{
        axios.post(`http://localhost:8000/api/author`)
        .then(res=>{nav('/')})
        .ctach ((err) => console.log(err))
        }
    }


  return (
    <div>
        <form className='container' onSubmit={submitHundler}>
            <h1>Add A New Author:</h1>
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}  className='form-control'/>

            {errors.map((err,index)=>(
                <p key={index} className='text-danger'>{err}</p>
            ))}

            <button type='submit' className='btn btn-primary' onClick={()=> createObj ()}>Submit</button>
            <button className='btn btn-secondary' onClick={()=>nav('/')}>Cancel</button>
        </form>
    </div>
  )
}

export default CreateAuthor