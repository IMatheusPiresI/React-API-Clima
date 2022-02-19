import React from "react";
import { ContainerHeader, Nav, Image, BuscaCity } from "./HeaderStyle";
import logo from '../../Images/logo.png'
function Header(){
    return(
        <ContainerHeader>
            <Nav id="nav">
                <Image src={logo} alt="Logo"/>
                <BuscaCity type="text" name="city" id="city" placeholder="Busque por alguma cidade..." required autoComplete="off" spellCheck='false'/>
            </Nav>
        </ContainerHeader>
    )
}

export default Header;