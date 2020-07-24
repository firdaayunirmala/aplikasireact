import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = "http://localhost:3002"

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_paket: this.props.location.state.id_paket,
            nama: this.props.location.state.nama,
            harga: this.props.location.state.harga,
            gambar: this.props.location.state.gambar,
            reponse: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahpaket = (id_paket) => {
        const edit = qs.stringify({
            id_paket: id_paket,
            nama: this.state.nama,
            harga: this.state.harga,
            gambar: this.state.gambar
        });

        axios.put(api+ '/ubah', edit)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
                else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
            })
        }


                render() {
                    return (
                        <Container>
                            <h4> Edit Paket</h4>
                            <Alert color="info" style={{ display: this.state.display }}>
                                {this.state.response}
                            </Alert>

                            <Form className="from">
                                <Col>
                                    <Label>Nama</Label>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama" />
                                            </Col>
                                        </Row>
                                    </FormGroup>

                                    <Label>Harga</Label>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga" />
                                            </Col>
                                        </Row>
                                    </FormGroup>

                                    <Label>Gambar</Label>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Input type="text" name="gambar" value={this.state.gambar} onChange={this.handleChange} placeholder="Masukan Gambar" />
                                            </Col>
                                        </Row>
                                    </FormGroup>

                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Button type="button" onClick={()=>this.ubahpaket(this.state.id_paket)}>Simpan</Button> { }
                                                <Link to="/datapaket" Button type="button" >Kembali</Link>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>

                            </Form>
                        </Container>
                    )
                }
            }

export default EditComp;