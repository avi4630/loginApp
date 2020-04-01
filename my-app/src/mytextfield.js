import React,{useState} from "react";
import ReactDOM from 'react-dom';

const MyTextField=(props)=>{
    const { placeholder, value } = props;

    const [inputStateValue, updateInputValue] = useState(value);
  
  
    return (
        <div style={{height:"40px" }}>
             <center>
      username :<input 
        type='text'
        placeholder={placeholder}
        onChange={ (event) => { updateInputValue(event.target.value)}}
        value={inputStateValue}
      />
      </center>
      </div>
    )
  };
  
  MyTextField.propTypes = {};
  MyTextField.defaultProps = {
    errorMesage: null,
    placeholder: 'Please enter your name',
    //value: 'Your Name Is Not avinash??'

 
};
export default MyTextField;