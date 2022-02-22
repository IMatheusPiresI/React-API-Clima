import React from "react";
import Forest from "../Forest/Forest";
import { Card, CityName, ImageWheater, Description, BoxInfo, IconDescription, CurrentTemp, BoxForest } from "./CardWheaterStyle";

function CardWheater({ city, country, img, description, temp, maxTemp, minTemp, forest, foresIcon, day ,key}){
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
                {forest.map((item,index) =>{
                    return <Forest
                    key={index}
                    day={item.dt}
                    description={item.weather[0].description}
                    forestIcon = {`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    maxTemp = {item.temp.max.toFixed(0)}
                    minTemp = {item.temp.min.toFixed(0)}
                />
                })}
            </BoxForest>
        </Card>
    )
}

export default CardWheater;