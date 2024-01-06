import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const MainPage = () => {
    const [products, setProducts] = useState([]);

    const nav=useNavigate()

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const deleteObj = (id) =>{
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res=>setProducts(products.filter(p=>p._id !==id)))
        .catch(err=>console.log(err))
    }

  return (
    <div>
            <h1>Product Manager</h1>
            <table className='table table-sm table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
            </table>
            <tbody>
            
            {
                products.map(p=>(
                    <tr>
                        <td> <Link to={`/show/${p._id}`}>{p.title}</Link>  </td>
                        <td> {p.price} </td>
                        <td> {p.description} </td>
                        <td> <button onClick={()=> nav(`/edit/${p._id}`)}>Edit</button> </td>
                        <td> <button type='submit' className='btn btn-danger' onClick={()=>deleteObj(p._id)}>Delete</button> </td>
                    </tr>
                ))
            }
            </tbody>
            

            <button className='btn btn-secondary' onClick={()=>nav('/create')}>Create</button>
    </div>
  )
}

export default MainPage