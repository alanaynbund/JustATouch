import './App.css';
import logo from '../src/images/logo.png'
import background from '../src/images/background.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black sticky-top justify-content-center" style={{height: "15vh"}}>
        <img src={logo} alt="" style={{width: "25vh"}}/>
      </nav>
      <div style={{backgroundImage: `url(${background})`, height: "100vh"}} className="d-flex justify-content-center">
        <div className='position-absolute top-50 start-50 translate-middle'>
          <h1 className='text-white'>Pure Excellence</h1>
          <div className='d-flex justify-content-center mt-5'  style={{gap:"2em"}}>
            <button className='btn btn-warning'>Book Now</button>
            <button className='btn btn-warning'>All Products</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
