import React, { useEffect } from "react";
import { TitleCard, ContainerCard, BoxHumidity, CardHumidity, SVG, CircleOne, NumberProgress, BoxNumber } from "./CircleProgressStyle";

function CircleProgress({value, title, classe, measure}){
    
    useEffect(() => {
            document.querySelector(`.${classe}`).style.strokeDashoffset = 440 - ( 440 * value) / 100
    }, [value, classe])

    return(
       <ContainerCard>
            <TitleCard>{title}</TitleCard>
            <BoxHumidity>
                <CardHumidity>
                    <SVG>
                        <CircleOne cx='70' cy='70' r='70'></CircleOne>
                        <CircleOne className={classe}  cx='70' cy='70' r='70'></CircleOne>
                    </SVG>
                </CardHumidity>
                <BoxNumber>
                    <NumberProgress id="numberProgess">{value}{measure}</NumberProgress>
                </BoxNumber>
            </BoxHumidity>
       </ContainerCard>
    )
}

export default CircleProgress;