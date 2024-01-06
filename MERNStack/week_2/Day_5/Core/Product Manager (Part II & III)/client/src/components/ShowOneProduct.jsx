import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowOneProduct = () => {
    const {id} =useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const nav = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            // console.log(res.data)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err=>{
            console.log(err)
        })
    })

 
  return (
    <div>
        <h1>Title : {title} </h1>
        <h1>Price : {price} </h1>
        <h1>Description : {description} </h1>
    </div>
  )
}

export default ShowOneProduct