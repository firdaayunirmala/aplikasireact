import React from 'react';
//import { Link } from 'react-router-dom';

import {Button, Row, Col, CardBody, CardImg} from 'reactstrap';

function CardComp(props) {
        return (
            <Row>
      <Col sm="6">
        <CardBody>
        <CardImg top width="5%" src="http://placeimg.com/640/480/arch" alt="Card image cap" />
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3>Catok Lurus</h3>
          <h4 >Rp. 50.000 </h4>
          <Button>Pesan Sekarang</Button>
          </Col>
        </CardBody>
      </Col>

      <Col sm="6">
        <CardBody>
        <CardImg top width="5%" src="http://placeimg.com/640/480/arch" alt="Card image cap" />
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3>Catok Lurus</h3>
          <h4 >Rp. 50.000 </h4>
          <Button>Pesan Sekarang</Button>
          </Col>
        </CardBody>
      </Col>
    </Row>
        )
    }
export default CardComp;
