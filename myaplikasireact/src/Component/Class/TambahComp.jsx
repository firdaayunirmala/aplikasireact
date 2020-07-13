import React, { Component } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3002'

class TambahComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            harga: '',
            gambar: '',
            response: '',
            display:'none'
        }
    }

    handleChange = (e) => {
        this.setState ({[e.target.name] : e.target.value})
    }
 
    AddPaket = () => {
        axios.post(api+'/tambah', {
            nama_paket: this.state.nama,
            harga_paket: this.state.harga,
            gambar: this.state.gambar

        }).then(json => {
            if(json.data.status === 200) {
                this.setState ({
                    response: json.data.values,
                    display: 'block'
                })
            }
            else {
                this.setState ({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }


    render() {
        return (
            <Container>
                <h4>Tambah Data</h4>
                <Alert color="info" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>

                <Form className="from">
                    <Col>
                        <Label>Nama </Label>
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
                                    <Button color="info" type="button" onClick={this.AddPaket}>Simpan</Button> { }
                                    <Link to="/useeffects" Button type="button" >Kembali</Link>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                </Form>
            </Container>
        )
    }
}

export default TambahComp;