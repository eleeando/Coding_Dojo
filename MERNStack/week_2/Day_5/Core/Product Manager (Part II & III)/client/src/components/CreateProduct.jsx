import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState("")
    
    const nav =useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new',{title,price,description})
        .then((res) => {console.log(res); nav('/')})
        .catch((err) => {
            const errResponse = err.response.data.errors;
            const errorArr = [] //on va enregistrer les messages d'erreur dans cet aarray
            for (const key of Object.keys(errResponse)){errorArr.push(errResponse[key].message)} //errResponse[key].message: on va ajouter la nouvelle erreur, en donnant le key et le message
            setErrors(errorArr)
        })
    }
    const createObj = () =>{
        axios.post(`http://localhost:8000/api/product/new`)
        .then(res=>{nav('/')})
        .ctach ((err) => console.log(err))
        }

  return (
    <div>
        <form className='container' onSubmit={onSubmitHandler}>
            <h1>Add a new Product:</h1>
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
            <button className='btn btn-sm btn-secondary' onClick={()=>createObj()}>Create</button>
            <button className='btn btn-danger' onClick={()=>nav('/')}>Cancel</button>
        </form>
    </div>
  )
}

export default CreateProduct