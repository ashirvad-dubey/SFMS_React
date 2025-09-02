import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div className="outer-wrapperr">
      <div className="inner-wrapperr">
        <div className="login-boxx">
         <div className='fess'><h1>Welcome To Student Fess System</h1></div><br />
    <Container>
      <Row>
        <Col xs>
    <Card style={{ width: '20rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>
        
        <div className="card1"><a href="Addfess">Add Student</a></div>
        </Card.Title>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={{ order: 5 }}><Card style={{ width: '20rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>
        <div className="card2"><a href="Searchrecord">Edit Update Student</a></div>
        </Card.Title>
      </Card.Body>
    </Card>
    </Col>
        <Col xs={{ order: 0 }}><Card style={{ width: '20rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>
        <div className="card3"><a href="Viewrecord">View Student</a></div>
        </Card.Title>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col xs>
    <Card style={{ width: '20rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>
        <div className="card4"><a href="Editcourse">Delete Student</a></div>
        </Card.Title>
       </Card.Body>
    </Card>
        </Col>
        <Col xs={{ order: 5 }}><Card style={{ width: '20rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>
        <div className="card5"><a href="Editcourse">Edit Course</a></div>
        </Card.Title>
      </Card.Body>
    </Card>
    </Col>
        <Col xs={{ order: 0 }}><Card style={{ width: '20rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title>
        <div className="card6"><a href="Report">View Course</a></div>
        </Card.Title>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>

            

          </div>
        </div>
      </div>
  );
}
