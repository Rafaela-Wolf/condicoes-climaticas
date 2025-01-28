const CurrentWeather = ({ clima }) => {
  return (
    <div>
      <h3>{clima.name}</h3>
      <div>
        <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
        <p>{clima.weather[0].description}</p>
      </div>
      <p>{Math.round(clima.main.temp)}°C</p>
    </div>
  )
};

export default CurrentWeather;