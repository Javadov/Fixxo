import React from 'react'
import LeftImage from '../assets/images/top-left.svg';
import RightImage from '../assets/images/top-right.svg';

const HeaderBody = () => {
  return (
    <div className="__scene d-none">
        <div className="container">
            <div className="h-b-l">
                <img src={LeftImage} alt="" />
            </div>
            <div className="h-b-c">
                    <h1>Sale Up</h1>
                    <h2>To 50% Off</h2>
                    <p>Online shopping free home delivery over $100</p>
                    <button href="#" className="button-red"><span>SHOP NOW</span></button>
            </div>
            <div className="h-b-r">
                <img src={RightImage} alt="" />
            </div>
         </div>    
    </div>
  )
}

export default HeaderBody