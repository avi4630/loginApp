
import React,{useState,useReducer,useEffect}from 'react';
import { Row, Col,Form,Input,Button ,Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//import useFetch from '../hooks/useFetch'
import Welcome from './welcome';
const GetUser=(props)=>{
    
    const [back,setBack]=useState(false);
    const [id,setId]=useState(props.id);
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");

    const [errorMsg,setErrorMsg]=useState("");
    const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    console.log("Loading the page  "+isLoading)
  })


  try{
    fetch("https://reqres.in/api/users/"+props.id,{
      method:"GET",
      credentials:"same-origin",
      headers:new Headers({
        "Content-Type":"application/json"
      })
    }
    ).then(response=>{
      console.log("Row Response  ",response);
      return response.json();
    }).then(jsonresponse=>{
      console.log("JSON RESPONSE:->  ",jsonresponse);
      setIsLoading(false);
      if(jsonresponse.data){
        setId(jsonresponse.data.id) ;
        setName(jsonresponse.data.first_name) ;
        setEmail(jsonresponse.data.email);  
        console.log(jsonresponse.data);
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
    <Row style={{height:"180px"}}></Row>
    
    <Row >
        <Col></Col>
        <Col style={{background:"grey"}}>
    <center>
       
        <div>
       <h4>id:-{id}</h4>
       <h4>name:-{name}</h4>
       <h4>email:-{email}</h4>
        </div>

        <div>
            <Button color="danger" onClick={()=>setBack(true)}>back</Button>
        </div>
        <br></br>
       
    

    </center>
</Col>
   <Col></Col>
    </Row>
    <Row style={{height:"180px"}}  ></Row>
    </Container>
)
}
export default GetUser;