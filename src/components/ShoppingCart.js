import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCardContext'
import ShoppingCartItem from '../components/ShoppingCartItem'
import { NavLink } from 'react-router-dom'

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart()

  const { cartSummary } = useShoppingCart()


  return (
    <div className="__shoppingcart offcanvas offcanvas-end" tabIndex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-shopping-bag"></i> Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            { 
                cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))                
            }      
            <div className="checkout">
                <NavLink to="/mybag" >CHECKOUT {cartSummary}</NavLink>
            </div>   
        </div>
 
    </div>
  )
}

export default ShoppingCart