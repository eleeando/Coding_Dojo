import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import MainPage from './components/MainPage'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'
import ShowOneProduct from './components/ShowOneProduct'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/create' element={<CreateProduct/>} />
      <Route path='/edit/:id' element={<EditProduct/>} />
      <Route path='/show/:id' element={<ShowOneProduct/>} />

    </Routes>

    </>
  )
}

export default App
