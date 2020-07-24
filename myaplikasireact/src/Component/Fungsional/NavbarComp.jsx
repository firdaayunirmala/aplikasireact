import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

  function NavbarComp () {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Beranda</NavLink>
                        </NavItem>

                        <NavItem>
                        <NavLink to="/paket" className="nav-link" >Perawatan Rambut</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/tentang" className="nav-link" >Tentang Kami</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/datapaket" className="nav-link" >CRUD Admin</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/masukadmin" className="nav-link" >Login</NavLink>
                        </NavItem>
                    </Nav>

                
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;