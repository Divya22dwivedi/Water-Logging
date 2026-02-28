
const fetch = require("node-fetch");
const getLiveRain = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather API failed");

  const data = await res.json();
  const weatherMain = data.weather?.[0] ?? { main: null, description: null };

  return {
    rain_1h: data?.rain?.["1h"] ?? 0,
    rain_3h: data?.rain?.["3h"] ?? 0,
    weather: weatherMain.main,
    description: weatherMain.description,
    timestamp: Date.now()
  };
};

module.exports = {
  getLiveRain,
};