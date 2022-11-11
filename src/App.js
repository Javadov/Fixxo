import './App.css';
import { ProductContext } from './contexts/context'
import { ShoppingCartProvider } from './contexts/ShoppingCardContext'
import React, { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/HomeView';
import Categories from './views/CategoriesView';
import Products from './components/script';
import ProductDetails from './views/ProductDetailsView';
import Brands from './views/BrandViews';
import Contacts from './views/ContactsView';
import Search from './views/SearchView';
import Compare from './views/CompareView';
import Wishlist from './views/WishlistView';
import ShoppingBag from './views/ShoppingBagView';
import NotFound from './views/NotFoundView'



function App() {
 
  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: [],
    saleProducts: []
  })  

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result  = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result  = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

    const fetchSaleProducts = async () => {
      let result  = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, saleProducts: await result.json()})
    }
    fetchSaleProducts()
    
  }, [setProducts])

  return (
    <BrowserRouter >
      <ShoppingCartProvider>    
        <ProductContext.Provider   value={products}>    
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/:brandname' element={<Brands />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/search' element={<Search />} />
            <Route path='/compare' element={<Compare />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/mybag' element={<ShoppingBag />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </ProductContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
