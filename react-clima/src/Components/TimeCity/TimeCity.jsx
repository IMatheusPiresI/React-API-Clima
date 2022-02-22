import React from "react";
import { ContainerCity, BoxCity } from "./TimeCityStyle";
import CardWheater from "../CardWheater/CardWheater";

function TempoCity({ city , country, img, description, temp, day, forest,}){
    
    return(
        <ContainerCity id="city-wheater">
            <BoxCity>
               <CardWheater
                city={city}
                country={country}
                img={img}
                description={description}
                temp={temp}
                day={day}
                forest = {forest}
               />
            </BoxCity>
        </ContainerCity>
    )
}

export default TempoCity;