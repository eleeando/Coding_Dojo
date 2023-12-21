import React, {useState} from 'react'

const SaleItem = (props) => {
    const { prop } = props
    const [age, setAge] =useState(person.age)
    const increaseAge = () =>{
        setAge(age++)
    }
    return (
        <div>
            <h1>{prop.firstName}, {prop.lastName}</h1>
            <h4>age: {prop.age} </h4>
            <h5>Hair Color: {prop.hairColor} </h5>
            <button onClick={() => increaseAge()}>🎂🎊Happy Birthday🎂🎊</button>
        </div>
    )
}

export default SaleItem