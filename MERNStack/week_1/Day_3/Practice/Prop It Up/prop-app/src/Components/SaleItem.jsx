import React from 'react'

const SaleItem = (props) => {
    const {prop}=props
  return (
    <div>
        <h1>{prop.firstName}, {prop.lastName}</h1>
        <h4>age: {prop.age} </h4>
        <h5>Hair Color: {prop.hairColor} </h5>
    </div>
  )
}

export default SaleItem