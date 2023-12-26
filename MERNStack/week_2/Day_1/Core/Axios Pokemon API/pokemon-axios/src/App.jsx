import {useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [axiosPokemon, setAxiosPokemon] = useState([])
const handlerClick=(apiCall, stateVariable, setStateVariable)=>{
  if(stateVariable.length!=0){
    setStateVariable([])
  } else{ 
    apiCall()
  }
}
const axioAPI =()=>{
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  .then (response => {
    console.log("AXIOS RESPONSE:", response.data.results)
    setAxiosPokemon(response.data.results)
  })
  .catch(error =>
    console.log("AXIOS error:", error))
}
  return (
    <fieldset>
      <legend> <h1>Pokemon API</h1> </legend>
      <button onClick={()=>handlerClick(axioAPI,axiosPokemon,setAxiosPokemon)}>AXIOS API</button> 
      <fieldset>
        <legend>
          <h4>AXIOS Pokemon</h4>
        </legend>
        <table>
          <tr>
            <th>Name</th>
          </tr>
          {axiosPokemon.map((poke)=> (<tr key={poke.name}>
            <td>{poke.name?poke.name:"😑 UNKNOWN POKEMON 😑"}</td>
          </tr>  ))}
        </table>
      </fieldset>
    </fieldset>
  )
}

export default App
