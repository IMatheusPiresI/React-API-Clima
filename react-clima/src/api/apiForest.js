import axios from "axios";

const apiForest = (response) => axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&lang=pt_br&units=metric&exclude=current,minutely,hourly,alerts&appid=42c032547a934e75ea5e3467aa1dc273`
})

export default apiForest;