import React from "react";
import {Container, Nav, Navbar , useNavigate} from 'react-bootstrap';
import { Link , Route, Routes} from 'react-router-dom'
import Cliente from "../../../pages/cliente/cliente";

const NavbarMain = () =>{

    return (
        <>
        <Navbar style={{backgroundColor: "#5F9EA0"}}>

            <Container>
                <Nav>
                    <Link to="/cliente">Clientes</Link>
                </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route  path="/cliente" element={<Cliente/>}></Route>
        </Routes>
        </>
    )
}
export default NavbarMain;
