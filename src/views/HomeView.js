import React from 'react'
import Navbar from '../sections/Navbar'
import Scene from '../sections/Scene.js';
import Showcase from '../sections/Showcase.js';
import FeaturedProducts from '../sections/FeaturedProducts';
import Footer from '../sections/Footer';
import ImageBar from '../sections/ImageBar';
import Speciality from '../sections/Speciality';
import SaleBoxLeft from '../sections/SaleBoxLeft';
import SaleBoxRight from '../sections/SaleBoxRight';
import SaleBoxCenter from '../sections/SaleBoxCenter';
import SelectedProducts from '../sections/SelectedProducts';
import InfoBox from '../sections/InfoBox';

const HomeView = () => {

  return (
    <>
        <div style={{backgroundColor: "#E6E6E6"}}>
        <Navbar />
        </div>
        <Scene />
        <Showcase />
        <FeaturedProducts />
        <ImageBar />
        <Speciality />
        <SaleBoxLeft />
        <SaleBoxRight />
        <SaleBoxCenter />
        <SelectedProducts />
        <InfoBox />
        <Footer />
    </>
  )
}

export default HomeView