import React from 'react'
import { Container, Row, Col } from 'reactstrap';
function HomePage() {

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 'auto', offset: 4 }}><h2>SELAMAT DATANG </h2></Col>
            <p>Seiring dengan gaya hidup yang modern kami hadir untuk memberikan pelayanan body treatment khusus wanita di kota Purwokerto. Dengan theraphyst yang profesional dan terpecaya dengan berbagai macam jenis perawatan.</p>
            </Row>

            
        </Container>
    )
}

export default HomePage;