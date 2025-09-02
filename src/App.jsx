import Addfess from "./Pages/Addfess";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbr from "./Pages/Navbr";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useState } from "react";
import Viewstudent from "./Pages/Viewstudent";
import Viewcourse from "./Pages/Viewcourse";
import Updatestudent from "./Pages/Updatestudent";


function ProtecteRoute({isLogin,children}){

  return isLogin ? children :<Navigate to='/'replace/>;
}
export default function App (){
const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");

  return(
    <>
    <Router>
      <Navbr />
      <Routes>
        <Route path="/" element={<Login setIsLogin={setIsLogin}/>} />

        <Route path="/home" element={ <ProtecteRoute isLogin={isLogin}><Home/> </ProtecteRoute>} />
        <Route path="/addfess" element={ <ProtecteRoute isLogin={isLogin}><Addfess/> </ProtecteRoute>} />
        <Route path="/viewrecord" element={ <ProtecteRoute isLogin={isLogin}><Viewstudent/> </ProtecteRoute>} />
        <Route path="/searchrecord" element={ <ProtecteRoute isLogin={isLogin}><Updatestudent/> </ProtecteRoute>} />
        <Route path="/viewreport" element={ <ProtecteRoute isLogin={isLogin}><Viewcourse/> </ProtecteRoute>} />
        <Route path="/create" element={<Create/>} />




      </Routes>
    </Router>
  
    </>
  )
}