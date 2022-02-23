import React from "react";
import { ContainerHeader, Nav, BoxLogo, NameSite, Image, BuscaCity } from "./HeaderStyle";
import logo from '../../Images/logo.png'
function Header(){
    return(
        <ContainerHeader>
            <Nav id="nav">
                <BoxLogo>
                    <Image src={logo} alt="Logo"/>
                    <NameSite>Capital Clima</NameSite>
                </BoxLogo>
                <BuscaCity type="text" name="city" id="city" placeholder="Busque por alguma cidade..." required autoComplete="off" spellCheck='false'/>
            </Nav>
        </ContainerHeader>
    )
}

export default Header;