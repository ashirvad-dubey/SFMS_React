import {Link, } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import shutdown from '../assets/shutdown.png'
import { useEffect } from 'react';
import './Navbr.css';
import axios from 'axios';
import { useState } from 'react';

export default function Navbr() {



   const [name, setName] = useState("");

  const navigate=useNavigate();
  const location = useLocation();
  if(location.pathname==='/'){
    return null;
  }
  
  const handlelogout = () => {
  localStorage.clear();   
  navigate('/');          
};


 useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);


  




  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="custom-navbar" sticky="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="w-100 d-flex align-items-center justify-content-between"
        >
          {/* LEFT — main links */}
          <Nav className="nav-links ms-lg-4">
            <Link to="/home" className="nav-item">Home</Link>
         {/*}   <Link to="/addfess" className="nav-item">Add student</Link>{*/}
            <Link to="/viewrecord" className="nav-item">View Student</Link>
            <Link to="/searchrecord" className="nav-item">Edit/Update student</Link>
            <Link to="/viewreport" className="nav-item">View Course</Link>
          </Nav>
             <Navbar.Brand className='dashboard' href="#home"><h1><b>{name}</b></h1></Navbar.Brand>

          {/* RIGHT — logout */}
          <img src={shutdown} alt=" Logout" onClick={handlelogout}  style={{width:'50px',cursor:'pointer',borderRadius:'8px'}}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>   </>
  );
}