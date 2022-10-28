import './App.css';
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
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/:brandname' element={<Brands />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/search' element={<Search />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/mybag' element={<ShoppingBag />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
