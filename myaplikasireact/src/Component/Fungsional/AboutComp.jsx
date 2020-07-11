import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp'


function AboutComp() {
 
  return (
    <div>
        <h2>Paket Salon </h2>
      <Container>
        <Row>
          <Col><CardComp id="1" judul = "Belajar React" tanggal="20/06/2020"/></Col>
          <Col><CardComp id="2" judul = "Belajar Laravel" tanggal="21/06/2020"/></Col>
          <Col><CardComp id="3" judul = "Belajar Bootstrap" tanggal="22/06/2020"/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutComp;