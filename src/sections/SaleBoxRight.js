import React, { useContext } from 'react'
import { ProductContext } from '../contexts/context'
import ProductCard from '../components/ProductCard';
import BackgroundImage from '../assets/images/6-1.png';

const SaleBoxRight = () => {

  const products = useContext(ProductContext)  

  return (
    <section className="sale-box-right">
        <div className="container">
        <div className="products">                    
                    {
                        products.saleProducts.map(product => <ProductCard key={product.articleNumber} product={product} />)                        
                    }                    
            </div>
            <div className="big-box-right">
                <img src={BackgroundImage} />
                <h1>2 FOR USD $49</h1>
                <button href="#" className="button-white"><span>FLASH SALE</span></button>
            </div>
        </div>
    </section>
  )
}

export default SaleBoxRight