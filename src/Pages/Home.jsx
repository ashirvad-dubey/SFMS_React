import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';


export default function Home(){
  return(
    <>
    <Container fluid>
      <Row>
        <Col>
         <div className='fess'><h1>Welcome To Student Fees System</h1></div><br />
        </Col>
      </Row>
    </Container>  

    <Container>
      <div className="inner-card">
        <div className="main-box">
      <Row>
        <Col xs>
    <Card style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Text>
        <div className="card1"><a href="Addfess">Add Student</a></div>
        </Card.Text>
      </Card.Body>
    </Card></Col>

        <Col xs={{ order: 5 }}>
        
    <Card style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Text>
                  <div className="card2"><a href="updatestudent">Edit Update Student</a></div>

        </Card.Text>
      </Card.Body>
    </Card>
        
        </Col>
        <Col xs={{ order: 0 }}>
        
    <Card style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Text>
                  <div className="card3"><a href="viewstudent">View Student</a></div>

        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>

<Row>
        <Col xs>
    <Card style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Text>
                  <div className="card4"><a href="updatestudent">Delete Student</a></div>

        </Card.Text>
      </Card.Body>
    </Card></Col>

        <Col xs={{ order: 5 }}>
        
    <Card style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Text>
                  <div className="card5"><a href="updatestudent">Edit Course</a></div>

        </Card.Text>
      </Card.Body>
    </Card>
        
        </Col>
        <Col xs={{ order: 0 }}>
        
    <Card style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
        <Card.Text>
          <div className="card6"><a href="viewcourse">View Course</a></div>
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
</div>
<small style={{marginTop:"8px",fontSize:"20px",color:"#666",fontFamily:"cursive"}}>
          © 2025 Ashirvad Kumar Dubey. All Rights Reserved.
        </small>
</div>
    </Container>
    </>
  )
}