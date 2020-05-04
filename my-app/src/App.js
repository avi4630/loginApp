import React, { Component ,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from "react-google-login";
const App =()=> {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = response => {
    debugger
    console.log("res=>"+response)
   setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  
    return (
      <div className="App">
       <h1>GoogleLogin</h1>
      <h2>welcome:{name}</h2>
      <h2>email:{email}</h2>
      <img src={url} alt={name} />
      <GoogleLogin
        clientId="957899345198-g6pf7g3p38dij5bso0m90ngn24p5mchv.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      </div>
    );
  }


export default App;
