import React from 'react'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0)
  function increase(){
    setValue(value+1)
  }
  function decrease(){
    setValue(value-1)
  }
  return (
   <div className="perent">
    <h1>{value}</h1>
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      
    </div>
   </div>
  )
}

export default App