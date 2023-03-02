import logo from '../images/logo.png'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black sticky-top justify-content-center" style={{height: "15vh"}}>
        <img src={logo} alt="" style={{width: "25vh"}}/>
      </nav>
    </div>
  );
}

export default NavBar;