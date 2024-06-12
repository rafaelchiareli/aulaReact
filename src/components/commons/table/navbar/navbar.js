import React from "react";
import {Container, Nav, Navbar , useNavigate} from 'react-bootstrap';
import { Link , Route, Routes} from 'react-router-dom'
import Cliente from "../../../pages/cliente/cliente";
import { useAppState } from "../../../../context/storeContextProvider";
import Home from "../../../pages/home/home";

const NavbarMain = () =>{

    const {...state} = useAppState();
    return (
        <>
        <Navbar style={{backgroundColor: "#778899", height: "80px"}}>

            <Container>
                <Nav>
                    <Link style={{color: "black"}} to="/cliente">Clientes</Link>
                    <label>{state.nome}</label>
                </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route  path="/cliente" element={<Cliente/>}></Route>
            {/* <Route path="/" index element={<Home></Home>}></Route> */}
        </Routes>
        </>
    )
}
export default NavbarMain;
