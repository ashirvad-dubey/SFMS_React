import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Addfess.css';
import axios from 'axios';
<addfess className="css"></addfess>

export default function Addfess(){
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
  const[tolamt,setTolamt]=useState('')
  const[error,setError]=useState({date:"",course:"",payment:"",number:"",sname:"",fory:" ",
    forto:"",tolamt:""});

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
  const handletotalamt=(e)=>{setTolamt(e.target.value);}

const Validationdate=()=>{if(!date){return "Enter Date"}return "";}
const ValidationCourse=()=>{if(!course){return "Enter Course"}return "";}
const ValidationPayment=()=>{if(!payment){return "Enter Payment Mode"}return "";}
const ValidationNumber=()=>{if(!number){return "Enter Mobile Number"}return "";}
const Validationsname=()=>{if(!sname){return "Enter Sutudent Name"}return "";}
const Validationfory=()=>{if(!fory){return "Enter For Date"}return "";}
const Validationforto=()=>{if(!forto){return "Enter To Date"}return "";}
const Validationtolamt=()=>{if(!tolamt){return "Enter Amount"}return "";}





  



const submit=(e)=>{
  e.preventDefault();
  const Dateerror=Validationdate();
  const Courseerror=ValidationCourse();
  const Paymenterror=ValidationPayment();
  const Numbererror=ValidationNumber();
  const Snameerror=Validationsname();
  const Foryerror=Validationfory();
  const Fortoerror=Validationforto();
  const Tolamterror=Validationtolamt();
  
if(!date || !course || !payment || !number || !sname || !fory || !forto || !tolamt){
  setError({date: Dateerror,course: Courseerror,payment:Paymenterror,number:Numbererror,
    sname:Snameerror,fory: Foryerror,forto: Fortoerror,tolamt: Tolamterror})
    return;
}



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

        axios.post("https://mrnvtjxesvxfaqwryqqn.functions.supabase.co/sfms-api/studentadd",dt)
        .then(res=>{
          if(res.data.status=="200"){
              alert("Insert Successfully....!");
              navigate('/home');
              clearInput();
          }else{
             alert("Insert Failed....!");}})}


useEffect(()=>{
  axios.get("https://mrnvtjxesvxfaqwryqqn.functions.supabase.co/sfms-api/letest")
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

  return(
    <>
    
    <div className="addfess_body">

    <Container>
        <div className="heading"><h1>Add Student Page</h1></div>
    </Container>

    <Container style={{backgroundColor:"burlywood",borderRadius:"25px"}}>
      <Row>
        <Col>
        

    <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Receipt No:-</Form.Label>
        <Form.Control id='add_fess_input' value={recpt} onChange={handlerecpt} type="text" placeholder="Enter Receipt Number" />
      </Form.Group>
    </Form>        
        </Col>
        <Col >
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Roll No:-</Form.Label>
        <Form.Control id='add_fess_input'value={roll} onChange={handlerollno} type="text" placeholder="Enter Roll Number" />
      </Form.Group>
    </Form>        

        
        
        </Col>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Date:-</Form.Label>
        <Form.Control onChange={handledate} id='add_fess_input' type="date" />
      </Form.Group>
    </Form>        

        
        
        </Col>
        <Col>
        
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Course:-</Form.Label>
    <Form.Select id='add_fess_input' onChange={handlecourse} aria-label="Default select example">
      <option>Select Course</option>
      <option value="Java">Java</option>
      <option value="C">C</option>
      <option value="C++">C++</option>
    </Form.Select>
        </Form.Group>
    </Form>        

        
        </Col>
      </Row>
      <Row>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Mode of Payment:-</Form.Label>
 <Form.Select id='add_fess_input' onChange={handlepayment} aria-label="Default select example">
      <option>Choose Payment Mode</option>
      <option value="Cash">Cash</option>
      <option value="Debit Card">Debit Card</option>
      <option value="UPI">UPI</option>
    </Form.Select>      </Form.Group>
    </Form>        

        
        </Col>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>GSTIN</Form.Label>
        <Form.Control id='add_fess_input' onChange={handlegst} type="text" placeholder="Enter GST Number" />
      </Form.Group>
    </Form>        

        
        </Col>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Receiver Name:-</Form.Label>
        <Form.Control id='add_fess_input' onChange={handlename} type="text" placeholder="Enter Student Name" />
      </Form.Group>
    </Form>        

        
        </Col>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile No-:</Form.Label>
        <Form.Control id='add_fess_input' onChange={handlemobile} type="number" placeholder="Enter Mobile Number" />
      </Form.Group>
    </Form>        

        
        </Col>
      </Row>




       <Row>
        <Col>
        

    <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>From Year:-</Form.Label>
        <Form.Control id='add_fess_input' onChange={handlefromy} type="date" />
      </Form.Group>
    </Form>        
        
        
        
        
        
        </Col>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>To Year:-</Form.Label>
        <Form.Control id='add_fess_input' onChange={handletoyear} type="date"  />
      </Form.Group>
    </Form>        

        
        
        </Col>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Amount:-</Form.Label>
        <Form.Control id='add_fess_input' onChange={handleamount1} type="text" placeholder="Enter Amount" />
      </Form.Group>
    </Form>        

        
        
        </Col>
        <Col>
        
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>CGST:-</Form.Label>
        <Form.Control id='add_fess_input' onChange={handlecgstin} value={cgst} type="text"  placeholder="Enter CGST" />
      </Form.Group>
    </Form>        

        
        </Col>
      </Row>
      <Row>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>SGST:-</Form.Label>
        <Form.Control id='add_fess_input' value={sgst} onChange={handlesgstin} type="text" placeholder="Enter SGST" />
      </Form.Group>
    </Form>        

        
        </Col>
        <Col>
        
            <Form>
      <Form.Group className="mb-3" id='add_fess_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Total Amount:-</Form.Label>
        <Form.Control id='add_fess_input' value={tolamt} onChange={handletotalamt} type="text" placeholder="Enter Total Amount" />
      </Form.Group>
    </Form>        

        
        </Col>
        
        
        
      </Row>
            <Button id='add_fess_btn' onClick={submit} variant="success">Submit</Button>

    </Container> 
    </div>   
    </>
  )
}