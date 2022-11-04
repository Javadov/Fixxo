import React, { useContext } from 'react'
import { ProductContext } from '../context'
import ProductDetails from './ProductDetails'

const Product = () => {

    const products = useContext(ProductContext)  

  return (
    <div className="products">                    
      {
          products.allProducts.map(product => <ProductDetails key={product.articleNumber} product={product} />)                        
      }                    
    </div>
  )
}

export default Product