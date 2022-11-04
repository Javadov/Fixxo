import React from 'react'
import HalfRating from './Rating';
import { NavLink } from 'react-router-dom';

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log(`${product.id} added`)
    }

    const addToCompare = (e) => {
        console.log(`${product.id} added`)
    }

    const addToShoppingCard = (e) => {
        console.log(`${product.name} added`)
    }

  return (
    <div className="__card">
        <div className="card-img">
            <img src={product.imageName} className="product-image" alt={product.name} />
            <ul className="card-menu" >
                <button onClick={addToWishList} className="__menulink" href="#"><i className="fa-regular fa-heart"></i></button>
                <button onClick={addToCompare} className="__menulink" href="#"><i className="fa-regular fa-code-compare"></i></button>
                <button onClick={addToShoppingCard} className="__menulink" href="#"><i className="fa-regular fa-bag-shopping add-to-cart"></i></button>
            </ul>
            <NavLink to={`../product/${product.articleNumber}`} className="button-quick-view"><span>QUICK VIEW</span></NavLink>
        </div>
        <div className="__card-body">
            <NavLink to={`${product.category.toLowerCase().replace(/ /gi, "-")}`} className="brandname">{product.category}</NavLink>
            <h4>{product.name}</h4>
            <HalfRating value={product.rating}/>
            <h5 className="product-price"><span>{product.oldprice}</span>$ {product.price}</h5>
        </div>
    </div>
  )
}

export default ProductCard