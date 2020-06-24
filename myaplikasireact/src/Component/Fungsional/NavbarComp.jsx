import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="">Selamat Datang</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Beranda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">Tentang</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/kelas">Cek Kelas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/hooks">Hooks</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Keluar</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;