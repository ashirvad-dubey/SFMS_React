import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './Viewrecord.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Viewstudent(){

  const navigate=useNavigate();
  const [data,setData]=useState([]);
  const [srchbr,setSrchbr]=useState('');

   useEffect(()=>{
    get();
  },[]);


  const get=()=>{
    axios.get("http://127.0.0.1:3000/studentuser")
    .then(res =>{ 
      setData(res.data.data);

    })

  }

  return(
    <>
                <div className="Student-wrapperr">
              <div className='view'><h1>View Student Record</h1>
  <div className='addstn'><Button style={{width:"30%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} className='addstudent' onClick={()=>navigate('/Addfess')} variant="success">Add Student</Button></div>

</div>
   <input  className='search' type="search"placeholder="Search by name roll course"aria-label="Search" value={srchbr} onChange={(e)=>setSrchbr(e.target.value)} />  



<div className="container mt-6 scrollable-card ">
      <div className="row">
        {data
        .filter((item)=>
        item.sname.toLowerCase().includes(srchbr.toLowerCase())||
         item.rollno.toLowerCase().includes(srchbr.toLowerCase())||
          item.course.toLowerCase().includes(srchbr.toLowerCase())
        )
        .map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="card bg-Light text-white m-3 ">
              <div className="card-body1">
                <h5 className="card-title1">{item.receipt}</h5>
                <p className="card-text1">
               {/*}   <strong>Receipt Number:-</strong> {item.receipt} <br />{*/}
                  <strong>Name:-</strong> {item.sname} <br />
                  <strong>Roll No:-</strong> {item.rollno} <br />
                  <strong>Course:-</strong> {item.course} <br />
                  <strong>Payment:-</strong> {item.payment}<br />
                  <strong>From-Year:-</strong> {item.fromyear}<br />
                  <strong>To-Year:-</strong> {item.toyear}<br />
                  <strong>Total Amount:-</strong> {item.amount}<br />


                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
    </>
  )
}