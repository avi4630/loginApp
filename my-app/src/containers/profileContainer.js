import React, { useState, useReducer, useEffect } from 'react';
import { Row, Col, Form, Input, Button, Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import UseFetch from '../hooks/useFetch';
import ProfilComponent from '../components/profileComponent';
const ProfileContainer = async (props) => {

  //const [id,setId]=useState(props.id);
  let [data, setdata] = useState({});
  let [ad, setad] = useState({});
  //let [email,setEmail]=useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const option = {
    method: "GET",
    credentials: "same-origin",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }

  const res = await UseFetch("https://reqres.in/api/users/" + props.id, option)

  console.log("in profile ", res.data);

  return (<ProfilComponent id={props.id} />)

};

export default ProfileContainer;