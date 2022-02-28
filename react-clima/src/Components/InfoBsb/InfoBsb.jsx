import React from "react";
import { Container, InfoCity, ContainerInfos } from "./InfoBsbStyle";
import CircleProgress from "../CircleProgress/CircleProgress";
import SunCard from "../SunsetCard/SunsetCard";
import nascerdosol from '../../Images/nascerdosol.png'
import pordosol from '../../Images/pordosol.jpg'

function InfoBsb({humidity, clouds, wind, sunset, sunrise}){
    return(
        <Container>
           <ContainerInfos>
            <InfoCity>
                    <CircleProgress
                        value={humidity}
                        title={'Umidade do ar'}
                        classe={'humidityResponse'}
                        measure={'%'}
                    />

                    <CircleProgress
                        value={clouds}
                        title={'Número de Nuvens'}
                        classe={'cloudsResponse'}
                        measure={'%'}
                    />

                    <CircleProgress
                        value={wind}
                        title={'Velocidade do vento'}
                        classe={'windResponse'}
                        measure={'Km/h'}
                    />

                    <SunCard
                        title={'Nascer do Sol'}
                        img={nascerdosol}
                        timestamp={sunrise}
                    />

                    <SunCard
                        title={'Pôr do sol'}
                        timestamp={sunset}
                        img={pordosol}
                    />
                </InfoCity>
           </ContainerInfos>
        </Container>
    )
}

export default InfoBsb;