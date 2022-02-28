import React from "react";
import { ContainerCity, BoxCity } from "./TimeCityStyle";
import CardWheater from "../CardWheater/CardWheater";
import InfoCitys from "../InfoCitys/InfoCitys";

function TimeCity({ humidity ,city , country, img, description, temp, day, forest, clouds, wind, sunset, sunrise }){
    
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
           <InfoCitys
                humidity={humidity}
                clouds={clouds}
                wind={wind}
                sunset={sunset}
                sunrise={sunrise}
           />
        </ContainerCity>
    )
}

export default TimeCity;