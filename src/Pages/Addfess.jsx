import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Addfess.css';
export default function Addfess() {
   const navigate=useNavigate();


  const[recpt,setRecpt]=useState('')
  const[date,setDate]=useState('')
  const[course,setCourse]=useState('')
  const[payment,setPayment]=useState('')
  const[number,setNumber]=useState('');
  const[gst,setGstin]=useState('')
    const[sname,setSname]=useState('')
  const[fory,setFroy]=useState('')
  const[forto,setForto]=useState('')
  const[roll,setRoll]=useState('')
  const[amt,setAmt]=useState('')
  const[cgst,setCgst]=useState('')
  const[sgst,setSgst]=useState('')
  const[tolw,setTotw]=useState('')
  const[tolamt,setTolamt]=useState('')

  const handlerecpt=(e)=>{setRecpt(e.target.value);}
  const handledate=(e)=>{setDate(e.target.value);}
  const handlecourse=(e)=>{setCourse(e.target.value);}
  const handlepayment=(e)=>{setPayment(e.target.value);}
  const handlemobile=(e)=>{setNumber(e.target.value);}
  const handlegst=(e)=>{setGstin(e.target.value);}
   const handlename=(e)=>{setSname(e.target.value);}
  const handlefromy=(e)=>{setFroy(e.target.value);}
  const handletoyear=(e)=>{setForto(e.target.value);}
  const handlerollno=(e)=>{setRoll(e.target.value);}
  const handleamount=(e)=>{setAmt(e.target.value);}
  const handlecgstin=(e)=>{setCgst(e.target.value);}
  const handlesgstin=(e)=>{setSgst(e.target.value);}
  const handletotalwo=(e)=>{setTotw(e.target.value);}
  const handletotalamt=(e)=>{setTolamt(e.target.value);}


  



const submit=(e)=>{
  e.preventDefault();

const dt={
     receipt:recpt,
      date:date,
      course: course,
      payment:payment, 
      sname: sname,
      fromyear: fory,
      toyear: forto,
      rollno: roll,
      amount: tolamt

}

        axios.post("http://127.0.0.1:3000/studentadd",dt)
        .then(res=>{
          if(res.data.status=="200"){
              alert("Insert Successfully....!");
              navigate('/home');
              clearInput();
          }else{
             alert("Insert Failed....!");}})}


useEffect(()=>{
  axios.get("http://127.0.0.1:3000/letest")
  .then(res=>{
    setRoll(res.data.rollno);
    setRecpt(res.data.receipt);
    

  })

},[]);

const clearInput=()=>{
  setDate('');
  setCourse('');
  setPayment('');
  setNumber('');
  setGstin('');
  setSname('');
  setFroy('');
  setForto('');
  setAmt('');
  setCgst('');
  setSgst('');
  setTotw('');
  setTolamt('');
}
const handleamount1 = (e) => {
  const val = parseFloat(e.target.value || 0);
  const calculatedCgst = parseFloat((val * 0.07).toFixed(2));
  const calculatedSgst = parseFloat((val * 0.07).toFixed(2));
  const total = val + calculatedCgst + calculatedSgst;

  setAmt(val);
  setCgst(calculatedCgst);
  setSgst(calculatedSgst);
  setTolamt(total);
};

  return (
    <>
   <div className="container mt-5">
     <div className='receiptl'><h2 className="text-center text-primary mb-4">Payment Receipt</h2></div>
      <form>
        {/* Row 1 */}
        <div className="row g-3 mb-3">
          <div className="col-md-3">
            <label className="form-label">Receipt No:</label>
            <input type="text" value={recpt} onChange={handlerecpt} className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Date:</label>
            <input type="date" onChange={handledate} className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
           <label className="form-label">Course:</label>
            <select onChange={handlecourse} className="form-select rounded-3 ">
              <option>Select Course</option>
              <option>Java</option>
              <option>C</option>
              <option>c++</option>
              <option>full Strack</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Mode of Payment:</label>
            <select onChange={handlepayment} className="form-select rounded-3">
              <option>Select payment mode</option>
              <option>Cash</option>
              <option>Online</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row g-3 mb-3">
          <div className="col-md-3">
            <label  className="form-label">mobile No:</label>
            <input onChange={handlemobile} type="text" className="form-control rounded-3" />
          </div>
          
          <div className="col-md-3">
            <label className="form-label">GSTIN:</label>
            <input onChange={handlegst} type="text" className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Receiver Name:</label>
            <input onChange={handlename} type="text" className="form-control rounded-3" />
          </div> 
        </div>

        {/* Row 3 */}
        <div className="row g-3 mb-3">
          <div className="col-md-3">
            <label className="form-label">From Year:</label>
            <input onChange={handlefromy} type="date" className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
            <label className="form-label">To:</label>
            <input onChange={handletoyear} type="date" className="form-control rounded-3" /> 
          </div>
          <div className="col-md-3">
            <label className="form-label">Roll No:</label>
            <input value={roll} onChange={handlerollno} type="text" className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Amount:</label>
            <input onChange={handleamount1} type="number" className="form-control rounded-3" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <label className="form-label">CGST 7%:</label>
            <input onChange={handlecgstin} value={cgst} type="text" className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
            <label className="form-label">SGST 7%:</label>
            <input onChange={handlesgstin} value={sgst} type="text" className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Total in Words:</label>
            <input onChange={handletotalwo} type="text" className="form-control rounded-3" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Total Amount:</label>
            <input onChange={handletotalamt} value={tolamt} type="text" className="form-control rounded-3" />
          </div>
        </div>
<br />
          <label className="sign">Recevier signature:-</label>
          <hr />
        <div className="submit">
          <button type="submit" onClick={submit} className="btn btn-primary px-5 rounded-pill">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
