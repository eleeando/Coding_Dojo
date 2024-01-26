import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditAuthor = () => {
    const {id} = useParams();
    console.log('===============================> ID:', id);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const nav = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res =>{
            setName(res.data.name)
        })
        .catch(err => console.log(err))
    }, [id])

    const SubmitHandler = (e) => {
        e.preventDefault();
        const updated = {
            name,
          };
          
          axios.patch(`http://localhost:8000/api/author/update/${id}`, updated)

        .then((res)=> {nav('/');
         setName("")})
        .catch((err)=>{
            console.log(err); 
            const errorResponse = err.response.data.errors;
            console.log(errorResponse); 
            const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message);
                }
            
            // Set Errors
            setErrors(errorArr);
            console.log("=================>", errorArr); 
        })
    }


  return (
    <div>
    <form className='container' onSubmit={SubmitHandler}>
        <h1>Update an Author:</h1>
        <label htmlFor="name" className='form-label'>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}  className='form-control'/>

        {errors.map((err,index)=>(
            <p key={index} className='text-danger'>{err}</p>
        ))}

        <button type='submit' className='btn btn-primary'>Submit</button>
        <button className='btn btn-secondary' onClick={()=>nav('/')}>Cancel</button>
    </form>
</div>
  )
}

export default EditAuthor