import { FaMapMarked } from "react-icons/fa";
import { CurrentWeatherContainer, CurrentWeatherTitle, Img, ImgDescContainer, Temp, WeatherDescription } from "./CurrentWeatherStyles";

const CurrentWeather = ({ clima }) => {
  return (
    <CurrentWeatherContainer>
      <CurrentWeatherTitle><FaMapMarked /> {clima.name}</CurrentWeatherTitle>
      <ImgDescContainer>
        <Img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
        <WeatherDescription>{clima.weather[0].description}</WeatherDescription>
      </ImgDescContainer>
      <Temp>{Math.round(clima.main.temp)}°C</Temp>
    </CurrentWeatherContainer>
  )
};

export default CurrentWeather;