import React, { useContext } from 'react'
import { ProductContext } from '../contexts/context'
import ProductCard from '../components/ProductCard';
import BackgroundImage from '../assets/images/5-1.png';

const SaleBoxLeft = () => {

  const products = useContext(ProductContext)  

  return (
    <section className="sale-box-left">
        <div className="container">
            <div className="big-box-left" >
                <img src={BackgroundImage} />
                <h1>2 FOR USD $29</h1>
                <button href="#" className="button-white"><span>FLASH SALE</span></button>
            </div>
            <div className="products">                    
                    {
                        products.saleProducts.map(product => <ProductCard key={product.articleNumber} product={product} />)                        
                    }                    
            </div>
        </div>
    </section>
  )
}

export default SaleBoxLeft