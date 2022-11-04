import React from 'react'
import Sale from '../assets/images/3.png';
import New from '../assets/images/4.png';

const Showcase = () => {
    return (
        <section className="__showcase">

            <div className="container">
                <div className="sale">                    
                    <div className="textonimg">
                        <h1>Winter Clearance Up to 70% Off!</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                        <button href="#" className="button-blck"><span>SHOP NOW</span></button>
                    </div>
                    <img src={Sale} alt="Up to 70% Off!" />
                </div>
                <div className="new-arrivals">
                    <img src={New} alt="New Arrivals" />
                    <div className="textonimg">
                        <h1>New Arrivals</h1>
                        <button href="#" className="button-blck"><span>SHOP NOW</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase