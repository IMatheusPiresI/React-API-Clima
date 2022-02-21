import React from "react";
import Forest from "../Forest/Forest";
import { Card, CityName, ImageWheater, Description, BoxInfo, IconDescription, CurrentTemp, BoxForest } from "./CardWheaterStyle";

function CardWheater({ city, country, img, description, temp, maxTemp, minTemp, forest }){
    return(
        <Card id="card">
            <CityName>{city} / {country}</CityName>
            <BoxInfo>
                <IconDescription>
                    <ImageWheater src={img} alt="FotoTempo"/>
                    <Description>{description}</Description>
                </IconDescription>
                <CurrentTemp>{temp}°C</CurrentTemp>
            </BoxInfo>
            <BoxForest>
                <Forest/>
            </BoxForest>
        </Card>
    )
}

export default CardWheater;