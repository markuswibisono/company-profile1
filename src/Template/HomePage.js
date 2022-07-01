
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import backgroundCard1 from "../assets/dashboard-banner.jpg";

function HomePage() {

  return (
    <>

    <Card style={{ width: '100rem', height: '10rem', marginTop: '2rem', backgroundImage: `url(${backgroundCard1})` }}>
      <Card.Body style={{ marginLeft: '4rem' }}>
        <Card.Title><b>Selamat Datang di </b><span style={{color: "blue"}}>KekinianTeknologi</span></Card.Title>
        <Card.Text>
          KekinianTeknologi merupakaan perusahan yang bergerak di bidang IT yang menyediakaan 
          layanan pembuataan berbasis Android dan Web
        </Card.Text>
        <Button variant="primary">Get Started</Button>
      </Card.Body>
    </Card>

    </>

  );
}

export default HomePage;
