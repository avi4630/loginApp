
import React, { useState, useReducer, useEffect } from 'react';
import { Row, Col, Form, Input, Button, Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { string, object, number } from 'yup';
import LoginFormComponent from './loginFormComponent'

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [id, setId] = useState();

  const [errorMsg, setErrorMsg] = useState("");

  const eventOnsubmit = (event) => {
    event.preventDefault();
    console.log("in submit");
    let schema = object().shape({
      name: string().required(),
      job: string().required()
    }); schema
      .isValid({
        name: name,
        job: job
      })
      .then(function (valid) {

        if (valid) {

          try {
            fetch("https://reqres.in/api/users", {
              method: "POST",
              credentials: "same-origin",
              headers: new Headers({
                "Content-Type": "application/json"
              }),
              body: JSON.stringify({
                name: name,
                job: job
              })
            }
            ).then(response => {
              console.log("Row Response  ", response);
              return response.json();
            }).then(jsonresponse => {
              console.log("JSON RESPONSE:->  ", jsonresponse);
              if (jsonresponse.id) {
                setId(jsonresponse.id)
              } else {
                setErrorMsg(jsonresponse.message);
              }
            })
          } catch (ex) {

          }

        } else {
          alert("Please give in right format")
        }
        console.log(name + "  " + job + "  " + valid);
      });
  }
  if (id !== "") {
    return (<LoginFormComponent />)

  }

  else if (errorMsg !== "") {
    return (
      <h3 style={{ display: "grid", justifyContent: "center", alignContent: "center" }} >${errorMsg}</h3>
    )
  }


  return (
    <Container>
      <Row>
        <Col></Col>

        <Col style={{ background: "grey" }}>
          <center>

            <Form onSubmit={eventOnsubmit} className="bg-white rounded pb_form_v1">



              <div><h3>name </h3>
                <Input type="text" placeholder="enter name" value={name}
                  onChange={(event) => setName(event.target.value)}
                ></Input>
              </div>

              <div><h3>job </h3>
                <Input type="text" placeholder="enter job" value={job}
                  onChange={(event) => setJob(event.target.value)}
                ></Input>
              </div>
              <br></br>

              <div>
                <Button type="submit" style={{ background: "green" }}>Register</Button>
              </div>
              <br></br>
            </Form>

          </center>
        </Col>
        <Col></Col>
      </Row>

    </Container>
  )
}
export default RegistrationForm;
