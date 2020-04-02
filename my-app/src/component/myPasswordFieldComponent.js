import React ,{useState} from 'react';
import {Input, InputGroup} from 'reactstrap';
import { string, object } from 'yup'; 
let inputPassword;

//validation
const schema = object().shape({
  password: string().required()
})
export const getInputPassword =()=>{
  return inputPassword;
}
const setInputPassword =(pass)=>{
  inputPassword = pass
}

const MyPasswordFieldComponent = (props) =>{
  const {placeholder, value} = props;

 const [inputStatePassword, updateInputPassword] = useState(value);
  const [showPasswordError, updateShowPasswordError] = useState(false);

  const shouldPasswoedMarkError = (field) => {
    schema.isValid({
      password:inputStatePassword
    }).then(function(valid) {
      updateShowPasswordError(!valid)
    })
  };
  return (<center>
    <div>
    <InputGroup>
      <Input
        type='password'
        placeholder={placeholder}
        onChange={(event) =>{updateInputPassword(event.target.value)
          shouldPasswoedMarkError(inputStatePassword)
        setInputPassword(inputStatePassword)
        }}
        value={inputStatePassword}
      />
    </InputGroup> 
    <br/>
    <span className={showPasswordError ? "error" : "d-none"}
      >invalid password</span>
    </div>
    </center>
  );
};


MyPasswordFieldComponent.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your password',
  value: ''
};
export default MyPasswordFieldComponent;