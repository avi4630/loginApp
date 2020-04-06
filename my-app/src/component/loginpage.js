import React,{useState,useReducer,useEffect}from 'react';
import {Form,Input,InputGroup,Button} from 'reactstrap';
import MyLabelFieldComponent from './myLabelFieldComponent'
import MyLinkFieldComponent from './myLinkFieldComponent'
import { string, object} from 'yup'; 
import reducer from './useReducer/loginUseReducer'
import { setDetails } from './useReducer/loginAction'

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

const LoginPage = (props) =>{
  const {placeholder, value} = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputStatePassword, updateInputPassword] = useState(value);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [inputStateEmail, updateInputEmail] = useState(value);
  

  useEffect(()=>{
    console.log("Loading the page  "+isLoading)
  })




  const handleOnSubmit = (event) =>{
    event.preventDefault()
    setIsLoading(true);
    console.log("in submit");
    debugger
    const formdata = new FormData(event.target)
    console.log(formdata)
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
      
      try{
        fetch("https://reqres.in/api/login",{
          method:"POST",
          credentials:"same-origin",
          headers:new Headers({
            "Content-Type":"application/json"
          }),
          body:JSON.stringify({
            email:formdata.get("email") ,
            password:formdata.get("password")
          })
        }
        ).then(response=>{
          console.log("Row Response  ",response);
          return response.json();
        }).then(jsonresponse=>{
          console.log("JSON RESPONSE:->  ",jsonresponse);
          setIsLoading(false);
          if(jsonresponse.token){
            setToken(jsonresponse.token)     
          }else{
            setErrorMsg(jsonresponse.message);
          }
        })
      }catch(ex){

      }
    }else{
      alert("Please give in right format")
    }
    console.log(state.email+"  "+state.password+"  "+valid);
  });
}
const handleOnChange = e => {
  const { value, name } = e.target;
  let updatedValues = { ...state };
  updatedValues[name] = value;
  dispatch(setDetails(updatedValues));
};

  if(tokenData!=="")
  {
    debugger
    return(
    <h3 style={{display: "grid",justifyContent:"center",alignContent:"center"}} >${tokenData}</h3>
    )
  }else if(errorMsg!==""){
    return(
      <h3 style={{display: "grid",justifyContent:"center",alignContent:"center"}} >${errorMsg}</h3>
      )
  }

  return (
    <div className="container">
      <div className="row" style={{height:180}}></div>
      <div className="row" style={{height:200}}>
        <div className="col-4"></div>
        <div className="col-4">
        <Form onSubmit={handleOnSubmit} id="my-form">
        <MyLabelFieldComponent/>
        <br></br>  
        <div>
          <InputGroup>
            <Input
              type='email'
              name='email'
              placeholder={placeholder}
              onChange={(event) =>{updateInputEmail(event.target.value)
                handleOnChange(event)
              }}
              value={inputStateEmail}
            />
          </InputGroup>
          <br/>
        </div>
        <div>
          <InputGroup>
            <Input
              type='password'
              name='password'
              placeholder={placeholder}
              onChange={(event) =>{updateInputPassword(event.target.value)
                handleOnChange(event)
              }}
              value={inputStatePassword}
            />
          </InputGroup> 
          <br/>
          </div>
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
LoginPage.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your password',
  value: ''
};
export default LoginPage;