import React from 'react'

const Navbar = (props) => {
   
    function changethem(){

        if (props.them === 'light') {
            props.setThem('dark')
        } else {
            props.setThem('light')
        }}
    
  return (
    <div>
        <button onClick={()=>{
            changethem()
        }}>Change Them</button>
    </div>
  )
}

export default Navbar