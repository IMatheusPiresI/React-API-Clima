import axios from 'axios'

const apiBsb = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?q=Brasília&lang=pt_br&units=metric&appid=42c032547a934e75ea5e3467aa1dc273"
})

export default apiBsb;