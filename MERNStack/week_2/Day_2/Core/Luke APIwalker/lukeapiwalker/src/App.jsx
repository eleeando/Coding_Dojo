import Display from './Components/Display'
import Form from './Components/Form'
import Error from './Components/Error'
import {Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='container p-3 m-3'>
      <Form/>
      <Routes>

        <Route path='/' element={<p></p>}  />
        <Route path='/:category/:id' element={<Display/>} />
        <Route path='/error' element={<Error/>} />

      </Routes>

      
      
      </div>
    </>
  )
}

export default App
