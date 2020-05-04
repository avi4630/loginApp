
import React, { useState, useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { string, object } from 'yup';
import Welcome from '../components/welcome';
//import useFetch from '../hooks/useFetch'
const LoginFormContainer = (username, password) => {
  console.log("here")

  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


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
export default LoginFormContainer;