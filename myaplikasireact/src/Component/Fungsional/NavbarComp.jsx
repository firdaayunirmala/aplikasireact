import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import { CartContext } from '../../CartContext';


const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const { value } = useContext(CartContext)

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
                            <UncontrolledDropdown  >
                                <DropdownToggle nav caret >
                                    Paket Salon
                                    <DropdownMenu >
                                        <DropdownItem >
                                        <NavLink to="/paketrambut" className="nav-link" >Paket Perawatan Rambut</NavLink>
                </DropdownItem>
                                        <DropdownItem>
                                        <NavLink to="/paketkaki" className="nav-link" >Paket Perawatan Tangan dan Kaki</NavLink>
                </DropdownItem>
                                    </DropdownMenu>
                                </DropdownToggle>
                            </UncontrolledDropdown>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/tentang" className="nav-link" >Tentang Kami</NavLink>
                        </NavItem>
                    </Nav>
                    <span class="navbar-text mr-3">
                        Silahkan Masuk Sebagai
</span>
                    <UncontrolledDropdown >

                        <DropdownToggle nav caret>
                            Masuk
              </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            <NavLink to="/masukuser" className="nav-link" >Pelanggan</NavLink>
                            
                </DropdownItem>
                            <DropdownItem>
                            <NavLink to="/masukadmin" className="nav-link" >Admin</NavLink>
                </DropdownItem>

                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;