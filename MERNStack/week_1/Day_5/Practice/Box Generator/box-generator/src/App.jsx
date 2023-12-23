import { useState } from 'react'
import './App.css'
import FormComponent from './Components/FormComponent'
import Display from './Components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormComponent/>
      
    </>
  )
}

export default App
