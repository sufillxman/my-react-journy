import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between py-6 px-14 bg-amber-800 text-white w-full h-20px font-bold'>
   <h2 className='text-2xl'>SUFIll</h2>
   <div className='flex gap-8 text-2xl'>
   <Link to='/'>Home</Link>
   <Link to='/about' >About</Link>
   <Link to='/contact'>Contact</Link>
  
   </div>
    </div>
  )
}

export default Navbar