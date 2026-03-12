import React from 'react'

const Navbar = (props) => {
    function changethem(){
        props.setThem('dark')
    }
  return (
    <div>
        <button onClick={()=>{
            changethem()
        }}>Change Them</button>
    </div>
  )
}

export default Navbar