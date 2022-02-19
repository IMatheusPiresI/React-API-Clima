import React from "react";
import { ContainerCity, BoxCity } from "./TimeCityStyle";
import CardWheater from "../CardWheater/CardWheater";

function TempoCity({ city , country, img, description}){
    return(
        <ContainerCity id="city-wheater">
            <BoxCity>
               <CardWheater
                city={city}
                country={country}
                img={img}
                description={description}
               />
            </BoxCity>
        </ContainerCity>
    )
}

export default TempoCity;