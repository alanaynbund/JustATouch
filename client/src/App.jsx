import './App.css';
import logo from '../src/images/logo.png'
import background from '../src/images/background.jpg'
import {Route, Routes, Link} from 'react-router-dom'
import AllProducts from './views/AllProducts';
import NewProduct from './views/NewProduct'
import LandingPage from './views/LandingPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path='/newproduct' element={<NewProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
