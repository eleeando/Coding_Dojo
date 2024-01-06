import React from 'react'

const Form = () => {
  return (
    <form className='container'>
        <h1>Product Manager</h1>
        <label htmlFor="title" className='form-label'>Title :</label>
        <input type="text" />
        <label htmlFor="price" className='form-label'>Price :</label>
        <input type="number" />
        <label htmlFor="description" className='form-label'>Description :</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Create</button>
    
    </form>
  )
}

export default Form