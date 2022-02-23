import React, { useEffect } from "react";
import { ContainerCard, TitleCard, BoxHumidity, CardHumidity, SVG, CircleOne, NumberProgress, BoxNumber } from "../HumidityProgressBsb/HumidityProgressBsbStyle";

function HumidityProgressCity({humidity}){
    useEffect(() => {
            let circle = document.querySelector('#circleProgressCity');
            let number = document.querySelector(`#numberProgessCity`);
            let humidade = humidity
            number.innerText = `${humidade}%`
            circle.style.strokeDashoffset = 440 - ( 440 * humidade) / 100
    }, [humidity])

    return(
        <ContainerCard>
            <TitleCard>Umidade do ar:</TitleCard>
            <BoxHumidity>
                <CardHumidity>
                    <SVG>
                        <CircleOne cx='70' cy='70' r='70'></CircleOne>
                        <CircleOne id="circleProgressCity" cx='70' cy='70' r='70'></CircleOne>
                    </SVG>
                </CardHumidity>
                <BoxNumber>
                    <NumberProgress id="numberProgessCity"></NumberProgress>
                </BoxNumber>
            </BoxHumidity>
        </ContainerCard>
    )
}

export default HumidityProgressCity;