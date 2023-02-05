import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  return (
    <nav>
        <NavLink to="/"><p>Home</p></NavLink>
        <NavLink to="/about"><p>Sobre Nós</p></NavLink>
    </nav>
  )
}

export default SideBar