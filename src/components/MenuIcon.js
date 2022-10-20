import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({ link, icon, quantity}) => {
  return (
    <NavLink className="circle" to={link}>
        <i className={icon}></i>
        <span className="notification translate-middle badge rounded-pill">{quantity}</span>
    </NavLink>
  )
}

export default MenuIcon