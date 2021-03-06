

import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';

import {  Container, Nav, Navbar  } from 'react-bootstrap';

import { Link } from 'react-router-dom';


function NavbarPage({ flagMenu }) {

  if(flagMenu == "home") {
    return (
      <>
      <section id="topbar" className ="d-flex align-items-center">
          <div className ="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
            </div>
          </div>
      </section>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link  style={{ backgroundColor: 'orange' }} componentClass={Link} href="/company-profile" to="/company-profile">Home</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/about" to="/company-profile/about">About</Nav.Link>
              <Nav.Link  componentClass={Link} href="/company-profile/team" to="/company-profile/team">Team</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/portofolio" to="/company-profile/portofolio">Portofolio</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/contact" to="/company-profile/contact">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </>
    );
  }

  else if(flagMenu == "about") {
    return (
      <>
      <section id="topbar" className ="d-flex align-items-center">
          <div className ="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
            </div>
          </div>
      </section>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link componentClass={Link} href="/company-profile" to="/company-profile">Home</Nav.Link>
              <Nav.Link style={{ backgroundColor: 'orange' }} componentClass={Link} href="/company-profile/about" to="/company-profile/about">About</Nav.Link>
              <Nav.Link  componentClass={Link} href="/company-profile/team" to="/company-profile/team">Team</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/portofolio" to="/company-profile/portofolio">Portofolio</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/contact" to="/company-profile/contact">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </>
    );
  }
  else if(flagMenu == "team") {

    return (
      <>
      <section id="topbar" className ="d-flex align-items-center">
          <div className ="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
            </div>
          </div>
      </section>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link componentClass={Link} href="/company-profile" to="/company-profile">Home</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/about" to="/company-profile/about">About</Nav.Link>
              <Nav.Link  style={{ backgroundColor: 'orange' }} componentClass={Link} href="/company-profile/team" to="/company-profile/team">Team</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/portofolio" to="/company-profile/portofolio">Portofolio</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/contact" to="/company-profile/contact">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </>
    );
  }
  else if(flagMenu == "portofolio") {

    return (
      <>
      <section id="topbar" className ="d-flex align-items-center">
          <div className ="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
            </div>
          </div>
      </section>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link componentClass={Link} href="/company-profile" to="/">Home</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/about" to="/company-profile/about">About</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/team" to="/company-profile/team">Team</Nav.Link>
              <Nav.Link style={{ backgroundColor: 'orange' }}  componentClass={Link} href="/company-profile/portofolio" to="/company-profile/portofolio">Portofolio</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/contact" to="/company-profile/contact">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </>
    );

  }

  else if(flagMenu == "contact") {

    return (
      <>
      <section id="topbar" className ="d-flex align-items-center">
          <div className ="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
            </div>
          </div>
      </section>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link componentClass={Link} href="/company-profile" to="/company-profile">Home</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/about" to="/company-profile/about">About</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/team" to="/company-profile/team">Team</Nav.Link>
              <Nav.Link componentClass={Link} href="/company-profile/portofolio" to="/company-profile/portofolio">Portofolio</Nav.Link>
              <Nav.Link style={{ backgroundColor: 'orange' }} componentClass={Link} href="/company-profile/contact" to="/company-profile/contact">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </>
    );

  }
 
}

export default NavbarPage;
