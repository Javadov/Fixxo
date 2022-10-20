import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const Navbar = () => {
  return (
    <div className="__navbar">
        <div className="container">
            <div className="brand">
                <NavLink to="/">Fixxo.</NavLink> 
            </div>
            <div className="pages"> 
                <NavLink className="__pagelink" to="/" end>Home</NavLink>
                <NavLink className="__pagelink" to="/categories" end>Categories</NavLink>
                <NavLink className="__pagelink" to="/products" end>Products</NavLink>
                <NavLink className="__pagelink" to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="iconbar">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" end/>
                <MenuIcon link="/compare" icon="fa-regular fa-code-compare" end/>
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" quantity="3" end/>
                <MenuIcon link="/mybag" icon="fa-regular fa-shopping-bag" quantity="4" end/>
            </div>
        </div>    
    </div>
  )
}

export default Navbar