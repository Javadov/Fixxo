import React from 'react'
import Sale from '../assets/images/sale.svg';
import New from '../assets/images/new.svg';

const Showcase = () => {
    return (
        <section className="__showcase d-none">

            <div className="container">
                <div className="sale">
                    <img src={Sale} alt="Up to 70% Off!" />
                    <div className="textonimg">
                        <h1>Winter Clearance Up to 70% Off!</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                        <button href="#" className="button-blck"><span>SHOP NOW</span></button>
                    </div>
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