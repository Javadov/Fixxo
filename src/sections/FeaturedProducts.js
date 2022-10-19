import React from 'react'
import ProductImage from '../assets/images/product-box-1.svg';

const FeaturedProducts = () => {
    return (
        <section className="__featured-products">
            <div className="container">
                <h3>Featured Product</h3>
                <div className="products" onsubmit="submitForm(event)">
                    
                    <div className="card" id="card">
                        <div >
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <button className="add-to-cart">Add to cart</button>
                            <span className="product-price">$895</span>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <span className="product-price">$35.00</span>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <div >
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <button className="add-to-cart" >Add to cart</button>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <span className="product-price">$1095</span>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <div className="card-img">
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <ul className="card-menu" id="cardID">
                                <li><a className="link" href="#"><i className="fa-regular fa-heart"></i></a></li>
                                <li><a className="link" href="#"><i className="fa-regular fa-code-compare"></i></a></li> 
                                <li><button className="add-to-cart link"><i className="fa-regular fa-bag-shopping"></i></button></li> 
                            </ul>
                            <button href="#" className="button-quick-view"><span>QUICK VIEW</span></button>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <span className="product-price">$1195</span>
                        </div>
                    </div>

                    <div className="card" id="card">
                        <div className="card-img">
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <ul className="card-menu" >
                                <li><a className="link" href="#"><i className="fa-regular fa-heart"></i></a></li>
                                <li><a className="link" href="#"><i className="fa-regular fa-code-compare"></i></a></li> 
                                <li><a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a></li> 
                            </ul>
                            <button href="#" className="button-quick-view"><span>QUICK VIEW</span></button>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <h3>$35.00</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <ul className="card-menu" >
                                <li><a className="link" href="#"><i className="fa-regular fa-heart"></i></a></li>
                                <li><a className="link" href="#"><i className="fa-regular fa-code-compare"></i></a></li> 
                                <li><a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a></li> 
                            </ul>
                            <button href="#" className="button-quick-view"><span>QUICK VIEW</span></button>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <h3>$35.00</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <ul className="card-menu" >
                                <li><a className="link" href="#"><i className="fa-regular fa-heart"></i></a></li>
                                <li><a className="link" href="#"><i className="fa-regular fa-code-compare"></i></a></li> 
                                <li><a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a></li> 
                            </ul>
                            <button href="#" className="button-quick-view"><span>QUICK VIEW</span></button>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <h3>$35.00</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <ul className="card-menu" >
                                <li><a className="link" href="#"><i className="fa-regular fa-heart"></i></a></li>
                                <li><a className="link" href="#"><i className="fa-regular fa-code-compare"></i></a></li> 
                                <li><a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a></li> 
                            </ul>
                            <button href="#" className="button-quick-view"><span>QUICK VIEW</span></button>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <h3>$35.00</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img className="product-image" src={ProductImage} alt="product1" />
                            <ul className="card-menu" >
                                <li><a className="link" href="#"><i className="fa-regular fa-heart"></i></a></li>
                                <li><a className="link" href="#"><i className="fa-regular fa-code-compare"></i></a></li> 
                                <li><a className="link" href="#"><i className="fa-regular fa-bag-shopping"></i></a></li> 
                            </ul>
                            <button href="#" className="button-quick-view"><span>QUICK VIEW</span></button>
                        </div>
                        <div className="card-body">
                            <h6>Category</h6>
                            <h4>Modern Black Blouse</h4>

                            <h3>$35.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts