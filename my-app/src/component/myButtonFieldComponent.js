import React  from 'react';
import {Button} from 'reactstrap';

const MyButtonFieldComponent = (props) =>{

  return (
    <center>
      <Button
      type="submit" 
      class="btn btn-secondary"
      >Login</Button>
    </center>  
  );
};


MyButtonFieldComponent.defaultProps = {
  errorMesage: null,
  placeholder: null,
  value: 'Login'
};

export default MyButtonFieldComponent;