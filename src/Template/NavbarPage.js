
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import backgroundPhone from "../assets/phone2.png";

function NavbarPage() {

  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <span style={{color:'white'}}> <img  style={{  width: '2rem', height: '2rem'  }}  src={backgroundPhone} /> &nbsp;Contact: 08881283981 </span>
        </Container>
      </Navbar>

      <Navbar style={{  marginTop: '2rem' }} bg="light">
        <Container>
          <Navbar.Brand href="#home" style={{color:'blue'}}>KekinianTeknologi</Navbar.Brand>
          <Nav style={{marginRight:'5rem'}} className="float-right">
            <Nav.Link href="#home"><b>Home</b></Nav.Link>
            <Nav.Link href="#features"><b>About</b></Nav.Link>
            <Nav.Link href="#features"><b>Teams</b></Nav.Link>
            <Nav.Link href="#features"><b>Portofolio</b></Nav.Link>
            <Nav.Link href="#features"><b>Contact</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;
