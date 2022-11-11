import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCardContext'

const Quantity = ({item}) => {
    const {incrementQuantity, decrementQuantity} = useShoppingCart()

    return (        
        <div className="__quantity">
            <button onClick={() => decrementQuantity(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item)}>+</button>
        </div>
    )
}

export default Quantity