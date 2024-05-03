import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" className="nav-bar" fixed='top'>
      <Container>
        <Navbar.Brand href="#atulShince" className='nav-bar-brand text-3xl text-black'>
          <span className='font-semibold'>ATUL</span> <span className='font-light'>SHINCE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
               <Nav.Link href="#homePage">Home</Nav.Link>
               <Nav.Link href="#skillsPage">Skills</Nav.Link>
               <Nav.Link href="#aboutMePage">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contactMePage">
              <button id='contactMeButton'>Contact Me!</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;