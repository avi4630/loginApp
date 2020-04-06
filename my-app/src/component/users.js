
import React,{useState,useEffect}from 'react';
import { Row, Col,Form,Input,Button ,Container,ListGroupItem,ListGroup} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//import useFetch from '../hooks/useFetch'
import Welcome from './welcome';
const Users=()=>{
    
    const [back,setBack]=useState(false);
    const [persons,setPersons]=useState([]);

    const [errorMsg,setErrorMsg]=useState("");
    const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    console.log("Loading the page  "+isLoading)
  })


  try{
    fetch("https://reqres.in/api/users?page=2",{
      method:"GET",
      credentials:"same-origin",
      headers:new Headers({
        "Content-Type":"application/json"
      })
    }
    ).then(response=>{
      return response.json();
    }).then(jsonresponse=>{
      console.log("JSON RESPONSE:->  ",jsonresponse);
      setIsLoading(false);
      if(jsonresponse.data){
        setPersons(jsonresponse.data);  
        console.log(persons);
      }else{
        setErrorMsg(jsonresponse.message);
      }
    })
  }catch(ex){

  }

      if(back)
      return (<Welcome/>)
    
return(
    <Container style={{background:"#17a2b8"}}>
    <br></br>
    
    <Row >
        <Col xs="2"></Col>
        <Col style={{background:"grey"}}>
    <center>
        <div>

         {
          persons.map(person=><h4>{person.id+ "  =>"+person.first_name+"  =>"+person.email}</h4>)
       
         }
        </div>

        <div>
            <Button color="danger" onClick={()=>setBack(true)}>back</Button>
        </div>
        <br></br>
    </center>
</Col>
   <Col xs="2"></Col>
    </Row>
    </Container>
)
}
export default Users;