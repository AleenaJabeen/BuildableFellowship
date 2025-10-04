import React from 'react'
import {FaSignInAlt,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='px-4 text-xl font-bold'>
        <Link to="/">GoalSetter</Link>
      </div>
      <ul className='flex space-x-8 text-lg font-medium px-4'>
        <li>
        <Link to="/login" className='flex items-center gap-2'><FaSignInAlt/>Login</Link>
        </li>
        <li>
        <Link to="/register" className='flex items-center gap-2'><FaUser/>Register</Link>
        </li>
      </ul>
      
    </header>
  )
}

export default Header
