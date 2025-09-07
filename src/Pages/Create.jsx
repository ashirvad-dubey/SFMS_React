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
  const[error,setError]=useState({name:"",uname:"",pass:"",cpass:"",mobile:""});


  const handlename=(e)=>{setName(e.target.value);}
  const handleusername=(e)=>{setUname(e.target.value)}
  const handlepassword=(e)=>{setPass(e.target.value)}
  const handlecpassword=(e)=>{setCpass(e.target.value)}
  const handledob=(e)=>{setDob(e.target.value)}
  const handlemobile=(e)=>{setMobile(e.target.value)}

  const Namevalidation=()=>{
    if(!name){
      return "Enter Name";
    }
    return "";
  }
  const UsernameValidation=()=>{
    if(!uname){
      return "Enter User Name";
    }
    return "";
  }
  const Passwordvalidation=()=>{
    if(!pass){return "Enter Password";}
    return "";
  }
   const Cpasswordvalidation=()=>{
    if(!cpass){return "Enter Confirm Password";}
    return "";
  }
  const MobileValidation=()=>{
    if(!mobile){return "Enter Mobile Number"}
    return "";
  }
 




const Insertdat=(e)=>{
  e.preventDefault();
  const Nameerror=Namevalidation();
  const Usernameerror=UsernameValidation();
  const passworderror=Passwordvalidation();
  const Confirmpassworderror=Cpasswordvalidation();
  const Mobileerror=MobileValidation();
  if(!name||!uname||!pass||!cpass||!mobile){
    setError({name:Nameerror,uname:Usernameerror,pass:passworderror,cpass:Confirmpassworderror,mobile:Mobileerror})
    return;
  }
  const dt={
    name:name,
    username:uname,
    password:pass,
    confirmpassword:cpass,
    mobile:mobile}

  axios.post("https://mrnvtjxesvxfaqwryqqn.functions.supabase.co/sfms-api/adduser",dt)
  .then(res=>{
    if(res.data.status==200){
      alert("Create Successfully....!✅");
          navigate('/');
    }else{
      alert("Insert Failed.....!❌");}})}



    return(
        <>
        <div className="page-wrapper">
      <div className="create-account-wrapper">
        <div className="create-account-box">
          <h2>Create Account</h2>
          <form className="create-form">
            <input onChange={handlename} type="text" placeholder="Enter Name" required />
             {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            <input onChange={handleusername} type="text" placeholder="Username" required />
            {error.uname && <p style={{ color: "red" }}>{error.uname}</p>}
            <input onChange={handlepassword} type="password" placeholder="Password" required />
            {error.pass && <p style={{ color: "red" }}>{error.pass}</p>}
            <input onChange={handlecpassword} type="password" placeholder="Confirm Password" required />
            {error.cpass && <p style={{ color: "red" }}>{error.cpass}</p>}
            <input onChange={handlemobile} maxlength={10}  pattern="\\d{10}" type="tel" placeholder="Mobile Number" required />
            {error.mobile && <p style={{ color: "red" }}>{error.mobile}</p>}
            <button onClick={Insertdat} type="submit">Register</button>
            <p className="signup-text">
              Already have an account? <a onClick={()=>navigate('/')} style={{cursor:"pointer", color:"blue"}}>Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
        </>
)}