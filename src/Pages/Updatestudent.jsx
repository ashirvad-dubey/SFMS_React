import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';


import './Search.css'
import { useState } from 'react';
import axios from 'axios';

export default function Updatestudent(){
function getId(id,name,course,foryear,toyear,amount){
  setId(id);setName(name);setCourse(course);setForyear(foryear ? foryear.slice(0, 10) : ""),setToyear(toyear ? toyear.slice(0, 10) : ""),setAmount(amount);
  

}

  const[modleshowupdate,setModleShowUpdate]=useState(false);
  const[modleshowdelte,setModleShowDelete]=useState(false);
  const [data,setData]=useState([]);
  const[name,setName]=useState('');
  const[course,setCourse]=useState('');
  const[foryear,setForyear]=useState('');
  const[toyear,setToyear]=useState('');
  const[amount,setAmount]=useState('');
  const[id,setId]=useState(0)
  const [srchbr,setSrchbr]=useState('');


const handlename=(e)=>{setName(e.target.value);}
const handlecourse=(e)=>{setCourse(e.target.value);}
const handlefor=(e)=>{setForyear(e.target.value);}
const handleto=(e)=>{setToyear(e.target.value);}
const handleamt=(e)=>{setAmount(e.target.value);}


 
  const[error,setError]=useState({name:"",course:"",foryear:"",toyear:"",amount:""});


const ValidationName=()=>{if(!name){return "Enter Name"}return"";}
const ValidationCourse=()=>{if(!course){return "Enter Course Name"}return"";}
const ValidationForyear=()=>{if(!foryear){return "Enter For Date"}return"";}
const ValidationToyear=()=>{if(!toyear){return "Enetr To Date"}return"";}
const ValidationAmount=()=>{if(!amount){return "Enter Amount"}return"";}





  const update=()=>{
    const nameerror=ValidationName();
    const courseerror=ValidationCourse();
    const toyearerror=ValidationToyear();
    const foryearerror=ValidationForyear();
    const amounterror=ValidationAmount();
    if(!name || !course || !foryear||!toyear ||!amount){
      setError({name:nameerror,course:courseerror,foryear:foryearerror,toyear:toyearerror,amount:amounterror})
      return;
    }
     const dt={
      sname:name,
      course:course,
      fromyear:foryear,
      toyear:toyear,
      amount:amount,
      id:id
    }

  axios.put("http://127.0.0.1:3000/studentupdt",dt)
  .then(res=>{
    if(res.data.status=="200"){
      alert("Update Successfully....!");
          fatcgdata();
          setModleShow(false);
      
    }else{
             alert("Update Failed....!");
    }})}



const fatcgdata=()=>{
    axios.get("http://127.0.0.1:3000/studentuser")
    .then(res =>{ 
      setData(res.data.data);

    })
  }


  
   useEffect(()=>{
    fatcgdata();
    
  },[]);

  useEffect(()=>{
console.log("Modal Open Values:", { name, course, foryear, toyear, amount });
  },[modleshowupdate])


  return(
    <>
    {/*}  <Button onClick={setModleShowUpdate} variant="primary">Primary</Button>{*/}

<div className="main-body">
    <Container>
             <div className='heading'><h1 style={{color:"black"}}>Update Student Record</h1></div>
        
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              id='search'
              value={srchbr}
              onChange={(e)=>setSrchbr(e.target.value)}
              aria-label="Search"
            />
                      </Form>

    </Container>    

    <Container>        
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Receipt</th>
           <th>Name</th>
           <th>Roll No</th>
            <th>Course</th>
            <th>Payment</th>
            <th>From-Year</th>
             <th>To-Year</th>
            <th>Total Amount</th>
             <th>Update</th>
            <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        {data
        .filter((item)=>
        item.receipt.toLowerCase().includes(srchbr.toLowerCase())||
        item.sname.toLowerCase().includes(srchbr.toLowerCase())||
        item.rollno.toLowerCase().includes(srchbr.toLowerCase())||
        item.course.toLowerCase().includes(srchbr.toLowerCase())
        )
        .map((item)=>{
            return(<tr>
          <td>{item.receipt}</td>
          <td>{item.sname}</td>
          <td>{item.rollno}</td>
          <td>{item.course}</td>
           <td>{item.payment}</td>
           <td>{item.fromyear}</td>
           <td>{item.toyear}</td>
           <td>{item.amount}</td>
<td>
  {<Button onClick={() => {
    getId(item.id, item.sname, item.course, item.fromyear, item.toyear, item.amount);
    setModleShowUpdate(true);
  }} variant="warning">Update</Button>}
</td>
           <td>
 <Button  onClick={() => {
  setId(item.id);               
  setModleShowDelete(true);     
}} variant="danger">Delete</Button>

</td>
        </tr>)})}
         </tbody>                   

    </Table>        
    </Container>
    </div>




  <Modal
      show={modleshowupdate} onHide={()=>setModleShowUpdate(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Update Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className="modal_body">

    <Form>
      <Form.Group className="mb-3" id='form_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Name:-</Form.Label>
        <Form.Control value={name} id='form-input' type="text" onChange={handlename}  placeholder="Enter Name" />
         {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </Form.Group>
      
              <Form.Label id='form_lbl'>Enter Subject</Form.Label>
    <Form.Select id='form-input' value={course} onChange={handlecourse}  aria-label="Default select example">
      <option value="">Select Subject</option>
      <option value="Java">Java</option>
      <option value="C">C</option>
      <option value="C++">C++</option>
      <option value="Full Strack">Full Strack</option>
    </Form.Select>
          {error.course && <p style={{ color: "red" }}>{error.course}</p>}


      <Form.Group className="mb-3" id='form_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Enter From Date</Form.Label>
        <Form.Control id='form-input' value={foryear} onChange={handlefor}  type="date"/>
      </Form.Group>
        {error.foryear && <p style={{ color: "red" }}>{error.foryear}</p>}

       <Form.Group className="mb-3" id='form_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Enter To Date</Form.Label>
        <Form.Control id='form-input' value={toyear} onChange={handleto} type="date"/>
      </Form.Group>
          {error.toyear && <p style={{ color: "red" }}>{error.toyear}</p>}


<Form.Group className="mb-3" id='form_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Amount </Form.Label>
        <Form.Control id='form-input' value={amount} onChange={handleamt} type="number" placeholder='Enter Amount'/>
      </Form.Group>
                {error.amount && <p style={{ color: "red" }}>{error.amount}</p>}

    </Form>
</div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{width:"20%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={()=>setModleShowUpdate(false)}>Close</Button>
      <Button style={{width:"20%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={update} variant="warning">Update</Button>
      </Modal.Footer>
    </Modal>


{/*}Delete Modle{*/}
<Modal
      show={modleshowdelte} onHide={() => setModleShowDelete(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          DELETE STUDENT RECORD
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{color:"red",fontWeight: "bold"}}> Are you sure you want to delete this student record?</h4>
             </Modal.Body>
      <Modal.Footer>
        <Button style={{width:"20%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={()=>setModleShowDelete(false)}>Close</Button>

<Button style={{width:"20%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={() => del(id)} variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>




    </>
  )
}