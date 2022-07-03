
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';

import { Card, Button, Container, Row, Col, Nav, Navbar, NavLink  } from 'react-bootstrap';

import ruangKantor from "../assets/img/ruangkantor.jpg";

function AboutPage() {

  return (
    <>
      <Container style={{ marginTop: '5rem' }}>

          <Card.Title style={{ color: 'blue' }}>About</Card.Title>
            <br/>
            <br/>
            <Row xs={2} md={3}>
              <Col>
                  <img src={ruangKantor} width="100%" height="50%" />
              </Col>
              <Col>
                Perusahaan kami menyediakaan jasa pembuataan web dan aplikasi android<br />
                yang mencakup: <br />
              <ul>
                <li>Web Company Profile</li>
                <li>Web Data Management</li>
                <li>Aplikasi Android <br />untuk mendukung management</li>
              </ul>
              </Col>
           </Row>
      </Container>


    </>
  );
}

export default AboutPage;
