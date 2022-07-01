
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';

import aboutCard1 from "../assets/ruangkantor.jpg";

function AboutPage() {

  return (
    <>

        <div  style={{ marginLeft: '36rem', color:'blue', fontSize: '20px', marginTop: '5rem' }}>
            About
        </div>
        <br />
        <div style={{ marginLeft: '2rem' }}>
            <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '100rem' }}>
                <Card.Body>
                  <Card.Title style={{ marginLeft: '30rem', color:'blue' }}>
                        KekinianTeknologi
                    </Card.Title>
                    <div style={{ marginLeft: '15rem'}}>
                         Perusaahaan yang bergerak di jasa pembuataan web atau jasa pembuataan aplikasi android
                    </div>
                    <Container style={{ marginTop: '2rem' }}>
                    <Row>
                        <Col xs={3} md={3}>
                            <img src={aboutCard1} width="100%" height="80%" />
                        </Col>
                        <Col xs={3} md={3}>
                            <div>
                            Perusahaan kami menyediakaan layanan sebagai berikut:
                            </div>
                            <br />
                            <div>
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item as="li">Web Company Profile</ListGroup.Item>
                                <ListGroup.Item as="li">Aplikasi Web untuk mengolah data management</ListGroup.Item>
                                <ListGroup.Item as="li">Aplikasi Mobile untuk mempermudah transaksi kasir</ListGroup.Item>
                            </ListGroup>
                            </div>
                        </Col>
                    </Row>
                 </Container>
              </Card.Body>
         </Card>
        </div>
    </>
  );
}

export default AboutPage;
