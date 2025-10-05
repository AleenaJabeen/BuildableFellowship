import React from 'react'
import {FaSignInAlt,FaUser,FaSignOutAlt} from 'react-icons/fa'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logout,reset } from '../features/auth/authSlice'

function Header() {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth)
  const onLogout=()=>
  {
    dispatch(logout())
    dispatch(reset())
    navigate("/")

  }
  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='px-4 text-xl font-bold'>
        <Link to="/">GoalSetter</Link>
      </div>
      <ul className='flex space-x-8 text-lg font-medium px-4'>
        {user ? (
          <>
           <li className='bg-black text-white p-2 rounded-md'>
        <button onClick={onLogout} className='flex items-center gap-2'><FaSignOutAlt/>Logout</button>
        </li>
       
        </>
        ):(<>
          <li>
        <Link to="/login" className='flex items-center gap-2'><FaSignInAlt/>Login</Link>
        </li>
        <li>
        <Link to="/register" className='flex items-center gap-2'><FaUser/>Register</Link>
        </li></>)}
       
      </ul>
      
    </header>
  )
}

export default Header
