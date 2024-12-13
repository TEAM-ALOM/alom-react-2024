import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  const dailyTime = weatherData.daily.time;
  const dailyTemperature = weatherData.daily.temperature_2m_max;
  const dailyWeatherCode = weatherData.daily.weather_code;

  const formatDate = (time) => {
    const date = new Date(time);

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = date.toLocaleString("ko-KR", { weekday: "short" });
    return `${month}월 ${day}일 (${weekday})`;
  };

  return (
    <div>
      <DailyForecastWrapper>
        {dailyTime.slice(0, 7).map((time, index) => (
          <DailyItem key={index}>
            <div>{formatDate(time)}</div>
            <div>{getWeatherDescription(dailyWeatherCode[index])}</div>
            <div>{dailyTemperature[index]}°C</div>
          </DailyItem>
        ))}
      </DailyForecastWrapper>
    </div>
  );
};

export default DailyForecast;
