import { useState} from 'react'
import './App.css'


function App() {
  const [fetchPokemon, setFetchPokemon] = useState([])
  const fetchAPI =()=>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  .then(response => {return response.json()})  //On ajoute .json pour que l'affichage soit correct car le fetch ne peut pas afficher le resultat voulu
  .then(response => {setFetchPokemon(response.results), console.log(response.results)})
  .catch(error => console.log("FETCH API Error",error))
  
}
const handlerClick=(apiCall, stateVariable, setStateVariable)=>{
  if(stateVariable.length!=0){
    setStateVariable([])
  } else{
    apiCall()
  }
}
  return (
    <fieldset>
      <legend> <h1>Pokemon API</h1> </legend>
      <button onClick={()=>handlerClick(fetchAPI,fetchPokemon,setFetchPokemon)}>fetch API</button> 
      {/* en cliquant sur le boutton, on trouve un resultat de la réponse venue de l'API, aprés les transmettre en json */}
      <fieldset >
        <legend>
          <h4>Fetch Pokemon</h4>
        </legend>
        <table>
          <tr>
            <th>Name</th>
          </tr>
          {fetchPokemon.map((pok)=> (<tr key={pok.name}>
            <td>{pok.name?pok.name:"Unavailable"}</td>
          </tr>  ))}
        </table>
      </fieldset>
    </fieldset>
  )
}

export default App
