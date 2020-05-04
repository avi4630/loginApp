
import React, { useState, useReducer, useEffect } from 'react';
import { Row, Col, Form, Input, Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { string, object } from 'yup';
import ProfileComponent from './profileComponent'
import ListComponent from './listComponent';
import LoginFormComponent from './loginFormComponent';
import ProfileContainer from '../containers/profileContainer';
//import useFetch from '../hooks/useFetch'

const Welcome = (props) => {

    const token = props.token;
    console.log(token);
    const [getUser, setGetUser] = useState(false);
    const [users, setUsers] = useState(false);
    const [back, setBack] = useState(false);
    const [id, setId] = useState();

    useEffect(() => {
        console.log("Loading the page  ")
    })

    if (getUser)
        return (<ProfileContainer id={id} />)
    else if (users)
        return (<ListComponent />)
    else if (back)
        return (<LoginFormComponent />)

    return (
        <Container>

            <Row className="mt-5">
                <Col ></Col>
                <Col className="bg-light grey mt-5  border border-success">
                    <center>
                        <div><h4>insert id</h4>
                            <Input type="number" placeholder="enter id" value={id}
                                onChange={(event) => setId(event.target.value)}
                            ></Input>
                            <br></br>
                            <div>
                                <Button className="bg-info" onClick={() => setGetUser(true)}>profile</Button>
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <Button className="bg-success" onClick={() => setUsers(true)}>all users</Button>
                        </div>
                        <br></br>

                        <div>
                            <Button className="bg-danger" onClick={() => setBack(true)}>logout</Button>
                        </div>
                        <br></br>



                    </center>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default Welcome;