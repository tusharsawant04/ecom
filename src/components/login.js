import React from 'react';
import{Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
import Input from '@material-ui/core/Input';
const login =()=>{
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
  <label for="exampleFormControlInput1" className="form-label">Email address or phone number</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"/>
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
    <p>New to one roof solution?</p>
    <div className="mb-3">
  
    <Link to="/register">
     <Button type="button" variant="primary">
          Create your one roof account
     </Button>
 </Link>
</div>
  </Card.Body>
</Card>
</div>
    </>
  )
  }
  export default login;
