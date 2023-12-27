import { useState } from 'react'
import {
  Routes, Route, Link, Navigate
} from 'react-router-dom'
import Welcome from './Components/Welcome'
import Number from './Components/Number'
import ChangeBackground from './Components/ChangeBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} />}></Route>
      <Route path='/home' element={<Welcome/>}></Route>
      <Route path='/:number' element={<Number/>}></Route>
      <Route path='/:word/:color1/:color2' element={<ChangeBackground/>}></Route>
      <Route path='*' element={<> <h1>404 Not Found</h1> </>}  ></Route>   {/* // Si on ne trouve pas aucun path des paths déjà cités il va nous rendre à cette page qui est 404 not found */}
    </Routes>
    </>
  )
}

export default App
