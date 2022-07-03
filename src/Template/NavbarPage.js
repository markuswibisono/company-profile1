

import 'bootstrap/dist/css/bootstrap.min.css';



import { Card, Button, Container, Row, Col, Nav, Navbar, NavLink  } from 'react-bootstrap';
function NavbarPage() {

  return (
    <>

<Navbar bg="dark" variant="dark">
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#team">Team</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarPage;
