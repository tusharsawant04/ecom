import React from "react";
import {Card,Button} from 'react-bootstrap';

const MenuCard =({menudata}) =>{
    
 
    return(
    <>
    <section className="main-card--cointainer">
  {menudata.map((curElem)=>{
     const{id,name,category,image,description}=curElem;

      return(
      <>
      <div className="card-container" key={id}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <div className="card-body">
      <Card.Img src= {image}alt="image" className="card-media"/>
      
          <span className="card-number card-circle subtile">{id}</span>
          <span className="card-author subtle">
          {category}
          </span>
          <Card.Title>{name}</Card.Title>
          
            <Card.Text>
          {description}
          </Card.Text>
      <div className="card-read">Read</div>
      
      </div>
      <Button variant="primary">buy now</Button>
      </Card.Body>
      </Card>
  </div>
        </>
      )
  }
  )}
    </section>
</>
);
;}
export default MenuCard
