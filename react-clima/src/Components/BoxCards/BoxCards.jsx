import React, { useState, useEffect} from "react";
import TempoCity from "../../Components/TimeCity/TimeCity";
import CardErro from "../../Components/CardErro/CardErro";
import CardBsb from "../../Components/CardBsb/CardBsb";
import carregando from '../../Images/loading.gif'
import { BoxCard, BoxLoading, Loading, Cards, AnimationCard } from "./BoxCardsStyle";
import apiWheaterCity from "../../api/apiWheaterCity";
import apiForest from "../../api/apiForest";

function BoxCards(){
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
            setErro(false)
            document.querySelector('#city-wheater').style.display = 'flex'
             
            async function clima(){
                await apiWheaterCity(city).get().then(res => {
                const response = res.data
                setLoading('')
                document.querySelector('#cards').style.display = 'initial'
                document.querySelector('#city').placeholder = 'Busque por alguma cidade...'
                setTemp(response.main.temp.toFixed(0))
                setMaxtemp(response.main.temp_max.toFixed(0))
                setMinTemp(response.main.temp_min.toFixed(0))
                setCity(response.name)
                setCountry(response.sys.country)
                setDescription(response.weather[0].description)
                async function forestWheater(){
                    await apiForest(response).get().then(res => {
                        const resp = res.data
                        setForest(resp.daily.slice(1,6))
                    })
                }
                forestWheater()
               
                seticon(`http://openweathermap.org/img/wn/${response.weather[0].icon}.png`)
                setErro(false)
                document.querySelector('#animationCard').classList.add('animationCard')
                })
                .catch(()=>{
                    setLoading('')
                    setErro(true)
                    document.querySelector('#cards').style.display = 'initial'
                    document.querySelector('#city').placeholder = 'Cidade não encontrada...'
                })
            }
            clima()      
            }
        })   
    }, [])
    return(
        <BoxCard>
            <CardBsb forest={forest}/>
            <BoxLoading>
                <Loading src={loading}/>
            </BoxLoading>
            <Cards id="cards">
                <AnimationCard id="animationCard">
                    {erro ? <CardErro/> : <TempoCity
                        city={city}
                        country={country}
                        img={icon}
                        description={description}
                        temp={temp}
                        forest={forest}
                        day={forest.dt}
                    />}
                </AnimationCard>
            </Cards>
        </BoxCard>
    )
}
export default BoxCards;