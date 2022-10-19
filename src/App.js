import './App.css';
import Navbar from './sections/Navbar.js';
import Scene from './sections/Scene.js';
import Showcase from './sections/Showcase.js';
import FeaturedProducts from './sections/FeaturedProducts';


function App() {
  return (
    < >
      <Navbar />
      <Scene />
      <Showcase />
      <FeaturedProducts />
      <div style={{height: "2000px"}}></div>
    </>
  );
}

export default App;
