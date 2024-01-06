import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

const Display = () => {
    const {category,id} = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch(`https://swapi.dev/api/${category}/${id}`)
        .then(res=>res.json())
        .then(res=> {
            setData(res)
            setLoading(false);
            })
        .catch(err=>{
          console.log(err)
          setLoading(false);
        })
    },[category, id])
    
    if (loading) {
      return <p>Loading...</p>;
    }
    

  return (
    <div>
      {category === 'people' && (
        <div>
          <h2>Name of person: {data.name}</h2>
          <h2>Height: {data.height}</h2>
          <h2>Mass: {data.mass}</h2>
          <h2>Hair Color: {data.hair_color}</h2>
          <h2>Skin Color: {data.skin_color}</h2>
          <h2>Eye Color: {data.eye_color}</h2>
          <h2>Birth Year: {data.birth_year}</h2>
          </div>
        )}
      <br />
      {category === 'planets' && (
      <div>
        <h2>Name of planet: {data.name}</h2>
        <h2>Rotation Period: {data.rotation_period}</h2>
        <h2>Orbital Period: {data.orbital_period}</h2>
        <h2>Diameter: {data.diameter}</h2>
        <h2>Climate: {data.climate}</h2>
        <h2>Gravity: {data.gravity}</h2>
        <h2>Terrain: {data.terrain}</h2>
        <h2>Surface Water: {data.surface_water}</h2>
        <h2>Population: {data.population}</h2>
      </div>
      )}

                

    </div>
  )
}

export default Display








