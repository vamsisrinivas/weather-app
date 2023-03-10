import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";
import styled from "styled-components";

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Temperature = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const WeatherDescription = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  font-size: 5rem;
`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
      );
      setWeatherData(response.data);
    };
    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = Math.round(weatherData.main.temp);
  const weatherDescription = weatherData.weather[0].description;
  let Icon = WiDaySunny;
  if (weatherDescription.includes("rain")) {
    Icon = WiRain;
  } else if (weatherDescription.includes("cloud")) {
    Icon = WiCloud;
  }

  return (
    <WeatherWrapper>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Temperature>{temperature}°C</Temperature>
      <WeatherDescription>{weatherDescription}</WeatherDescription>
    </WeatherWrapper>
  );
};

export default Weather;
