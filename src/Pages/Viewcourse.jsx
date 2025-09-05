import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Viewrecord.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Search.css'



export default function Viewcourse(){
    const [modalShowadd, setModalShowAdd] = useState(false);
    const [modalShowupdt, setModalShowUpdt] = useState(false);
    const [modalShowdlt, setModalShowDlt] =useState(false);
    const [data,setData]=useState([]);
    const[cname,setCname]=useState('');
    const[price,setPrice]=useState('');
    const [srchbr,setSrchbr]=useState('');
    const[error,setError]=useState({cname:"",price:""});
    const[id,setId]=useState(0)
    const handlecoursename=(e)=>{setCname(e.target.value)}
    const handlecourseprice=(e)=>{setPrice(e.target.value)}
    const courseValidation=()=>{if(!cname){return "Enter Course Name"}return "";}
    const priceValidation=()=>{if(!price){return "Enter Course Price"}return "";}


function getId(id,cname,price){
  setId(id),setCname(cname),setPrice(price);
}




const getcourse=()=>{
  axios.get("http://127.0.0.1:3000/courseuser")
  .then(res=>{
   // console.log(res.data);
   setData(res.data.data);
  })
}

    useEffect(()=>{
  getcourse();

},[]);


const addData=()=>{
  const courseerror=courseValidation();
  const priceerror=priceValidation();
  if(!cname || !price){
    setError({cname:courseerror,price:priceerror})
    return;
  }
  const dt={
    cname:cname,
    cprice:price
  }
  axios.post('http://127.0.0.1:3000/addcourse',dt)
  .then(res=>{
    if(res.data.status=="200"){
      alert("Insert Sucessfully");
      getcourse();
            setModalShowAdd(false);

    }
    else{
      alert("Insert failed");
    }
  })


}

const cupdt=()=>{
  const courseerror=courseValidation();
  const priceerror=priceValidation();
  if(!cname || !price){
    setError({cname:courseerror,price:priceerror})
    return;
  }
const dt={
  cname:cname,
  cprice:price,
  id:id


}
axios.put('http://127.0.0.1:3000/updtcourse',dt)
.then(res=>{
  if(res.data.status=="200"){
      alert("Update Successfully....!");
      getcourse();
    setModalShowUpdt(false);

  }else{
             alert("Update Failed....!");
  }})}

     const cdlt=()=>{
      const dt={id:id};

      axios.delete('http://127.0.0.1:3000/dletecourse',{data:dt})
      .then(res=>{
        if(res.data.status===200){
          alert("sucesss");
            getcourse();
        setModalShowDlt(false);
          
        }
        else("failed");
      })
     }

    return(
        <>

     <div className="Student-wrapperr">
    <Container>
        <div className='heading'><h1>View All Course</h1></div>

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
        
            <th>Course Id</th>
            <th>Course Name</th>
             <th>Course Price</th>
            <th>Add Student</th>
            <th>Update Course</th>
            <th>Delete Course</th>
        </tr>
      </thead>
      <tbody>

        {data
        .filter((item)=>
        item.cname.toLowerCase().includes(srchbr.toLowerCase())||
         item.id.toString().toLowerCase().includes(srchbr.toLowerCase())



        )
        
        
        
        .map((item)=>{
            return(<tr>
           <td>{item.id}</td>
          <td>{item.cname}</td>
          <td>{item.cprice}</td>
          
<td>{<Button className='courebtn' onClick={()=>{setModalShowAdd(true);}}
              variant="success">Add Course</Button>}</td>
           <td><Button onClick={()=>{getId(item.id,item.cname,item.price);setModalShowUpdt(true);}}
           variant="warning">Update</Button>

</td>

      <td>
 <Button onClick={()=>{setId(item.id);setModalShowDlt(true);}}variant="danger">Delete</Button>

</td>

        </tr>)})}
         </tbody></Table> 
    </Container>

            </div>


{/*} Add Student moudle{*/}
    <Modal
     show={modalShowadd} onHide={()=>setModalShowAdd(false)}      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
              ADD COURSE FROM.....!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className="modal_body">
    <Form> 
    <Form.Label id='form_lbl'>Enter Subject</Form.Label>
    <Form.Select id='form-input' value={cname}  onChange={handlecoursename}  aria-label="Default select example">
      <option value="">Select Subject</option>
      <option value="Java">Java</option>
      <option value="C">C</option>
      <option value="C++">C++</option>
      <option value="Full Strack">Full Strack</option>
    </Form.Select>
          {error.cname && <p style={{ color: "red" }}>{error.cname}</p>}

       <Form.Group className="mb-3" id='form_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Amount:-</Form.Label>
        <Form.Control  id='form-input' type="text" onChange={handlecourseprice}  placeholder="Enter Amount" />
         {error.price && <p style={{ color: "red" }}>{error.price}</p>}
      </Form.Group>
     

    </Form>
</div>      
      </Modal.Body>
      <Modal.Footer>
        <Button style={{width:"30%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={()=>setModalShowAdd(false)}>Close</Button>
                <Button style={{width:"30%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} variant='success' onClick={addData}>Add Course</Button>

      </Modal.Footer>
    </Modal>


{/*} update Student{*/}
 <Modal
     show={modalShowupdt} onHide={()=>setModalShowUpdt(false)}      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          COURSE UPDATE FROM....!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>


<div className="modal_body">
    <Form> 
    <Form.Label id='form_lbl'>Enter Subject</Form.Label>
    <Form.Select id='form-input' value={cname} onChange={handlecoursename}  aria-label="Default select example">
      <option value="">Select Subject</option>
      <option value="Java">Java</option>
      <option value="C">C</option>
      <option value="C++">C++</option>
      <option value="Full Strack">Full Strack</option>
    </Form.Select>
          {error.cname && <p style={{ color: "red" }}>{error.cname}</p>}

       <Form.Group className="mb-3" id='form_lbl' controlId="exampleForm.ControlInput1">
        <Form.Label>Amount:-</Form.Label>
        <Form.Control  id='form-input' type="text" onChange={handlecourseprice}  placeholder="Enter Amount" />
         {error.price && <p style={{ color: "red" }}>{error.price}</p>}
      </Form.Group>
     

    </Form>
</div>   

      </Modal.Body>
      <Modal.Footer>
        <Button style={{width:"30%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={()=>setModalShowUpdt(false)}>Close</Button>
         <Button style={{width:"30%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={cupdt}  variant="warning">Update</Button>

      </Modal.Footer>
    </Modal>


 <Modal
     show={modalShowdlt} onHide={()=>setModalShowDlt(false)}      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Course Delete.....!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <p style={{color:"red", fontWeight: "bold"}}>
  Are you sure you want to delete this student record?
</p>
      </Modal.Body>
      <Modal.Footer>
                <Button style={{width:"30%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={()=>setModalShowDlt(false)}>Close</Button>

      <Button style={{width:"30%",borderRadius: "30px",padding:".5rem" ,fontSize:"1.2rem"}} onClick={cdlt}  variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>



        


        </>
    )
}
