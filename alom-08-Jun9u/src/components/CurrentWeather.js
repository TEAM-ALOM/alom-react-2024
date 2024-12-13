import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>Loading!</div>;
  }
  const currentTemp = weatherData.hourly.temperature_2m[0];
  const currentWeatherCode = weatherData.hourly.weather_code[0];

  return (
    <div>
      <CurrentWeatherWrapper>
        <Temperature>{currentTemp}℃</Temperature>
        <br />
        <getWeatherDescription>
          {getWeatherDescription(currentWeatherCode)}
        </getWeatherDescription>
      </CurrentWeatherWrapper>
    </div>
  );
};

export default CurrentWeather;
