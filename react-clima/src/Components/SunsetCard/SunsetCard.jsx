import React, { useEffect, useState } from "react";
import { BoxSunsetSunrise, ImageSun, HourSun } from './SunsetCardStyle'
import { ContainerCard, TitleCard } from "../CircleProgress/CircleProgressStyle";

function SunCard({title, img, timestamp}){
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        //  Busca a data passada pela API;
        const date = new Date(timestamp * 1000);

        //  Realiza a verificação de horas para formatação;
        if(date.getHours() < 10){
            setHour('0' + date.getHours());
        }else{
            setHour(date.getHours());
        }

         //  Realiza a verificação de minutos para formatação;
        if(date.getMinutes() < 10){
            setMinutes('0' + date.getMinutes());
        }else{
            setMinutes(date.getMinutes());
        }

        //  Realiza a verificação de segundos para formatação;
        if(date.getSeconds() < 10){
            setSeconds('0' + date.getSeconds());
        }else{
            setSeconds(date.getSeconds());
        }
    }, [timestamp])

    return(
        <ContainerCard>
            <TitleCard>{title}</TitleCard>
            <BoxSunsetSunrise>
                    <ImageSun src={img}/>
                    <HourSun>{hour}:{minutes}:{seconds}</HourSun>
            </BoxSunsetSunrise>
        </ContainerCard>
    )
}

export default SunCard;