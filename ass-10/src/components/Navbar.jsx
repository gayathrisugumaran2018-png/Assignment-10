import React from 'react'
import { navLinks } from '../Data/navbar'
import { FaShoppingCart, FaStore } from "react-icons/fa";

function Navbar() {
  console.log(navLinks)
  return (
    <nav className='bg-fuchsia-300 text-white p-4 shadow-md'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          
    <h1 className='text-3xl font-bold text-fuchsia-800 flex items-center gap-2'>
  <FaShoppingCart size={24} className="text-blue-600" />
  <span>GIGA SHOP!!</span>
</h1>
    

        <ul className='flex gap-4'>
          {
navLinks.map(data => (
  <li key={data.id}>
    <a href= "">{data.name}</a>
  </li>
))
          }
<button className='bg-red-100 text-red-600 px-4 py-1 rounded-lg py-2 gap-4'>Login</button>
        </ul>
        </div>
    </nav>
    
  )
}

export default Navbar