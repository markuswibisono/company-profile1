
//import 'bootstrap/dist/css/bootstrap.min.css';


import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';


function TestPage() {

  return (
    <>
       <section id="topbar" class="d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">&nbsp;&nbsp;jagoanmokas@kekinianteknologi.com</i>
            <i class="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
          </div>
        </div>
    </section>
        <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <h1 class="logo"><a href="index.html">KekinianTeknologi<span>.</span></a></h1>
              <nav id="navbar" class="navbar">
                <ul>
                  <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a class="nav-link scrollto" href="#about">About</a></li>
                  <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                  <li><a class="nav-link scrollto" href="#team">Team</a></li>
                  <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
              </nav>
        </div>
    </header>
    <section id="hero" class="d-flex align-items-center">
      <div class="container" data-aos="zoom-out" data-aos-delay="100">
        <h1>Welcome to <span>BizLand</span></h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
      </div>
    </section>

    </>
  );
}

export default TestPage;
