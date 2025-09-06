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

function ProtectedRoute({isLoggedIn,children}){
  return isLoggedIn ? children:<Navigate to="/" replace/>;
}
export default function App(){
 const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLogin") === "true");
  return(
    <>
<Router>
<Navbr/>
<Routes>

<Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>

<Route path="/home" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
  <Home/> </ProtectedRoute>} />

<Route path="/addfess" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
  <Addfess/> </ProtectedRoute>} />


<Route path="/viewstudent" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
  <Viewstudent/> </ProtectedRoute>} />

<Route path="/viewcourse" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
  <Viewcourse/> </ProtectedRoute>} />

<Route path="/updatestudent" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
  <Updatestudent/> </ProtectedRoute>} />


        <Route path="/create" element={<Create/>}  />

</Routes>

</Router>


    </>
  )
}