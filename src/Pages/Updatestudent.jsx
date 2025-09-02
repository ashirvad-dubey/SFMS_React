import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import './Search.css'
import axios from 'axios';
export default function Updatestudent(){
  const [modleshow, setModleShow] = useState(false);
  const[modleshowdelte,setModleShowDelete]=useState(false)
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

function getId(id,name,course,foryear,toyear,amount){
  setId(id);setName(name);setCourse(course);setForyear(foryear),setToyear(toyear),setAmount(amount);
  

}


   useEffect(()=>{
    fatcgdata();
    
  },[]);

  const fatcgdata=()=>{
    axios.get("http://127.0.0.1:3000/studentuser")
    .then(res =>{ 
      setData(res.data.data);

    })
  }


  const update=()=>{
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
      
    }else{
             alert("Update Failed....!");
    }})}
  const del = (id) => {
  const dt = { id: id };

  axios.delete("http://127.0.0.1:3000/studentdelete", { data: dt })
    .then(res => {
      if (res.data.status === 200) {  
        alert("Delete Successfully....!");
        fatcgdata();                  
        setModleShowDelete(false);    
      } else {
        alert("Delete Failed....!");
      }
    })
    
    
};

    return(
        <>
        <div className="Student-wrapperr">
             <div className='view'><h1>Update Student Record</h1></div>
            <input className='search' type="search"placeholder="Search by name roll course"aria-label="Search" value={srchbr} onChange={(e)=>setSrchbr(e.target.value)} />  

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
    setModleShow(true);
  }} variant="warning">Update</Button>}
</td>
           <td>
 <Button  onClick={() => {
  setId(item.id);               
  setModleShowDelete(true);     
}} variant="danger">Delete</Button>

</td>
        </tr>)})}
         </tbody></Table>                     
</div>



    <Modal
      show={modleshow} onHide={()=>setModleShow(false)}
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
        <h4></h4>
        <p>
        <label className="form-label">Enter Your name:-</label>
  <input type="text" onChange={handlename} placeholder="Enter New Name" className="textt" />
              <label className="form-label">Enter Subject:-</label>
<select onChange={handlecourse} className="form-select rounded-3 ">
              <option>Select Subject</option>
              <option>Java</option>
              <option>C</option>
              <option>c++</option>
              <option>full Strack</option>
            </select>
                        <label className="form-label">Enter From Date:-</label>

            <input onChange={handlefor} type="date" className="form-control rounded-3" />
                        <label className="form-label">Enter From Year:</label>

            <input onChange={handleto} type="date" className="form-control rounded-3" />
                        <label className="form-label">Enter New Amount-</label>

  <input type="text"onChange={handleamt}  placeholder="Enter New Amount" className="textt" />

        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{width:"20%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={()=>setModleShow(false)}>Close</Button>
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