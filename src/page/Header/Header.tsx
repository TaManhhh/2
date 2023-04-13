import React from 'react'
import {NavLink} from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    <div className='header'>
      <nav >
        <ul className='nav'>
            <li>
            <NavLink to="/todolist">To do lít</NavLink>
            </li>
            <li>
            <NavLink to="/login">Login</NavLink>
            </li>
            <li>
            <NavLink to="/menu">Menu</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
