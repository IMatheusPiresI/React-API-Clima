import React, { useEffect } from "react";
import { TitleCard, ContainerCard, BoxHumidity, CardHumidity, SVG, CircleOne, NumberProgress, BoxNumber } from "./HumidityProgressBsbStyle";

function HumidityProgressBsb({humidity}){
    useEffect(() => {
            let circle = document.querySelector('#circleProgress');
            let number = document.querySelector(`#numberProgess`);
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
                        <CircleOne id="circleProgress" cx='70' cy='70' r='70'></CircleOne>
                    </SVG>
                </CardHumidity>
                <BoxNumber>
                    <NumberProgress id="numberProgess"></NumberProgress>
                </BoxNumber>
            </BoxHumidity>
       </ContainerCard>
    )
}

export default HumidityProgressBsb;