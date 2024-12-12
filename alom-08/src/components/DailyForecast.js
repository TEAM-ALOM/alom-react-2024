import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);
  
  const dateFormat = dailyData.time.map(date => {
    const [year, month, day] = date.split('-');
    const dateObj = new Date(year, month - 1, day);
  
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    const dayName = dayNames[dateObj.getDay()];
  
    return `${parseInt(month)}월 ${parseInt(day)}일 (${dayName})`;
  });

  const daily = dailyData.time.map((_, index) => [dateFormat[index], getWeatherDescription(dailyData.weather_code[index]), dailyData.temperature_2m_max[index]+"°C"]);
  
  return (
    <DailyForecastWrapper>
      {daily.map((row, index) => (
        <DailyItem key={index}>
          {row.map((item, i) => (
            <span key={i}>
              {item}
            </span>
          ))}
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;