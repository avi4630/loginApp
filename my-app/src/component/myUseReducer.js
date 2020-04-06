import React,{useState,useReducer}from 'react';
import {Form,Input,InputGroup,Button} from 'reactstrap';
import MyLabelFieldComponent from './myLabelFieldComponent'
import MyLinkFieldComponent from './myLinkFieldComponent'
import { string, object } from 'yup'; 
import loginReducer from './useReducer/loginUseReducer'
import { setUserDetails } from './useReducer/loginAction'

import 'bootstrap/dist/css/bootstrap.min.css';

const schema2 = object().shape({
  password: string().required()
})
const schema1 = object().shape({
  email: string().email().required()
})
const initialState={
  email:"",
  password:""
}

const MyUseReducer = (props) =>{
  const {placeholder, value} = props;
  const [state, dispatch] = useReducer(loginReducer, initialState);
  


  const checkValidation = (event) =>{
    event.preventDefault()
    console.log("in submit");
    let schema = object().shape({
    email: string().email().required(),
    password: string().required()
  });schema
  .isValid({
      email :state.email,
      password :state.password
  })
  .then(function(valid) {
    if(valid){
      alert("information accepted")
    }
    else{
      alert("enter corect info ")
    }
    console.log(state.email+"  "+state.password+"  "+valid);
  });
}
const handleOnChange = e => {
  const { value, name } = e.target;
  let updatedValues = { ...state };
  updatedValues[name] = value;
  dispatch(setUserDetails(updatedValues));
};

  return (
    <div className="container">
      <div className="row" style={{height:180}}></div>
      <div className="row" style={{height:200}}>
        <div className="col-4"></div>
        <div className="col-4">
        <Form onSubmit={checkValidation}>
        <MyLabelFieldComponent/>
        <br></br>  
        <center>
        <div>
  
            <Input
              type='email'
              name='email'
              placeholder={placeholder}
              onChange={(event) =>{
                handleOnChange(event)
              }}
              value={state.email}
            />
            
        </div>
        
        <br></br>
        <div>
            <Input
              type='password'
              name='password'
              placeholder={placeholder}
              onChange={(event) =>{
                handleOnChange(event)
              }}
              value={state.password}
            />
         
          </div>
          </center>
        <br></br>
        
        <center>
          <Button
          type="submit" 
          class="btn btn-secondary"
          >Login</Button>
        </center>  
        <br/>
        <MyLinkFieldComponent/>
      </Form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    
  );
};
MyUseReducer.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your password',
  value: ''
};
export default MyUseReducer;