import React, { useContext, useEffect, useState }  from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/context'
import { useShoppingCart } from '../contexts/ShoppingCardContext'
import Breadcrumb from '../components/Breadcrumb';
import HalfRating from '../components/Rating';
import SizeSelection from '../components/ProductDetails/SizeSelection';
import ProductColor from '../components/ProductDetails/ProductColor';
import ProductQuantity from '../components/ProductDetails/ProductQuantity';
import ExtraDetails from '../components/ProductDetails/ExtraDetails';
import RelatedProducts from './RelatedProducts';
import Carousel from '../components/Carousel';

const ProductDetails = () => {

    const products = useContext(ProductContext)  

    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setProduct(await result.json())
        }
        fetchData()
    }, [])    

    const { cartItems } = useShoppingCart()

    return (
        <div className="__productsignal">
            <div className="container">
                <NavLink to="/">Get 25% OFF at the Fixxo Selection - Shop Now!</NavLink>
                <Breadcrumb currentPage="Product Signal" product={product} />

                <div className="__productdetailsbox">
                    <div className="__productimages">
                        <div className="container">
                            <ul className="slides">
                                <li id="slide1"><img src={product.imageName} className="product-image" alt={product.name} /></li>
                                <li id="slide2"><img src={product.imageName} className="product-image" alt={product.name} /></li>
                                <li id="slide3"><img src={product.imageName} className="product-image" alt={product.name} /></li>
                            </ul>
                        
                            <ul className="thumbnails">
                                <li>
                                    <a href="#slide1" ><img src={product.imageName} className="product-image" alt={product.name} /></a>
                                </li>
                                <li>
                                    <a href="#slide2" ><img src={product.imageName} className="product-image" alt={product.name} /></a>
                                </li>
                                <li>
                                    <a href="#slide3" ><img src={product.imageName} className="product-image" alt={product.name} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="__productdetails">
                        <h1>{product.name}</h1>
                        <div className="__productartnr">
                            <p>SKU: 12345670</p> <p>Category: {product.category}</p>
                        </div>

                        <HalfRating value={product.rating}/>                        

                        <h2>$ {product.price}</h2>
                        <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. <a href="#">(read more)</a></p>
                        <div className="__productsize">
                            <h1>Size:</h1>
                            <SizeSelection />   
                        </div>
                        <div className="__productcolor">
                            <h1>Color:</h1>
                            <ProductColor />
                        </div>
                        <div className="__productquantity">
                            <span>
                                <h1>Qty:</h1>
                                <ProductQuantity /> 
                            </span>
                            <button type='submit' className='button-add-to-cart' field='quantity'><span>ADD TO CART</span></button>
                        </div>
                        <div className="__productshare">
                            <h1>Share:</h1>
                            <div className="__shareline">
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                            </div>
                        </div>
                    </div>
                </div>

                <ExtraDetails />
                <RelatedProducts /> 
            </div>
        </div>
    )
}

export default ProductDetails