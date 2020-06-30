import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'

function HooksUseEffect () {

    const [namalengkap, setNamaLengkap] = useState({nama:'Firda', keluarga:'Nirmala' })
    
    useEffect (()=> {
        console.log("Memanggil Use Effect")
        setNamaLengkap ({nama:'Ayu', keluarga:'latunsina'})
    },[])
    
    return (
        <Container>
            <h3>Profil Pengguna</h3>
            <h4>Nama: {namalengkap.nama}</h4>
            <h4>Keluarga: {namalengkap.keluarga}</h4>

        </Container>

    )
}

export default HooksUseEffect;