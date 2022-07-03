
import 'bootstrap/dist/css/bootstrap.min.css';


import { Card, Button, Container, Row, Col, Nav, Navbar, NavLink  } from 'react-bootstrap';



import backgroundCard2 from "../assets/kotlin-logo.png";

import backgroundCard3 from "../assets/react-js-logo.png";

import backgroundCard4 from "../assets/mysql-logo.jpg";

import backgroundCard5 from "../assets/ci-logo.png";

function HomePage() {

  return (
    <>
    <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
          </div>
        </div>
    </section>
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
        <Card>
          <Card.Body style={{ marginLeft: '4rem' }}>
            <Card.Title><b>Selamat Datang di </b><span style={{ color: 'blue' }}>KekinianTeknologi.</span></Card.Title>
            <Card.Text>
              KekinianTeknologi merupakaan perusahan yang bergerak di bidang IT yang menyediakaan 
              jasa pembuataan berbasis Android dan Web
            </Card.Text>
            <Button variant="primary">Get Started</Button>
          </Card.Body>
        </Card>

        <Container style={{ marginTop: '5rem' }}>
          <Card.Title style={{ color: 'blue' }}>Services</Card.Title>
        <br/>
        <br/>
        <Row>
            <Col sm>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={backgroundCard2} />
                <Card.Body>
                  <Card.Title>Android Aplication</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
           <Card.Img variant="top" src={backgroundCard3} />
                <Card.Body>
                  <Card.Title>Web Aplication</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={backgroundCard5} />
                  <Card.Body>
                    <Card.Title>Backend Service</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
           <Card.Img variant="top" src={backgroundCard4} />
                <Card.Body>
                  <Card.Title>Database</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>

      
    </>

  );
}

export default HomePage;
