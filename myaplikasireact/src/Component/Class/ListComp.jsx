import React, { Component } from 'react'
import axios from 'axios';
import qs from 'querystring'
import { Table, Container, Button, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3002'

class ListComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paket: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                paket: res.data.values
            })
        })
    }

    Deletepaket = (idpaket) => {
        const { paket } = this.state
        const data = qs.stringify({
            id_paket: idpaket
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    paket: paket.filter(paket => paket.id_paket !== idpaket),
                    display: 'block'
                })
               this.props.history.push('/datapaket')
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
                <h2>Data Paket</h2>
                <Alert color="succes" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>

                <NavLink href="/paket/tambah"><Button color="blue">Tambah Data</Button></NavLink>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Gambar</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.paket.map(paket =>
                            <tr key={paket.id_paket}>
                                <td>{paket.nama}</td>
                                <td>{paket.harga}</td>
                                <td>{paket.gambar}</td>
                                <td>
                                    <Link to={
                                        {
                                            pathname: `/datapaket/edit`,
                                            state: {
                                                id_paket: paket.id_paket,
                                                nama: paket.nama,
                                                harga: paket.harga,
                                                gambar: paket.gambar
                                            }
                                        }
                                    }> <Button>Ubah</Button>
                                       
                                    </Link>
                                    <span> || </span>
                                    <Button onClick={() =>this.Deletepaket(paket.id_paket)} color="danger">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        ) 
    }
}

export default ListComp;