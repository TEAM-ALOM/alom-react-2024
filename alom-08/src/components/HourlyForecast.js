import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);
  const hourlyFormat = hourlyData.time.map((dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    return `${hours}시`;
  });

  const hourlyForecast = hourlyData.time.slice(0, 24).map((_, index) => [
    hourlyFormat[index],
    hourlyData.temperature_2m[index] + "°C",
    getWeatherDescription(hourlyData.weather_code[index]),
  ]);

  return (
    <HourlyForecastWrapper>
      {hourlyForecast.map((row, rowIndex) => (
        <HourlyItem key={rowIndex}>
          <div>{row[0]}</div>
          <div>{row[1]}</div>
          <div>{row[2]}</div>
        </HourlyItem>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;