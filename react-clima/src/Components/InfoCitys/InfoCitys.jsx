import React from "react";
import { Container, InfoCity } from "./InfoCitysStyle";
import HumidityProgressCity from "../HumidityProgressCity/HumidityProgressCity";

function InfoCitys({humidity}){
    return(
        <Container>
            <InfoCity>
                <HumidityProgressCity
                    humidity={humidity}
                />
            </InfoCity>
        </Container>
    )
}

export default InfoCitys;