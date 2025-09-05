import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Viewrecord(){
  const[data,setData]=useState([]);
  const navigate=useNavigate();
  const [search,setSearch]=useState('');


    const GetTable=()=>{
      axios.get("http://127.0.0.1:3000/studentuser")
      .then(res=>{
        setData(res.data.data);
        console.log(res.data.data);

      })}
  useEffect(()=>{
    GetTable();

  },[]);


  return(
    <>
    <div className="heading">
    <Container>
      
      <Row>
        
        <Col  sm={8}><h1>View Student Record</h1></Col>
        <Col sm={4}>
        
        <Button className='addstudent' onClick={()=>navigate('/Addfess')} variant="info"><b>Add Student</b></Button>
        </Col>
      </Row>
      
    </Container>
</div>
<div className="card-box">
<Form.Control
              type="text"
              placeholder="Search by name Roll_No Course_Name"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className=" mr-sm-2"
              id='search'
            />

            
    <Container>
            <Row>

      {data
      .filter((item)=>
          item.sname.toLowerCase().includes(search.toLowerCase())||
          item.rollno.toLowerCase().includes(search.toLowerCase())||
          item.course.toLowerCase().includes(search.toLowerCase())


      )
      .map((item,index)=>{
        return(

<Card id='card' key={index}>
        <Card.Title id='card-title'>{item.receipt }</Card.Title>

                  <div className="details-box">
               <b><strong>Name:-</strong> {item.sname} <br />
                  <strong>Roll No:-</strong> {item.rollno} <br />
                  <strong>Course:-</strong> {item.course} <br />
                  <strong>Payment:-</strong> {item.payment}<br />
                  <strong>From-Year:-</strong> {item.fromyear}<br />
                  <strong>To-Year:-</strong> {item.toyear}<br />
                  <strong>Total Amount:-</strong> {item.amount}</b><br />

</div>

    </Card>
)
      })




      }

      
        

          </Row>

    </Container>
    </div>
        </>
  )
}