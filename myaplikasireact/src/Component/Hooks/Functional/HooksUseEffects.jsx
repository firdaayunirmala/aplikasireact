import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, Container, Button, NavLink } from 'reactstrap'


const api = 'http://localhost:3002'

function HooksUseEffects () {

    const [paket, setPaket] = useState([])

    useEffect(() => {
        console.log("Memanggil Use Effect")
        axios.get(api + '/tampil').then(res => {
          setPaket  (res.data.values) 
        })
     }, [])

        return (
            <Container>
                <h2>Daftar Paket</h2>

                <NavLink href="/paket/tambah"><Button color="info">Tambah Data</Button></NavLink>
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
                        {paket.map(paket =>
                            <tr key={paket.id_paket}>
                                <td>{paket.nama_paket}</td>
                                <td>{paket.harga_paket}</td>
                                <td>{paket.gambar}</td>
                                <td>
                                    <Button>Ubah</Button>
                                    <span> || </span>
                                    <Button>Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }

export default HooksUseEffects;
