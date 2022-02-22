import axios from "axios";

const apiWheaterCity = (city) => axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=42c032547a934e75ea5e3467aa1dc273`
})

export default apiWheaterCity;