import React from 'react'

const App = () => {

  const sumbitform=(e)=>{
    e.preventDefault()
    console.log('form sumbited')
    alert('Bhai form chal gaya! 🚀')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
       sumbitform(e)
      }}>
        <input type="text" placeholder='Enter Name' />
        <button type='submit' >sumbit</button>
      </form>
    </div>
  )
}

export default App