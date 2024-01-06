import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
    const {id} =useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");
    const nav = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+ id)
        .then(res =>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    }, [id])

    const handlerSubmit = async (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/update/'+id,{title, price, description} )
        .then((res)=>nav('/'))
        .catch((err) => {
            const errResponse = err.response.data.errors;
            console.log(err.response.data.errors)
            const errorArr = []
            for (const key of Object.keys(errResponse)){errorArr.push(errResponse[key].message)}
            setErrors(errorArr)
        })
    }

  return (
    <div>
        <form className='container' onSubmit={handlerSubmit}>
        <h1>Edit Product:</h1>
            <label htmlFor="title"className='form-label' >Title</label>
            <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} className='form-control' />
            
            <label htmlFor="price"className='form-label' >Price</label>
            <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price} className='form-control' />
            
            <label htmlFor="description"className='form-label' >Description</label>
            <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description} className='form-control' />
            
            {errors? errors.map((err,index)=>(
                <p key ={index} className='text-danger'>{err}</p>
            )):<></>} 
            {/* si le map ne trouve pas de variables, elle peut bloquer tout le travail */}
            
            <button className='btn btn-sm btn-danger' >Update</button>
        
        </form>
    </div>
  )
}

export default EditProduct