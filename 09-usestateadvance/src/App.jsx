import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({name:'sufill',age:20})
  const btnclick=(()=>{
    const newNum={...num}
    newNum.name='sahal'
    newNum.age=22
   setNum(newNum);
    
  })
  return (
    <div>
      <h1>{num.name}, {num.age}</h1>
      <button onClick={btnclick}>click</button>
    </div>
  )
}

export default App