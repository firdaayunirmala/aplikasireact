import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Tentang() {
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 'auto', offset: 4 }}><h2>TENTANG KAMI </h2></Col>
            </Row>

            <div >
                <div className="p-3 bg-info my-2 rounded col-md-4 " ><h3>JADWAL BUKA</h3>
                <p>Berikut Jam Buka Salon Jimmy</p>
                <div className="col-md-12" style={{ background: 'white' }} >
                    <h4>Senin</h4>
                    <span>09.00 - 18.00</span>
                    <h4>Selasa</h4>
                    <span>09.00 - 18.00</span>
                    <h4>Rabu</h4>
                    <span>09.00 - 18.00</span>
                    <h4>Kamis</h4>
                    <span>09.00 - 18.00</span>
                    <h4>Jumat</h4>
                    <span>09.00 - 18.00</span>
                    <h4>Sabtu &amp; Minggu</h4>
                    <span>09.00 - 18.00</span>
                     </div>
                </div> 
            </div>

           


        </Container>


   
    )
}

export default Tentang;
