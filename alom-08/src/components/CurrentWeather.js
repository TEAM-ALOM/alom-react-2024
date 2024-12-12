import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
  LoadingWrapper,
  LoadingText,
} from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return (
      <LoadingWrapper>
        <LoadingText> 로딩 중입니당.. 잠시만용ㅠ </LoadingText>
      </LoadingWrapper>
    );
  }
  const currentData = formatHourlyData(weatherData);
  const currentTime = new Date();
  const closestIndex = currentData.time.findIndex(time => {
    const parsedTime = new Date(time);
    return parsedTime <= currentTime;
  });  

  return (
    <div>
      <CurrentWeatherWrapper>
        <Temperature>
          {currentData.temperature_2m[closestIndex]}°C
        </Temperature>
        <WeatherCode>
          {getWeatherDescription(currentData.weather_code[closestIndex])}
        </WeatherCode>
      </CurrentWeatherWrapper>
    </div>
  );
};

export default CurrentWeather;
