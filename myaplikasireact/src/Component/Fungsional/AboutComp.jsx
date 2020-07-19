import React from 'react'
import { Row, Col } from 'reactstrap';
import CardComp from './CardComp';

function AboutComp() {
  return (
    <div>
       <Row>
                <Col sm="12" md={{ size: 'auto', offset: 5 }}><h2>PAKET SALON </h2></Col>
                <CardComp/>
            </Row>
      
    </div>
  )
}

export default AboutComp;