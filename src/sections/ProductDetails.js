import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb';
import HalfRating from '../components/Rating';
import SizeSelection from '../components/ProductDetails/SizeSelection';
import ProductImages from '../components/ProductDetails/ProductImages';
import ProductColor from '../components/ProductDetails/ProductColor';
import ProductQuantity from '../components/ProductDetails/ProductQuantity';
import ExtraDetails from '../components/ProductDetails/ExtraDetails';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const params = useParams()

    const [products, setProducts] = useState([
        {id: 1, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145400_csalutenavy_v468_10.jpg", category: "Women", brandname: "MOS MOSH",  name: "Tan Alia Shirt", rating: "3", oldprice: "", price: "1499", },
        {id: 2, img: "https://ean-images.booztcdn.com/guess/400x523/guehwta7679210_cblack_vbla_10.jpg", category: "Women", brandname: "GUESS", name: "CESSILY CONVERTIBLE XBODY", rating: "1", oldprice: "1299 kr", price: "875", },
        {id: 3, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145220_cchipmunk_v709_10.jpg", category: "Women", brandname: "MOS MOSH", name: "Alyn Highneck Knit", rating: "4", oldprice: "", price: "1449", },
        {id: 4, img: "https://ean-images.booztcdn.com/guess/400x523/guehwvb8558210_clightrum_vlgr_10.jpg", category: "Women", brandname: "Guess", name: "ABEY CROSSBODY FLAP", rating: "5", oldprice: "", price: "1400", },
        {id: 5, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145370_cecru_v180_10.jpg", category: "Women", brandname: "MOS MOSH", name: "ABEY CROSSBODY FLAP", rating: "2", oldprice: "1299 kr", price: "875", },
        {id: 6, img: "https://ean-images.booztcdn.com/stylein/400x523/styyacht_ccognac_10.jpg", category: "Women", brandname: "Stylein", name: "YACHT BAG", rating: "5", oldprice: "", price: "1799", },
        {id: 7, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145370_cfadedrose_v298_10.jpg", category: "Women", brandname: "MOS MOSH", name: "Talli LS Knit", rating: "4", oldprice: "1299 kr", price: "1169", },
        {id: 8, img: "https://ean-images.booztcdn.com/ted-baker-access/400x523/ake254143_c00black_v00_10.jpg", category: "Women", brandname: "Ted Baker", name: "NIKKEY", rating: "3", oldprice: "", price: "619", }
    ])

  return (
    <div className="__productsignal">
        <div className="container">
            <NavLink to="/">Get 25% OFF at the Fixxo Selection - Shop Now!</NavLink>
            <Breadcrumb currentPage="Product Signal"/>

            <div className="__productdetailsbox">
                <ProductImages />
                <div className="__productdetails">
                    <h1>Modern Black Blouse</h1>
                    <div className="__productartnr">
                        <p>SKU: 12345670</p> <p>BRAND: The Northland</p>
                    </div>
                    <HalfRating  />
                    <h2>$35.00</h2>
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
            <section className="related-products">
            <div className="container">
                <h3>Related Products</h3>
                <div className="products">                    
                    {
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </section>
        </div>
    </div>
  )

}

export default ProductDetails