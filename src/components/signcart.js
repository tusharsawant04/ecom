import React from 'react';
import Footer from './Footer';
import Imgslide from './imgslide';
import Iteamcard from './iteamcard';

import Home from './home';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import login from './login';
const signcart =()=>{
 

  return(
    <>
<div className="col-xs-2" align="right">
    <Card style={{ width: '50rem' }}>
  
  <Card.Body>
    <Card.Title>Sign in for your best experience</Card.Title>
   
      <Link to="/login">
     <Button type="button" variant="primary">
          Sign in securaly
     </Button>
 </Link>
  </Card.Body>
</Card>
</div>
    </>
  )

}

export default signcart;

