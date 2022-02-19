import React from "react";
import { Card, CityName, ImageWheater, Description, BoxInfo } from "./CardWheaterStyle";

function CardWheater({ city, country, img, description }){
    return(
        <Card id="card">
            <CityName>{city} / {country}</CityName>
            <ImageWheater src={img} alt="FotoTempo" />
            <Description>{description}</Description>
            <BoxInfo>

            </BoxInfo>
        </Card>
    )
}

export default CardWheater;