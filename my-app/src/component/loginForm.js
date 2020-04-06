
import React,{useState,useReducer,useEffect}from 'react';
import { Row, Col,Form,Input,Button ,Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { string, object} from 'yup'; 
import RegistrationForm from './registrationForm'
import Welcome from './welcome';
//import useFetch from '../hooks/useFetch'
const LoginForm=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const [isLoading,setIsLoading]=useState(false);
    const [tokenData,setToken]=useState("");
    const [errorMsg,setErrorMsg]=useState("");
    const [newUser,setNewUser]=useState(false);

  useEffect(()=>{
    console.log("Loading the page  "+isLoading)
  })

    const eventOnsubmit = (event) =>{
      event.preventDefault();
      setIsLoading(true);
      console.log("in submit");
      let schema = object().shape({
      username: string().email().required(),
      password: string().required()
    });schema
    .isValid({
        username :username,
        password :password
    })
    .then(function(valid) {
  
      if(valid){


        try{
          fetch("https://reqres.in/api/login",{
            method:"POST",
            credentials:"same-origin",
            headers:new Headers({
              "Content-Type":"application/json"
            }),
            body:JSON.stringify({
              email:username,
              password:password
            })
          }
          ).then(response=>{
            console.log("Row Response  ",response);
            return response.json();
          }).then(jsonresponse=>{
            console.log("JSON RESPONSE:->  ",jsonresponse);
            setIsLoading(false);
            if(jsonresponse.token){
              setToken(jsonresponse.token)     
            }else{
              setErrorMsg(jsonresponse.message);
            }
          })
        }catch(ex){
  
        }
        
      }else{
        alert("Please give in right format")
      }
      console.log(username+"  "+password+"  "+valid);
    });
  }
      if(newUser)
    {
      return (<RegistrationForm/>)
    }
    else if(tokenData!=="")
    {
      return(
      <Welcome/>
      )
    }else if(errorMsg!==""){
      return(
        <h3 style={{display: "grid",justifyContent:"center",alignContent:"center"}} >${errorMsg}</h3>
        )
    }
           
  


return(
    <Container style={{background:"#17a2b8"}}>
    <Row style={{height:"180px"}}></Row>
    
    <Row >
        <Col></Col>
        <Col style={{background:"grey"}}>
    <center>
       
        <Form onSubmit={eventOnsubmit}>
        <div><h3>username  </h3>
        <Input  type="email" placeholder="enter username" value={username}
         onChange={(event)=>setUsername(event.target.value)}
        ></Input>
        </div>

        <div><h3>password  </h3>
        <Input  type="password" placeholder="enter password" value={password}
         onChange={(event)=>setPassword(event.target.value)}
        ></Input>
        </div>
        <br></br>

        <div>
            <Button type="submit" style={{background:"green"}}>Login</Button>
        </div>
        <br></br>
        <Row>
          <Col xs="8" style={{color:"red",fontSize:"18px"}}>new User? then register first</Col>
          <Col> <Button style={{background:"blue"}} onClick={()=>setNewUser(true)}>Register</Button></Col>
          <br></br>
        </Row>
       </Form>

    </center>
</Col>
   <Col></Col>
    </Row>
    <Row style={{height:"180px"}}  ></Row>
    </Container>
)
}
export default LoginForm;