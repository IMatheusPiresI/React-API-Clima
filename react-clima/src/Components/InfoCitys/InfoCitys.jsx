import React from "react";
import { Container, ContainerInfos, InfoCity } from "../InfoBsb/InfoBsbStyle";
import CircleProgress from "../CircleProgress/CircleProgress";
import SunCard from "../SunsetCard/SunsetCard";
import nascerdosol from '../../Images/nascerdosol.png'
import pordosol from '../../Images/pordosol.jpg'

function InfoCitys({humidity, clouds, wind, sunset, sunrise}){
    return(
        <Container>
            <ContainerInfos>
                <InfoCity>
                    <CircleProgress
                        value={humidity}
                        title={'Umidade do ar'}
                        classe={'humidityCityResponse'}
                        measure={'%'}
                    />

                    <CircleProgress
                        value={clouds}
                        title={'Número de nuvens'}
                        classe={'cloudsCityResponsive'}
                        measure={'%'}
                    />

                    <CircleProgress
                        value={wind}
                        title={'Velocidade do vento'}
                        classe={'windCityResponse'}
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

export default InfoCitys;