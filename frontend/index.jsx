//index.jsx
import React, {useState} from  'react';
import axios from 'axios';
const App = () => {
    const [city, Setcity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = 'YOUR_API_KEY';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const getWeatherData = async () => {
        try {
          const response = await axios.get(API_URL, {
            params: {
              q: city,
              appid: API_KEY,
              units: 'metric',
            },
          });
          setWeatherData(response.data);
        } catch (error) {
          console.error('Erro ao obter dados do clima:', error);
        }
      };    
}
return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeatherData}>Obter Previsão</button>

      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Condição: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
export default App;