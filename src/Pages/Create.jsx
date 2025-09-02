import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Create.css';
import axios from 'axios';
import back from '../assets/back.png'
export default function Create(){
  const navigate=useNavigate();
  const [name,setName]=useState('')
  const[uname,setUname]=useState('')
  const[pass,setPass]=useState('')
  const[cpass,setCpass]=useState('')
  const[mobile,setMobile]=useState('')
  const handlename=(e)=>{setName(e.target.value);}
  const handleusername=(e)=>{setUname(e.target.value)}
  const handlepassword=(e)=>{setPass(e.target.value)}
  const handlecpassword=(e)=>{setCpass(e.target.value)}
  const handledob=(e)=>{setDob(e.target.value)}
  const handlemobile=(e)=>{setMobile(e.target.value)}

const Insertdat=(e)=>{
  e.preventDefault();
  const dt={
    name:name,
    username:uname,
    password:pass,
    confirmpassword:cpass,
    mobile:mobile}

  axios.post("http://127.0.0.1:3000/adduser",dt)
  .then(res=>{
    if(res.data.status==200){
      alert("Create Successfully....!✅");
          navigate('/');
    }else{
      alert("Insert Failed.....!❌");}})}
const handleback=()=>{
  navigate('/');
}


    return(
        <>
        <div className="page-wrapper">
           <img className='bck' src={back} alt="" onClick={handleback} />
      <div className="create-account-wrapper">
        <div className="create-account-box">
          <h2>Create Account</h2>
          <form className="create-form">
            <input onChange={handlename} type="text" placeholder="Enter Name" required />
            <input onChange={handleusername} type="text" placeholder="Username" required />
            <input onChange={handlepassword} type="password" placeholder="Password" required />
            <input onChange={handlecpassword} type="password" placeholder="Confirm Password" required />
            <input onChange={handlemobile} type="tel" placeholder="Mobile Number" required />
            <button onClick={Insertdat} type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
        </>
)}