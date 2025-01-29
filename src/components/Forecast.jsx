import { ForecastContainer, ForecastDescription, ForecastImg, ForecastItem, ForecastList, ForecastTemp, ForecastTitle } from "./ForecastStyles";

const Forecast = ({ previsoes }) => {
  return (
    <ForecastContainer>
      <ForecastTitle>Previsão para as próximas horas</ForecastTitle>
      <ForecastList>
      {previsoes.map((previsao) => (
          <ForecastItem key={previsao.dt}>
            <ForecastImg
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
            />
            <ForecastTemp>{Math.round(previsao.main.temp)}°C</ForecastTemp>
            <ForecastDescription>{previsao.weather[0].description}</ForecastDescription>
          </ForecastItem>
        ))}
      </ForecastList>
    </ForecastContainer>
  );
};

export default Forecast;
