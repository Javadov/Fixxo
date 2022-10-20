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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
            <div className="iconbar">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
                <MenuIcon link="/compare" icon="fa-regular fa-code-compare" />
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
                <MenuIcon link="/shoppingbag" icon="fa-regular fa-magnifying-glass" />
                    <span className="notification translate-middle badge rounded-pill">3</span>

            </div>
        </div>    
    </div>
  )
}

export default Navbar