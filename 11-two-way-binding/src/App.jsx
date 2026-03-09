import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const submitform=(e)=>{
    e.preventDefault()
    setTitle(title)
    setTitle('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
      submitform(e)
      }}>
        <input type="text" 
        placeholder='Enter Name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
         
          
        }}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App