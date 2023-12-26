import { useState } from 'react'
import './App.css'
import TabsComponent from './Components/TabsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <fieldset>
      <TabsComponent/>
    </fieldset>
  )
}

export default App
