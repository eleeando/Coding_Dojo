import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Form from './components/Form'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Form />} />
    </Routes>

    </>
  )
}

export default App
