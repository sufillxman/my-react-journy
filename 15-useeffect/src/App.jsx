import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(100)

  useEffect(()=>{
    console.log('useEffect run... ')
  },[num1])

  return (
    <div>
      <h1 >Num1=  {num1}</h1>
      <h1 >Num2={num2}</h1>
      <button onMouseEnter={()=>{
        setNum1(num1+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}>click</button>
    </div>
  )
}

export default App