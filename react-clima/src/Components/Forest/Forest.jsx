import React from "react";
import { ContainerForest, ForestDay, ForestIcon, BoxTempMaxMin, ForestMaxTemp, ForestMinTemp, DescripForest } from "./ForestStyle";

function Forest({ day, forestIcon, maxTemp, minTemp, description }){

    let date = new Date(day*1000)
    date = date.getDay()
    const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Quin', 'Sex','Sáb']

    return(
        <ContainerForest>
            <ForestDay>{dias[date]}</ForestDay>
            <ForestIcon src={forestIcon}/>
            <DescripForest>{description}</DescripForest>
            <BoxTempMaxMin>
                <ForestMaxTemp>{maxTemp}°C</ForestMaxTemp>
                <ForestMinTemp>{minTemp}°C</ForestMinTemp>
            </BoxTempMaxMin>
        </ContainerForest>
    )
}

export default Forest;