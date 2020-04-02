import React  from 'react';
import {Form} from 'reactstrap';
import MyTextFieldComponent,{getInputEmail}from './myTextFieldComponent';
import MyPasswordFieldComponent,{getInputPassword} from './myPasswordFieldComponent'
import MyButtonFieldComponent from './myButtonFieldComponent'
import MyLabelFieldComponent from './myLabelFieldComponent'
import MyLinkFieldComponent from './myLinkFieldComponent'
import { string, object } from 'yup'; 

const MyInnerSqure = (props) =>{
  const checkValidation = (event) =>{
    event.preventDefault()
    console.log("in submit");
    let schema = object().shape({
    email: string().email().required(),
    password: string().required(),
  });schema
  .isValid({
      email :getInputEmail(),
      password :getInputPassword()
  })
  .then(function(valid) {
    console.log(valid);
  });
}
  return (
    <div className="container">
      <div className="row" style={{height:180}}></div>
      <div className="row" style={{height:200}}>
        <div className="col-4"></div>
        <div className="col-4">
        <Form onSubmit={checkValidation}>
        <MyLabelFieldComponent/>
        <br></br>  
        <MyTextFieldComponent />
        <br></br>
        <MyPasswordFieldComponent/>
        <br></br>
        <MyButtonFieldComponent/>
        <br/>
        <MyLinkFieldComponent/>
      </Form>
        </div>
        <div className="col-4"></div>



      </div>
    </div>
  );
};


export default MyInnerSqure;