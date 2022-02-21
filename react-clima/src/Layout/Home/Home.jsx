import React, { useEffect, useState } from "react";
import { ContainerBody, Loading, BoxCards, Cards, BoxLoading } from "./HomeStyle";
import Header from "../../Components/Header/Header";
import axios from 'axios'
import TempoCity from "../../Components/TimeCity/TimeCity";
import CardErro from "../../Components/CardErro/CardErro";
import CardBsb from "../../Components/CardBsb/CardBsb";
import carregando from '../../Images/loading.gif'
import Forest from "../../Components/Forest/Forest";

function Home(){
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [erro, setErro] = useState(false)
    const [icon, seticon] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState('')
    const [temp, setTemp] = useState(0)
    const [maxTemp, setMaxtemp] = useState(0)
    const [minTemp, setMinTemp] = useState(0)
    const [forest, setForest] = useState([])
    
    useEffect( () => {
      document.querySelector('#city').addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
            document.querySelector('#cardbsb').style.display = 'none'
            document.querySelector('#cards').style.display = 'none'
            setLoading(carregando)
            setErro('')
            const city = document.querySelector('#city').value
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=42c032547a934e75ea5e3467aa1dc273`
            setErro(false)
            document.querySelector('#city-wheater').style.display = 'flex'
             
            async function clima(){
                await axios.get(api).then(res => {
                const response = res.data
                console.log(response)
                setLoading('')
                document.querySelector('#cards').style.display = 'initial'
                document.querySelector('#nav').style.backgroundColor  = "rgb(0,128,205)"
                document.querySelector('#city').style.backgroundColor  = "#0267a3"
                document.querySelector('#city').style.border  = "2px solid #000"
                document.querySelector('#city').placeholder = 'Busque por alguma cidade...'
                setTemp(response.main.temp.toFixed(0))
                setMaxtemp(response.main.temp_max.toFixed(0))
                setMinTemp(response.main.temp_min.toFixed(0))
                setCity(response.name)
                setCountry(response.sys.country)
                setDescription(response.weather[0].description)
                async function previsao(){
                    const previsao = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&lang=pt_br&units=metric&exclude=current,minutely,hourly,alerts&appid=42c032547a934e75ea5e3467aa1dc273`
                    await axios.get(previsao).then(res => {
                        const response = res.data
                        setForest(response.daily)
                    })
                }
                previsao()
                seticon(`http://openweathermap.org/img/wn/${response.weather[0].icon}.png`)
                setErro(false)
                })
                .catch(()=>{
                    setLoading('')
                    setErro(true)
                    document.querySelector('#cards').style.display = 'initial'
                    document.querySelector('#nav').style.backgroundColor  = "#000000"
                    document.querySelector('#city').style.backgroundColor  = "#FF3030"
                    document.querySelector('#city').style.border  = "2px solid #CD0000"
                    document.querySelector('#city').placeholder = 'Cidade não encontrada...'
                })
            }
            clima()
            }
        })   
       
    }, [])
    return(
        <ContainerBody>
            <Header />
            <BoxCards>
                <CardBsb/>
                <BoxLoading>
                    <Loading src={loading}/>
                </BoxLoading>
                <Cards id="cards">
                    {erro ? <CardErro/> : <TempoCity
                        city={city}
                        country={country}
                        img={icon}
                        description={description}
                        temp={temp}
                    />}
                </Cards>
            </BoxCards>
        </ContainerBody>
    )
}

export default Home;