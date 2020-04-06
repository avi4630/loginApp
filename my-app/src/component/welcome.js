
import React,{useState,useReducer,useEffect}from 'react';
import { Row, Col,Form,Input,Button ,Container,ListGroup,ListGroupItem} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { string, object} from 'yup'; 
import RegistrationForm from './registrationForm'
import GetUser from './getUser'
import UpdateUser from './updateUser';
import LoginForm from './loginForm';
import Users from './users';
//import useFetch from '../hooks/useFetch'

const Welcome=()=>{
    const [getUser,setGetUser]=useState(false);
    const [users,setUsers]=useState(false);
    const [updateUser,setUpdateUser]=useState(false);
    const [back,setBack]=useState(false);
    const [id,setId]=useState();

  useEffect(()=>{
    console.log("Loading the page  ")
  })

      if(getUser)
      return (<GetUser id={id}/>)
      else if(updateUser)
      return(<UpdateUser id={id}/>)
      else if (back)
      return(<LoginForm/>)
      else if(users)
       return(<Users/>)
    
           
  const deleteFunction=()=>{
    try{
        fetch("https://reqres.in/api/users/"+id,{
          method:"DELETE",
          credentials:"same-origin",
          headers:new Headers({
            "Content-Type":"application/json"
          })
        }
        ).then(response=>{
          alert("user id:"+ id+"deleted")
        })
      }catch(ex){
    
      }
  }


return(
    <Container style={{background:"#17a2b8"}}>
    <Row style={{height:"180px"}}></Row>
    
    <Row >
        <Col></Col>
        <Col style={{background:"grey"}}>
    <center>
       
        
         <div><h4>insert id</h4>
         <Input  type="number" placeholder="enter id" value={id}
         onChange={(event)=>setId(event.target.value)}
        ></Input>
        <br></br>
        <div>
            <Button color="info" onClick={()=>setGetUser(true)}>get user</Button>
            </div>
            <br></br>
            <div>
            <Button color="dark" onClick={()=>deleteFunction()}>delete user</Button>
            </div>
        </div>
        <br></br>

        <div>
            <Button style={{background:"green"}} onClick={()=>setUpdateUser(true)}>update user</Button>
        </div>
        <br></br>
        <div>
            <Button  style={{background:"blue"}} onClick={()=>setUsers(true)}>all users</Button>
        </div>
        <br></br>

        <div>
            <Button color="danger" onClick={()=>setBack(true)}>logout</Button>
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
export default Welcome;