import './App.css';
import { ProductContext } from './contexts/context'
import { ShoppingCartProvider } from './contexts/ShoppingCardContext'
import React, { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/HomeView';
import Categories from './views/CategoriesView';
import Products from './views/ProductsView';
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
    saleProducts: [],
    selectedProducts: []
  })  

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result  = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      let data = await result.json()
      setProducts((oldProducts) =>{ return {...oldProducts, allProducts: data}})
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result  = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      let data = await result.json()
      setProducts((oldProducts) =>{ return {...oldProducts, featuredProducts: data}})
    }
    fetchFeaturedProducts()

    const fetchSaleProducts = async () => {
      let result  = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      let data = await result.json()
      setProducts((oldProducts) =>{ return {...oldProducts, saleProducts: data}})
    }
    fetchSaleProducts()

    const fetchSelectedProducts = async () => {
      let result  = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
      let data = await result.json()
      setProducts((oldProducts) =>{ return {...oldProducts, selectedProducts: data}})
    }
    fetchSelectedProducts()
    
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
