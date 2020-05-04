
import React, { useState, useReducer, useEffect } from 'react';
import { Row, Col, Form, Input, Button, Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//import useFetch from '../hooks/useFetch'
import WelcomeComponent from './welcomeComponent';
const ProfilComponent = (props) => {
     console.log("hi hello")
     const [back, setBack] = useState(false);
     const [id, setId] = useState("");
     let [data, setdata] = useState({});
     let [ad, setad] = useState({});
     let [email, setEmail] = useState("");

     const [errorMsg, setErrorMsg] = useState("");

     useEffect(() => {
          try {
               fetch("https://reqres.in/api/users/" + props.id, {
                    method: "GET",
                    credentials: "same-origin",
                    headers: new Headers({
                         "Content-Type": "application/json"
                    })
               }).then(response => {
                    return response.json();
               }).then(jsonresponse => {
                    if (jsonresponse.data) {
                         setdata(jsonresponse.data);
                         setad(jsonresponse.ad);
                         // setEmail(jsonresponse.data.email);  
                         console.log(data, ad);
                    } else {
                         setErrorMsg(jsonresponse.message);
                    }
               })
          } catch (ex) {

          }

     }, [])


     if (back)
          return (<WelcomeComponent />)


     return (
          <Container>

               <Row >
                    <Col></Col>
                    <Col className="mt-5">
                         <center>

                              <Card
                                   className="border border-primary mt-4 bg-light grey"
                                   key={data.id}
                              >
                                   <Card.Header className="d-flex justify-content-around">
                                        <Button className="bg-dark btn-sm">
                                             <h5>{data.id}</h5>
                                        </Button>
                                        <Button className="btn-sm bg-info">
                                             <h5>{data.first_name} {data.last_name}</h5>
                                        </Button>
                                   </Card.Header>
                                   <Card.Body className="h-50 p-3 ml-5 mr-5 font-italic text-left">

                                        <Card.Text >

                                             <h4 className="text-success font-weight-lighter">{ad.company}</h4>
                                             <h6>{ad.text}</h6>
                                        </Card.Text>
                                   </Card.Body>
                                   <Card.Footer className="d-flex justify-content-around">
                                        <Card.Text >
                                             <h5 className="text-success">{data.email}</h5>
                                        </Card.Text>
                                   </Card.Footer>
                              </Card>
                              <br></br>
                              <div>
                                   <Button className="bg-danger" onClick={() => setBack(true)}>back</Button>
                              </div>
                              <br></br>



                         </center>
                    </Col>
                    <Col></Col>
               </Row>
          </Container>
     )
     return <div>static getuser</div>
}
export default ProfilComponent;