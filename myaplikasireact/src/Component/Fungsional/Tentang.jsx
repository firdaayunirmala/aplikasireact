import React from 'react'
import { Container, Row, Col, CardBody, CardImg, Button } from 'reactstrap';

function Tentang() {
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 'auto', offset: 4 }}><h2>TENTANG KAMI </h2></Col>
            </Row>

            <Row>
                <Col xs="6">
                    <div >
                        <div className="p-3 bg-info my-2 rounded col-md-6 " ><h3>JADWAL BUKA</h3>
                            <p>Jam Buka Salon Jimmy</p>
                            <div className="col-md-12"  >
                                <h6>Senin : 09.00 - 18.00</h6>
                                <br></br>
                                <h6>Selasa : 09.00 - 18.00</h6>
                                <br></br>
                                <h6>Rabu : 09.00 - 18.00</h6>
                                <br></br>
                                <h6>Kamis : 09.00 - 18.00</h6>
                                <br></br>
                                <h6>Jumat : 09.00 - 18.00</h6>
                                <br></br>
                                <h6>Sabtu &amp; Minggu : 09.00 - 18.00 </h6>
                            </div>
                        </div>
                    </div>
                    <Col xs="6">
                        <br></br>
                        <div className="p-12 bg-info my-2 rounded  " >
                        <h3>Kontak Kami </h3>
                        <p>Telephone : 089666107636</p>
                        <p>instagram : firrda_ayu</p>
                        <p>email : firdaayu@gmail.com </p>
                        </div>
                    </Col>
                 
                        <br></br>
                        <h3>Ulasan </h3>
                        <form>
                            <div className="form-group">
                                <input type="text-area" placeholder="Ketikan Sesuatu ..." /> { }
                                <Button type="button" >Kirim</Button>
                            </div>
                        </form>
                </Col>

                <Col xs="6">
                    <br></br>
                    <h3>APA ITU SALON JIMMY ? </h3>
                    <p>Hai Ladies! Salon Jimmy hadir di tengah kota Purwokerto dengan memberikan pelayanan body treatment khusus wanita lho! Adapun yang dapat kami tawarkan untuk para ladies antara lain perawatan rambut, perawatan tubuh, perawatan wajah, perawatan tangan dan kaki serta paket perawatan lainnya.</p>
                    <CardBody>
                        <CardImg top width="25%" src="https://s3-media4.fl.yelpcdn.com/bphoto/E1aTFD3ZOORMTK19PNh9zg/o.jpg" alt="Card image cap" />
                    </CardBody>
                </Col>
            </Row>
        </Container>
    )
} export default Tentang;
