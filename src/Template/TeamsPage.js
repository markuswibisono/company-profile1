
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';

import profilTeams from "../assets/foto_profil.jpg";

function TeamsPage() {

  return (
    <>
        <div  style={{ marginLeft: '36rem', color:'blue', fontSize: '20px', marginTop: '5rem' }}>
          Teams
        </div>
        <br />
        <div style={{ marginLeft: '2rem' }}>
            <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '100rem' }}>
                <div  style={{ marginLeft: '32rem', marginTop: '2rem'  }}>
                  <img src={profilTeams} width="10%" height="5%" />
                </div>
                  <Card.Body style={{ marginLeft: '30rem' }}>
                      <Card.Title>Developer</Card.Title>
                      <Card.Text>
                        Markus Wibisono
                      </Card.Text>
                </Card.Body>
              </Card>
        </div>
    </>
  );
}

export default TeamsPage;
