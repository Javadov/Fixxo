import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCardContext'
import { currencyFormater } from '../utilities/currencyFormat'

const ShoppingCartItem = ({item}) => {
  const {incrementQuantity, decrementQuantity, removeItem} = useShoppingCart()

  return (
    <div className="__shoppingcartitem">
        <div className="__image">
            <img src={item.product.imageName} />
        </div>
        <div className="__info">
            <div className="__name">{item.product.name}</div>
            <div className="__quantity">
                <button onClick={() => decrementQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item)}>+</button>
            </div>
        </div>
        <div className="__price">
            <div>{currencyFormater(item.product.price * item.quantity)}</div>            
        </div>
        <button onClick={() => removeItem(item.articleNumber)}><i className="fa-regular fa-xmark"></i></button>  
    </div>    
  )
}

export default ShoppingCartItem