const API_KEY = "333f251ff5d11aab39d6198e3c793cb4";

export const getWeatherByCoords = async (
  LAT: number,
  LON: number
): Promise<any> => {
  const API_COORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

  const response = await fetch(API_COORDS);
  const data = await response.json();
  console.log(data);

  return data;
};

export const getWeatherBySearch = async (CITY: string): Promise<any> => {
  const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

  const response = await fetch(API_CITY);
  const responseData = await response.json();

  //console.log(response);
  //console.log(responseData);

  return responseData;
};
