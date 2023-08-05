import React from 'react'
import './Navbar.css'
import Temple from '../assets/project.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <ul>
            <li className='logo'>
            <img src={Temple} alt="dojo logo" />
            <span></span>
            </li>

            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li>
                <button className='btn'>Logout</button>
            </li>

        </ul>
      </div>
    </div>
  )
}
