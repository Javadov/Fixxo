import React, { useContext } from 'react'
import { ProductContext } from '../context'
import ProductCard from '../components/ProductCard';

const FeaturedProducts = () => {

    const products = useContext(ProductContext)  

    return (
        <section className="__featured-products">
            <div className="container">
                <h3>Featured Product</h3>
                <div className="products">                    
                    {
                        products.featuredProducts.map(product => <ProductCard key={product.articleNumber} product={product} />)                        
                    }                    
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts