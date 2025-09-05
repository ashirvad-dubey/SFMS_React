import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

export default function Login({setIsLoggedIn}){
      const navigate=useNavigate();
      const[userOrmob,setUserOrMob]=useState('');
      const[pass,setPass]=useState('');
      const[error,setError]=useState({userOrmob :"",pass:""});
      const handlepassword=(e)=>{setPass(e.target.value)};

      const Mobilevalidation=()=>{
        if(!userOrmob)return "Enter Mobile Number";
        return "";
      }
      const PasswordValdation=()=>{
        if(!pass)return "Enter Password";
        return "";
      }


      const login=(e)=>{
          e.preventDefault();
          const mobileerror=Mobilevalidation();
          const passworderror=PasswordValdation();
          if(!userOrmob || !pass){
            setError({userOrmob:mobileerror,pass:passworderror});
            return;
          }

          const dt={
          usernameOrmobile:userOrmob,
          password:pass
        }
        axios.post("http://127.0.0.1:3000/login",dt)
        .then(res=>{
          if(res.data.status=="200")
          {
              alert("Login Successfully....!✅");
              localStorage.setItem("isLogin","true");
              localStorage.setItem("name", res.data.data.name);
              setIsLoggedIn(true);
              navigate('/home');
              window.location.reload();

          }else{
               alert("Worng Mobile Number and Password....!❌");}})}



      




  return(
    <>
      <div className="outer-wrapper">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="inner-wrapper">
      <div className="login-box">
             <h2>Welcome to <span>Login</span> Page</h2>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control onChange={(e)=>setUserOrMob(e.target.value)} type="text"  maxlength={10}  pattern="\\d{10}" placeholder="Enter Mobile Number" />
                   {error.userOrmob && <p style={{ color: "red" }}>{error.userOrmob}</p>}

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter password</Form.Label>
          <Form.Control onChange={handlepassword} type="password" placeholder="Password" />
                          {error.pass && <p style={{ color: "red" }}>{error.pass}</p>}

      </Form.Group>
    </Form>
          <Button variant="primary" onClick={login} id='sbtn'>Login</Button>
        <p className="signup-text">
              Don't have an account?  <span onClick={()=>navigate('/Create')} style={{cursor:"pointer", color:"blue"}}>Sign up</span>
            </p>
      </div>
    </div>
        </Container>

      </div>

    
    
    
    </>
  )
}