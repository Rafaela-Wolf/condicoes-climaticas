import CurrentWeather from './components/CurrentWeather.jsx';
import Forecast from './components/Forecast.jsx';
import Search from './components/Search.jsx';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { MainContainer, Title, Wrapper } from './AppStyles.js';

function App() {

  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`);

      setCidade(resposta.data.name);
      setClima(resposta.data);
    });
  }, [apiKey]);

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`);

      const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`);

      setClima(respostaClima.data);

      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    } catch (error) {
      console.log("Erro ao buscar clima", error)
    }
  }

  console.log(clima);

  return (
    <Wrapper>
      <MainContainer>
        <Title>Pesquise a previsão do tempo da sua cidade</Title>
        <Search cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
        {clima && <CurrentWeather clima={clima} />}
        {previsao.length > 0 && <Forecast previsoes={previsao} />}
      </MainContainer>
    </Wrapper>
  )
}

export default App;