import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {

  window.top.document.title = `${currentPage} || Fixxo`

  return (
    <div className='breadcrumb'>
        <div className="container">
            <ul className='list'>
                <li><NavLink to="/"><i className="fa-sharp fa-solid fa-house"></i>Home</NavLink></li>
                <li>{currentPage}</li>
            </ul>
        </div>
    </div>
  )
}

export default Breadcrumb