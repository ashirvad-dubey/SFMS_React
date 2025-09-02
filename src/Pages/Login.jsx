import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

    export default function Login({setIsLogin}){
const navigate=useNavigate();
      const[userOrmob,setUserOrMob]=useState('')
      const[pass,setPass]=useState('')
      const handlepassword=(e)=>{setPass(e.target.value)}


      const login=(e)=>{
          e.preventDefault();
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
              setIsLogin(true);
              navigate('/home');
                window.location.reload();   // 👈 add this

          }else{
               alert("Login Failed....!❌");}})}



  return (
    <>
     <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="login-box">
          <div className='login-2-box'>
            <div className='login-3-box'>
                <div className='login-4-box'>
                    <div className='login-5-box'>

              <h2>Welcome to <span>Login</span> Page</h2>
        <input onChange={(e)=>setUserOrMob(e.target.value)} type="text" placeholder="Phone Number/User Name" />
          <input onChange={handlepassword} type="password" placeholder="Password" />
          <button onClick={login} type='submit' className='sbtn' >Submit</button>
            </div>
          </div>
        </div>
        <div className="bottom-box">
          <p>Don't have an account?</p>
          <button onClick={()=>navigate('/create')} className="create-btn">Create new</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}
