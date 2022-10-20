import React from 'react'
import Navbar from '../sections/Navbar'
import Scene from '../sections/Scene.js';
import Showcase from '../sections/Showcase.js';
import FeaturedProducts from '../sections/FeaturedProducts';
import Footer from '../sections/Footer';

const HomeView = () => {
  return (
    <>
        <div style={{backgroundColor: "#E6E6E6"}}>
        <Navbar />
        </div>
        <Scene />
        <Showcase />
        <FeaturedProducts />
        <Footer />
    </>
  )
}

export default HomeView