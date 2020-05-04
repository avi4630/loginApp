
import React, { useState, useReducer, useEffect } from 'react';
import { Row, Col, Form, Input, Button, Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationFormComponent from './registrationFormComponent'
import { string, object } from 'yup';
import WelcomeComponent from './welcomeComponent';
//import useFetch from '../hooks/useFetch'
const LoginFormComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [newUser, setNewUser] = useState(false);

  const eventOnsubmit = async (event) => {
    event.preventDefault();
    let schema = object().shape({
      username: string().email().required(),
      password: string().required()
    }); schema
      .isValid({
        username: username,
        password: password
      })
      .then(function (valid) {

        if (valid) {


          try {
            fetch("https://reqres.in/api/login", {
              method: "POST",
              credentials: "same-origin",
              headers: new Headers({
                "Content-Type": "application/json"
              }),
              body: JSON.stringify({
                email: username,
                password: password
              })
            }
            ).then(response => {
              console.log("Row Response  ", response);
              return response.json();
            }).then(jsonresponse => {
              console.log("JSON RESPONSE:->  ", jsonresponse);
              if (jsonresponse.token) {
                setToken(jsonresponse.token)
              } else {
                setErrorMsg(jsonresponse.message);
              }
            })
          } catch (ex) {

          }

        } else {
          alert("Please give in right format")
        }
        console.log(username + "  " + password + "  " + valid);
      });
  }

  if (newUser) {
    return (<RegistrationFormComponent />)
  }
  else if (tokenData) {
    return (<WelcomeComponent />)
  }


  return (
    <Container >
      <Row style={{ height: "150px" }}></Row>

      <Row >
        <Col></Col>
        <Col className="border border-info bg-light grey">
          <center>

            <Form onSubmit={eventOnsubmit} className="mt-3 ml-3 mr-3 mb-3">
              <div><h3><b>Username</b>  </h3>
                <Input type="email" placeholder="enter username" value={username}
                  className="border border-primary"
                  onChange={(event) => setUsername(event.target.value)}
                ></Input>
              </div>
              <br></br>
              <div><h3><b>Password </b> </h3>
                <Input type="password" placeholder="enter password" value={password}
                  className="border border-primary"
                  onChange={(event) => setPassword(event.target.value)}
                ></Input>
              </div>
              <br></br>

              <div>
                <Button type="submit" className="bg-success">Login</Button>
              </div>
              <br></br>
              <Row>
                <Col xs="8" className="text-danger b">
                  New User ?<br />
                  then register first</Col>
                <Col> <Button className="bg-info" onClick={() => setNewUser(true)}>Register</Button></Col>
                <br></br>
              </Row>
            </Form>

          </center>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ height: "180px" }}  ></Row>
    </Container>
  )
}
export default LoginFormComponent;