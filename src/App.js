import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ContactsView from './views/ContactsView'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/categories' element={<CategoriesView />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path='/contacts' element={<ContactsView />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
