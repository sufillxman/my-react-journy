import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [them, setThem] = useState('light')
  return (
    <div>
      <h1>Them is {them}</h1>
   
      <Navbar them={them} setThem={setThem} />
    </div>
  )
}

export default App