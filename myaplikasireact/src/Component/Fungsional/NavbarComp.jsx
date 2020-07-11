import React, { useState, useContext } from 'react';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavbarText,Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../CartContext';


const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { value} = useContext(CartContext)
 
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
                            <NavLink to="/paket"  className="nav-link" >Paket Salon</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hooks" className="nav-link">Hooks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/useEffects" className="nav-link">Use Effects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Produk</NavLink>
                        </NavItem>
                    </Nav>

                    <NavbarText>
                        <Button color="danger">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>

                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;