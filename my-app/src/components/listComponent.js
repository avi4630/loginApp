import React, { useState } from 'react';
//import './form.css'
//import ValidationForm from './ValidationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseFetch from '../hooks/useFetch';
import { Row, Col, Button, Container, Card, ListGroup, ListGroupItem, Jumbotron } from "react-bootstrap";
import welcomeComponent from "../components/welcomeComponent"
const ListComponent = () => {
  const [list, setlist] = useState([]);
  const [listdata,setlistdata]=useState(false)
  const [back, setBack] = useState(false);
  if (!listdata) {
    setlistdata(true);
    const fetchOptions = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      })
    };
    UseFetch("https://reqres.in/api/users?page=2", fetchOptions
    ).then(response => {
      console.log(response.data);
      setlist(response.data);
    });
  }

  if (back)
    return (<welcomeComponent />)

  return (
    <Container>
      <Row>
        <Col xs="4"></Col>
        <Col xs="4">
          {list.map((obj) => (
            <Card
              className="border border-success mt-4 bg-light grey"
              key={obj.id}
            >
              <Card.Header className="d-flex justify-content-around">
                <Button className="bg-info btn-sm">
                  <h5>{obj.id}</h5>
                </Button>

              </Card.Header>
              <Card.Body className="h-50 p-3 ml-5 mr-5 font-italic text-center">

                <Card.Text >
                  <h5>{obj.first_name} {obj.last_name}</h5>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-around">
                <Card.Text >
                  <h5 className="text-primary">{obj.email}</h5>
                </Card.Text>
              </Card.Footer>
            </Card>
          ))}
          <Row className="d-flex justify-content-around">
            <Button className="bg-danger mt-5" onClick={() => setBack(true)}>back</Button>
          </Row>
        </Col>
        <Col xs="6"></Col>
      </Row>
    </Container>
  )
};
export default ListComponent;