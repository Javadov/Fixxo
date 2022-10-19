import React from 'react'

const Navbar = () => {
  return (
    <div className="__navbar main">
        <div className="container">
            <div className="brand">
                <a href="/">Fixxo.</a> 
            </div>
            <div className="pages">
                <a href="#">Home</a>
                <a href="">Categories</a>
                <a href="/products.html">Products</a>
                <a href="/contacts.html">Contacts</a>
            </div>
            <div className="iconbar">
                <a className="circle" href="#"><i className="fa-regular fa-magnifying-glass"></i></a>
                <a className="circle" href="#"><i className="fa-regular fa-code-compare"></i></a>
                <a className="circle" href="#"><i className="fa-regular fa-heart"></i>
                    <span className="notification translate-middle badge rounded-pill">
                        1
                    </span>
                </a>
                <a className="circle cart-btn" id="cart"><i className="fa-regular fa-bag-shopping"></i>
                    <span className="notification translate-middle badge rounded-pill cart-quantity">
                        0
                    </span>
                </a>

                <div className="cart-modal-overlay">
                    <div className="cart-modal">
                    <i id="close-btn" className="fas fa-times"></i>
                        <h1 className="cart-is-empty">Cart is empty</h1>
                    
                        <div className="product-rows">
                        </div>
                        <div className="total">
                        <h1 className="cart-total">TOTAL</h1>
                            <span className="total-price">$0</span>
                            <button className="purchase-btn">PURCHASE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Navbar