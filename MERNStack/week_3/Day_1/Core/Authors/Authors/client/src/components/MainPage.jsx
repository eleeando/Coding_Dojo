import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const MainPage = () => {
    const [authors, setAuthors] = useState([]);

    const nav =useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors')
        .then(res =>{
            setAuthors(res.data)
        } )
        .catch(err => console.log(err))
    }, [])

    const deleteObj =(id) =>{
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
        .then(res => setAuthors(authors.filter(a=>a._id !== id)))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Authors List</h1>
        {/* <Link to='/author/new' className='btn btn-primary mb-3'>New Author</Link> */}
        <table className='table table-sm table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
            <tbody>
                <tr>
                {
                    authors && authors.map(a =>(
                        <tr>
                            <td> <Link to={`/author/${a._id}`}> {a.name} </Link> </td>
                            <td> <button onClick={()=> nav(`/author/${a._id}/edit`)}>Edit</button> </td>
                            <td> <button className='btn btn-danger' onClick={()=>deleteObj(a._id, alert(`Are you sure you wante to remove ${a.name} ?`))}>Delete</button> </td>
                        </tr>
                    ))
                }
                </tr>
            </tbody>
            <button className='btn btn-secondary' onClick={()=>nav('/create/new')}>Create</button>
        
    
    
    
    
    
    </div>
  )
}

export default MainPage