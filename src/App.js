import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Store from './StoreListings'
import Logo from './logo192.png'
import BackgroundImage from './logo512.png'

function App() {
  return (
      <div>
          <header>
            <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src={Logo} alt='logo' style={{width: '50px'}}/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto" > 
                </Nav>
                <Nav className="position-absolute top-5 end-0">
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
          </header>

          <div style={{ textAlign: "center" }}>
            <img src={BackgroundImage} alt='backgroundimage'/>
          </div>

          <Store></ Store>

      </div>
  )
}

export default App;
