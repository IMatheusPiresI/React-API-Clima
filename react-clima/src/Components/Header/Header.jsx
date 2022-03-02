import React from "react";
import { RecoverPag, ContainerHeader, Nav, BoxLogo, NameSite, Image, BuscaCity } from "./HeaderStyle";
import logo from '../../Images/logo.png'
function Header(){
    return(
        <ContainerHeader>
            <Nav id="nav">
                <BoxLogo>
                    <RecoverPag href="/">
                        <Image src={logo} alt="Logo"/>
                        <NameSite>Capital Clima</NameSite>
                    </RecoverPag>
                </BoxLogo>
                <BuscaCity type="text" name="city" id="city" placeholder="Busque por alguma cidade..." required autoComplete="off" spellCheck='false'/>
            </Nav>
        </ContainerHeader>
    )
}

export default Header;