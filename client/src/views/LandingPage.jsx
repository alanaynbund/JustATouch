import logo from '../images/logo.png'
import background from '../images/background.jpg'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black sticky-top justify-content-center" style={{height: "15vh"}}>
        <img src={logo} alt="" style={{width: "25vh"}}/>
      </nav>
      <div style={{backgroundImage: `url(${background})`, height: "100vh"}} className="d-flex justify-content-center">
        <div className='position-absolute top-50 start-50 translate-middle'>
          <h1 className='text-black bg-white p-2'>Just A Touch is all it takes.</h1>
          <div className='d-flex justify-content-center mt-5'  style={{gap:"2em"}}>
            <button className='btn btn-warning'>Book Now</button>
            <Link to="/products">
              <button className='btn btn-warning'>All Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;