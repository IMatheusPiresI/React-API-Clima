import React, { useEffect, useState } from "react";
import { ContainerApiBSb, BoxBsb, ContainerBsb } from './ViewBsbStyle'
import CardWheater from "../CardWheater/CardWheater";
import apiBsb from "../../api/apiBsb";
import apiForest from "../../api/apiForest";
import InfoBsb from "../InfoBsb/InfoBsb";

function ViewBsb(){
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [temp,setTemp] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [forest, setForest] = useState([])
    const [humidityProgress, setHumidityProgress] = useState(0)
    const [clouds, setClouds] = useState(0)
    const [wind, setWind] = useState(0) 
    const [sunset, setSunset] = useState(0)
    const [sunrise, setSunrise] = useState(0)

    useEffect(( ) =>{
        async function wheaterBsb(){
            await apiBsb.get().then(res=>{
                const response = res.data
                console.log(response)
                setCity(response.name)
                setCountry(response.sys.country)
                setTemp(response.main.temp.toFixed(0))
                setImg(`http://openweathermap.org/img/wn/${response.weather[0].icon}.png`)
                setDescription(response.weather[0].description)
                setHumidityProgress(response.main.humidity)
                setClouds(response.clouds.all)
                setWind(Math.floor(response.wind.speed))
                setSunset(response.sys.sunset)
                setSunrise(response.sys.sunrise)
               async function forestBsb(){
                    apiForest(response).get().then(res=>{
                        const forest = res.data
                        setForest(forest.daily.slice(1 ,6))
                    })
               }
               forestBsb()
            })
        }
        wheaterBsb()
        document.querySelector('#boxbsb').classList.add('animationbsb')
    }, [])

    return(
       <ContainerApiBSb id="cardbsb">
           <ContainerBsb>
                <BoxBsb id="boxbsb">
                    <CardWheater
                            city={city}
                            country = {country}
                            temp={temp}
                            img = {img}
                            forest={forest}
                            description={description}
                        />
                    <InfoBsb
                        humidity={humidityProgress}
                        clouds={clouds}
                        wind={wind}
                        sunset={sunset}
                        sunrise={sunrise}
                    />
                </BoxBsb>
                
            </ContainerBsb>
       </ContainerApiBSb>
    )
}

export default ViewBsb;