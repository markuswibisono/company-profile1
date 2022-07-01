
import 'bootstrap/dist/css/bootstrap.min.css';


import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import backgroundCard1 from "../assets/dashboard-banner.jpg";

import backgroundCard2 from "../assets/kotlin-logo.png";

import backgroundCard3 from "../assets/react-js-logo.png";

import backgroundCard4 from "../assets/mysql-logo.jpg";

import backgroundCard5 from "../assets/ci-logo.png";

function HomePage() {

  return (
    <>

    <Card style={{ width: '100rem', height: '10rem', marginTop: '2rem', backgroundImage: `url(${backgroundCard1})` }}>
      <Card.Body style={{ marginLeft: '4rem' }}>
        <Card.Title><b>Selamat Datang di </b><span style={{color: "blue"}}>KekinianTeknologi</span></Card.Title>
        <Card.Text>
          KekinianTeknologi merupakaan perusahan yang bergerak di bidang IT yang menyediakaan 
          jasa pembuataan berbasis Android dan Web
        </Card.Text>
        <Button variant="primary">Get Started</Button>
      </Card.Body>
    </Card>

      <Container style={{ marginTop: '5rem' }}>
          <div style={{ marginLeft: '30rem', color:'blue', fontSize: '20px' }} >Support Teknologi</div>
          <br/>
          <Row>
            <Col xs={3} md={3}>
              <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={backgroundCard2} />
                <Card.Body>
                  <Card.Title>Android Aplication</Card.Title>
                </Card.Body>
              </Card>
            </Col>
           <Col xs={3} md={3}>
           <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={backgroundCard3} />
                <Card.Body>
                  <Card.Title>Web Aplication</Card.Title>
                </Card.Body>
              </Card>
          </Col>
          <Col xs={3} md={3}>
          <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={backgroundCard5} />
                <Card.Body>
                  <Card.Title>Backend Service</Card.Title>
                </Card.Body>
              </Card>
          </Col>
          <Col xs={3} md={3}>
          <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
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
