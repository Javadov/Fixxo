import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from './ProductCard'

const Breadcrumb = ({currentPage, product}) => {

  window.top.document.title = `${currentPage} || Fixxo`

  return (
    <div className='breadcrumb'>
        <div className="container">
            <ul className='list'>
                <li><NavLink to="/"><i className="fa-sharp fa-solid fa-house"></i>Home</NavLink></li>
                <li>{currentPage}</li>
                <li>{product.name}</li>
            </ul>
        </div>
    </div>
  )
}

export default Breadcrumb