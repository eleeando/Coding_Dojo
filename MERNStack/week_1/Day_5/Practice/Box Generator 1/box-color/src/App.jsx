import { useState } from 'react'
import './App.css'
import FormComponent from './Components/FormComponent'
import DisplayComponent from './Components/DisplayComponent'

function App() {
  const [boxes, setboxes] = useState([
    {color:"red"},
    {color:"blue"},
    {color:"magenta"}
  ])
  const createBox = (boxColor) => {
    setboxes([...boxes, { color: boxColor }])
  }
  return (
    <>
      <fieldset>
        <legend>
          <h1>Box Generator</h1>
        </legend>
        <FormComponent addBox={createBox} />
        <div className='boxes'>
          {boxes.map(b =>
            <DisplayComponent boxColor={b.color} />
          )}
        </div>

      </fieldset>
    </>
  )
}

export default App
