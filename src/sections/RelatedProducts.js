import React, { useContext } from 'react'
import { ProductContext } from '../context'
import ProductCard from '../components/ProductCard';

const RelatedProducts = () => {

    const products = useContext(ProductContext) 

    return (
        <section className="__related-products">
            <div className="container">
                <h3>Related Products</h3>
                <div className="products">                    
                    {
                        products.allProducts.map(product => <ProductCard key={product.articleNumber} product={product} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts