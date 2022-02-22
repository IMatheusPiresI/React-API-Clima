import React from "react";
import { ContainerBody } from "./HomeStyle";
import Header from "../../Components/Header/Header";
import BoxCards from "../../Components/BoxCards/BoxCards";


function Home(){

    return(
        <ContainerBody>
            <Header />
            <BoxCards />
        </ContainerBody>
    )
}

export default Home;