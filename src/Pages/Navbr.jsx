import {Link, useLocation, } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import shutdown from '../assets/shutdown.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbr.css';
import { useEffect, useState } from 'react';

export default function Navbr(){

      const[name,setName]=useState('');
      const location=useLocation();
      const navigate=useNavigate();

      const handlelogout=()=>{
        localStorage.clear();
        navigate('/');
      }

      useEffect(()=>{
        const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
      },[]);

     if(location.pathname==='/'){return null;}

  if(location.pathname==='/Create'){return null;}




  return(

<>

    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#"><h1 style={{fontFamily:"cursive"}}><b>Welcome {name}</b></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/home" className="nav-item">Home</Link>
            <Link to="/viewstudent" className="nav-item">View Student</Link>
            <Link to="/updatestudent" className="nav-item">Edit/Update student</Link>
            <Link to="/viewcourse" className="nav-item">View Course</Link>

            
          </Nav>
          <img src={shutdown} alt=" Logout" onClick={handlelogout}  style={{width:'50px',cursor:'pointer',borderRadius:'8px'}}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
</>

  )
}