import React from 'react';
import Footer from './Footer';
import Imgslide from './imgslide';
import Iteamcard from './iteamcard';

import Home from './home';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import login from './login';
const register =()=>{


 

  return(
    <>
    
    <div className="col-xs-2" align="center">
<div>
  <Link to="/">
  <h4>oneroof.in</h4>
  </Link>
  
</div>

    <Card style={{ width: '24rem' }}>
  
  <Card.Body>
    <Card.Title>Sign-In</Card.Title>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Your Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1"/>
  <label for="exampleFormControlInput1" className="form-label">Mobile number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1"/>
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"/>
  <label for="exampleFormControlInput1" className="form-label">password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1"/>

  

   </div>
    
    <Button variant="primary" target='./'size='lg'>Continue</Button>
    <p>By continuing, you agree to One Roof Conditions of Use and Privacy Notice.</p><br/>
    <p>Need help?</p>

  </Card.Body>
</Card>
</div>

<div className="col-xs-2" align="center">
    <Card style={{ width: '24rem' }}>
  
  <Card.Body>
    <p>already have an account ? <Link to="/login"><b>sign in </b>
  </Link></p>
    <div className="mb-3">
  
    <Link to="/register">
     
          Create your one roof account
     
 </Link>
</div>
  </Card.Body>
</Card>
</div>
    </>
  )

}

export default register;

