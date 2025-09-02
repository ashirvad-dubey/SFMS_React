import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Viewrecord.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Viewcourse(){
    const [modalShowadd, setModalShowAdd] = useState(false);
    const [modalShowupdt, setModalShowUpdt] = useState(false);
    const [modalShowdlt, setModalShowDlt] =useState(false);
    const [data,setData]=useState([]);
    const[cname,setCname]=useState('');
    const[price,setPrice]=useState('');
  const [srchbr,setSrchbr]=useState('');
    const[id,setId]=useState(0)
    const handlecoursename=(e)=>{setCname(e.target.value)}
    const handlecourseprice=(e)=>{setPrice(e.target.value)}

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
             <div className='view'><h1>View All Course</h1></div>
   <input className='search' type="search"placeholder="Search by course"aria-label="Search" value={srchbr} onChange={(e)=>setSrchbr(e.target.value)} />  

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
        <h4 style={{color:"red"}}>ADD COURSE FROM......!</h4>
        <p>
              <label className="form-label">Enter Subject:-</label>
<select onChange={handlecoursename} className="form-select rounded-3 ">
              <option>Select Course</option>
              <option>Java</option>
              <option>C</option>
              <option>c++</option>
              <option>full Strack</option>
            </select>

            <label className="form-label">Enter Course Prices:-</label>
  <input type="text"onChange={handlecourseprice}  placeholder="Enter New Prices" className="textt" />
        </p>
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
        <h4>COURSE UPDATE.....!</h4>
        <p>
              <label className="form-label">Enter Subject:-</label>
<select onChange={handlecoursename} className="form-select rounded-3 ">
              <option>Select Subject</option>
              <option>Java</option>
              <option>C</option>
              <option>c++</option>
              <option>full Strack</option>
            </select>

                    <label className="form-label">Enter Your name:-</label>
  <input type="text"  onChange={handlecourseprice} placeholder="Enter New Price" className="textt" />
        </p>
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
