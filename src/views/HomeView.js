import React from 'react'
import Navbar from '../sections/Navbar'
import Scene from '../sections/Scene.js';
import Showcase from '../sections/Showcase.js';
import FeaturedProducts from '../sections/FeaturedProducts';

const HomeView = () => {
  return (
    <>
        <Navbar />
        <Scene />
        <Showcase />
        <FeaturedProducts />
        <div style={{height: "2000px"}}></div>
    </>
  )
}

export default HomeView