import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sideBar.css'

const SideBar = () => {
  return (
    <nav>
        <NavLink to="/"><p>Home</p></NavLink>
        <NavLink to="/register"><p>Sobre Nós</p></NavLink>
    </nav>
  )
}

export default SideBar