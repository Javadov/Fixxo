import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({ link, icon }) => {
  return (
    <NavLink className="circle" to={link}>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon