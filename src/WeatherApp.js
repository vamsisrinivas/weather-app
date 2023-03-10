import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "e38a3c3ec3c05ac4f9df1651312ae0de";

  const handleSearch = async () => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.log(error);
      setWeather(null);
    }
  };

  //time convertation

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    const seconds = `0${date.getSeconds()}`;
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.substr(-2)}:${seconds.substr(
      -2
    )} ${ampm}`;
  };

  {
    /* {if (weather) {
      return (<div>Loading...</div>)
   
          */
  }
  //high and low

  //   const temperature = Math.round(weather.main.temp);
  //   const weatherDescription = weather.weather[0].description;

  //   let Icon = WiDaySunny;
  //   if (weather.weather[0].description.includes("rain")) {
  //     Icon = WiRain;
  //   } else if (weather.weather[0].description.includes("cloud")) {
  //     Icon = WiCloud;
  //   }

  return (
    <Container>
      <Title>Weather App</Title>
      <SearchContainer>
        <Input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchContainer>

      {weather && (
        <WeatherContainer>
          <WeatherWrapper>
            {/* <Temperature>{temperature}</Temperature> */}
            <Temperature>{Math.round(weather.main.temp) / 10}°C</Temperature>
            <WeatherInfo>
              {weather.name}, {weather.sys.country}. Weather
            </WeatherInfo>
            <WeatherDescription>
              {weather.weather[0].description}
            </WeatherDescription>
          </WeatherWrapper>
          {/* <IconWrapper>
            <Icon />
          </IconWrapper> */}

          <GridContainer>
            <GridItem>
              <WeatherInfo>
                Hi/Lo:
                {Math.round(weather.main.temp_max / 10)}/
                {Math.round(weather.main.temp_min / 15)}
                °C
              </WeatherInfo>
            </GridItem>
            <GridItem>
              <WeatherInfo>Wind: {weather.wind.speed} km/hr</WeatherInfo>
            </GridItem>
            <GridItem>
              <WeatherInfo>
                Pressure:{Math.round(weather.main.pressure)} hPa
              </WeatherInfo>
            </GridItem>

            <GridItem>
              <WeatherInfo>
                Humidity: {Math.round(weather.main.humidity)}%
              </WeatherInfo>
            </GridItem>

            <GridItem>
              <WeatherInfo>
                visibility: {Math.round(weather.visibility / 1000)} Km
              </WeatherInfo>
            </GridItem>

            <GridItem>
              <WeatherInfo>Rise:{formatTime(weather.sys.sunrise)}</WeatherInfo>
            </GridItem>
            <GridItem>
              <WeatherInfo>Wind Dir: {weather.wind.deg} °deg</WeatherInfo>
            </GridItem>
            <GridItem>
              <WeatherInfo>Set:{formatTime(weather.sys.sunset)}</WeatherInfo>
            </GridItem>
          </GridContainer>
        </WeatherContainer>
      )}
    </Container>
  );
};

export default WeatherApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px solid black;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* create three columns with equal width */
  gap: 20px; /* add some space between columns */
  border-radius: 2px solid black;
`;

const Title = styled.h1`
  margin-top: 2rem;
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-right: 1rem;
  background-color: #fffc;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 15px;
  color: white;
  background-color: olive;
  border: 2px solid black;
`;

const WeatherContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
`;

const WeatherInfo = styled.span`
  font-size: 1.5rem;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;
const IconWrapper = styled.div`
  font-size: 5rem;
`;
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

// const IconWrapper = styled.div`
//   font-size: 5rem;
// `;
