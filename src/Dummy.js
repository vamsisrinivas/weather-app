import styled from "styled-components";

const WeatherCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const Temperature = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
`;

const City = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 10px 0 0 0;
`;

const WeatherDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 0 0;
`;

const Dummy = ({ temperature, city, weatherDescription, weatherIcon }) => {
  return (
    <WeatherCard>
      <WeatherIcon src={weatherIcon} alt={weatherDescription} />
      <Temperature>{temperature}°</Temperature>
      <City>{city}</City>
      <WeatherDescription>{weatherDescription}</WeatherDescription>
    </WeatherCard>
  );
};

export default Dummy;
