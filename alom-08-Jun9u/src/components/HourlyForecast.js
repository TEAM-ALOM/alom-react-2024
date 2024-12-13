import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    return `${hours}시`;
  };

  const hourlyTime = weatherData.hourly.time;
  const hourlyTemperature = weatherData.hourly.temperature_2m;
  const hourlyWeatherCode = weatherData.hourly.weather_code;

  return (
    <div>
      <HourlyForecastWrapper>
        {hourlyTime.slice(0, 12).map((time, index) => (
          <HourlyItem key={index}>
            {formatTime(time)}
            <br />
            <br /> <br />
            {hourlyTemperature[index]}°C
            <br /> <br />
            {getWeatherDescription(hourlyWeatherCode[index])}
          </HourlyItem>
        ))}
      </HourlyForecastWrapper>
    </div>
  );
};

export default HourlyForecast;
