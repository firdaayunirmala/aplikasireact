import React from 'react'
import { Container, Row, Col, CardImg, CardBody } from 'reactstrap';
function HomePage() {

    return (
        <Container >
            <Row>
                <Col sm="12" md={{ size: 'auto', offset: 4 }}><h2>SELAMAT DATANG </h2>
                    <br></br><br></br></Col>

                <h6>Seiring dengan gaya hidup yang modern kami hadir untuk memberikan pelayanan body treatment khusus wanita di kota Purwokerto. Dengan theraphyst yang profesional dan terpecaya dengan berbagai macam jenis perawatan.</h6>
                <br></br><br></br>
            </Row>

            <Col sm="12" md={{ size: 'auto', offset: 4 }}> <h2>GALERI </h2><br></br></Col> 
            <Row>
                <Col sm="6">
                    <CardBody>
                        <CardImg top width="25%" src="http://placeimg.com/640/480/any/sepia" alt="Card image cap" />
                    </CardBody>
                </Col>
                <Col sm="6">
                    <CardBody>
                        <CardImg top width="25%" src="http://placeimg.com/640/480/nature/grayscale" alt="Card image cap" />
                    </CardBody>
                </Col>
                <Col sm="6">
                    <CardBody>
                        <CardImg top width="25%" src="http://placeimg.com/640/480/arch/grayscale" alt="Card image cap" />
                    </CardBody>
                </Col>
                <Col sm="6">
                    <CardBody>
                        <CardImg top width="25%" src="http://placeimg.com/640/480/people/grayscale" alt="Card image cap" />
                    </CardBody>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;