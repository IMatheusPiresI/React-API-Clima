import React, { useState, useEffect } from "react";
import { ContainerBody, Body } from "./HomeStyle";
import Header from "../../Components/Header/Header";
import BoxCards from "../../Components/BoxCards/BoxCards";
import carregando from '../../Images/loading.gif'
import apiForest from "../../api/apiForest";
import apiWheaterCity from '../../api/apiWheaterCity'
import Footer from "../../Components/Footer/Footer";

function Home(){

    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [erro, setErro] = useState(false)
    const [icon, seticon] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState('')
    const [temp, setTemp] = useState(0)
    const [forest, setForest] = useState([])
    const [humidity, setHumidity] = useState(0)
    const [clouds, setClouds] = useState(0)
    const [wind, setWind] = useState(0)
    const [sunset, setSunset] = useState(0)
    const [sunrise, setSunrise] = useState(0)

    useEffect( () => {
      document.querySelector('#city').addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
            const input =  document.querySelector('#city').value.trim()
            if(input === ''){
                document.querySelector('#city').placeholder = 'Digite um nome válido...'
            }else{
                document.querySelector('#cardbsb').style.display = 'none'
                document.querySelector('#cards').style.display = 'none'
                setLoading(carregando)
                setErro('')
                const city = document.querySelector('#city').value
                setErro(false)
                document.querySelector('#city-wheater').style.display = 'flex'
                
                async function clima(){
                    await apiWheaterCity(city).get().then(res => {
                    const response = res.data
                    setLoading('')
                    setHumidity(response.main.humidity)
                    document.querySelector('#cards').style.display = 'initial'
                    document.querySelector('#city').placeholder = 'Busque por alguma cidade...'
                    setTemp(response.main.temp.toFixed(0))
                    setCity(response.name)
                    setCountry(response.sys.country)
                    setDescription(response.weather[0].description)
                    setClouds(response.clouds.all)
                    setWind(Math.floor(response.wind.speed))
                    setSunset(response.sys.sunset)
                    setSunrise(response.sys.sunrise)
                    async function forestWheater(){
                        await apiForest(response).get().then(res => {
                            const resp = res.data
                            setForest(resp.daily.slice(1,6))
                        })
                    }
                    forestWheater()
                
                    seticon(`https://openweathermap.org/img/wn/${response.weather[0].icon}.png`)
                    setErro(false)
                    document.querySelector('#animationCard').classList.add('animationCard')
                    })
                    .catch(()=>{
                        setLoading('')
                        setErro(true)
                        document.querySelector('#cards').style.display = 'initial'
                        document.querySelector('#city').value = ''
                        document.querySelector('#city').placeholder = 'Cidade não encontrada...'
                    })
                }
                clima()      
                }
            }
        })   
    }, [])

    return(
        <Body className="body">
            <ContainerBody>
                <Header />
                <BoxCards
                    forest={forest}
                    city={city}
                    country={country}
                    img={icon}
                    description={description}
                    temp={temp}
                    day={forest.dt}
                    humidity={humidity}
                    loading={loading}
                    erro={erro}
                    clouds={clouds}
                    wind={wind}
                    sunset={sunset}
                    sunrise={sunrise}
                />
            </ContainerBody>
            <Footer/>
        </Body>
        
    )
}

export default Home;