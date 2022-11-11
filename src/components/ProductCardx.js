import React from 'react'
import HalfRating from './Rating';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../contexts/ShoppingCardContext';
import { currencyFormater } from '../utilities/currencyFormat';

const ProductCardx = ({product}) => {
    const { incrementQuantity } = useShoppingCart()


    const addToWishList = (e) => {
        console.log(`${product.id} added`)
    }

    const addToCompare = (e) => {
        console.log(`${product.id} added`)
    }

  return (
    <div className="__cardx">
        <div className="cardx-img">
            <NavLink to={`../product/${product.articleNumber}`}><img src={product.imageName} className="product-image" alt={product.name} /></NavLink>
        </div>
        <div className="__cardx-body">
        <NavLink to={`${product.category.toLowerCase().replace(/ /gi, "-")}`} className="brandname">{product.category}</NavLink>
            <h4>{product.name}</h4>
            <HalfRating value={product.rating}/>
            <h5 className="product-price">{currencyFormater(product.price)} <span>{currencyFormater(product.oldprice) !== 0}</span></h5>
        </div>
    </div>
  )
}

export default ProductCardx