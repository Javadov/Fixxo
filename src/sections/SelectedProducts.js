import React, { useContext } from 'react'
import { ProductContext } from '../contexts/context'
import ProductCardx from '../components/ProductCardx';

const SelectedProducts = () => {

    const products = useContext(ProductContext)  

    return (
        <section className="__selectedproducts">
            <div className="container">
                <div className="latest-product">
                    <h3>Latest Product</h3>
                    {
                        products.selectedProducts.map(product => <ProductCardx key={product.articleNumber} product={product} />)                        
                    }  
                </div>

                <div className="best-selling-product">
                    <h3>Best Selling Product</h3>
                    {
                        products.selectedProducts.map(product => <ProductCardx key={product.articleNumber} product={product} />)                        
                    }  
                </div>

                <div className="top-reacted-product">
                    <h3>Top Reacted Product</h3>
                    {
                        products.selectedProducts.map(product => <ProductCardx key={product.articleNumber} product={product} />)                        
                    }  
                </div>
            </div>
        </section>
    )
}

export default SelectedProducts