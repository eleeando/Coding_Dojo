import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import CreateAuthor from './components/CreateAuthor'
import EditAuthor from './components/EditAuthor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/create/new' element={<CreateAuthor/>} />
        <Route path='/edit/:id' element={<EditAuthor/>} />
      </Routes>
    </>
  )
}

export default App
