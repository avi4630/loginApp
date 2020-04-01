import React,{Component} from "react";
import ReactDOM from 'react-dom';
import MyTextField from "./mytextfield";
import MyPasswordField from './mypasswordfield';
import MyButtonField from "./mybuttonfield";
import SignupFirst from "./signupfirst";
import './index.css';
import ValidationForm from './loginvalidation';
const MyLoginBox=()=>{
 return <div  >
     <div style={{background:"green" ,height:"200px"}}></div>
 <div style={{background:"grey" ,height:"200px"}} >
     <center>
    
    <ValidationForm/>
    </center>
    </div>
    <div style={{background:"green" ,height:"200px"}}></div>
    </div>
 
};
export default MyLoginBox;