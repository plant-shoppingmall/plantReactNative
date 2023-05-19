import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '1bd597b94d270523eaab4f8cd3b234af';
  const LOCATION = 'Seoul,kr';

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('날씨 정보를 가져오는데 실패했습니다:', error);
    }
  };
  let weatherText = '';
  let weatherId = weatherData ? weatherData.weather[0].id : '';

  const result = (id) => {
    if (id >= 300 && id < 400) {
      weatherText = '이슬비가 내리는 날';
    } else if (id >= 500 && id < 600) {
      weatherText = '비가 내리는 날';
    } else if (id >= 600 && id < 700) {
      weatherText = '눈이 내리는 날';
    } else if (id >= 700 && id < 800) {
      weatherText = '안개낀 날';
    } else if (id === 800) {
      weatherText = '화창한 날';
    } else if (id > 800 && id < 900) {
      weatherText = '구름낀 날';
    }
    return weatherText;
  };

  return (
    <View style={styles.container}>
      {weatherData ? (
        <>
          <Text style={styles.text}>도시: {weatherData.name}</Text>
          <Text style={styles.text}>온도: {weatherData.main.temp}°C</Text>
          <Text style={styles.text}>날씨: {result(weatherId)}</Text>
        </>
      ) : (
        <Text style={styles.text}>날씨 정보를 불러오는 중</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 18,
    margin: 5,
  },
});

export default Weather;
