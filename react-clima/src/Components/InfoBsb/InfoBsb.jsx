import React from "react";
import { Container, InfoCity } from "./InfoBsbStyle";
import HumidityProgress from "../HumidityProgressBsb/HumidityProgressBsb";

function InfoBsb({humidity}){
    return(
        <Container>
            <InfoCity>
                <HumidityProgress
                    humidity={humidity}
                />
            </InfoCity>
        </Container>
    )
}

export default InfoBsb;