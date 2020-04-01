import React ,{useState} from "react";
import ReactDOM from 'react-dom';

const MyPasswordField=(props)=>{

    const {  value, passwordholder } = props;

    const [inputStateValue, updateInputValue] = useState(value);
  
  
    return (
    <div style={{height:"40px" }}>
    <center>
  
      password :<input 
        type='password'
        placeholder={passwordholder}
        onChange={ (event) => { updateInputValue(event.target.value)}}
        value={updateInputValue}
      />
      
      </center>
      </div>
    )
  };
  
  MyPasswordField.propTypes = {};
  
  MyPasswordField.defaultProps = {
    errorMesage: null,
    passwordholder : 'please enter password',
    value: 'Default value'
      };
      
 
 

export default MyPasswordField;