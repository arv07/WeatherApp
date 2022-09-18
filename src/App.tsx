import { FormEvent, useEffect, useState } from "react"
import { getWeatherByCoords, getWeatherBySearch } from "./api/fetchWeather"
import { WeatherContainer } from "./components/WeatherContainer"
import { SearchBox } from "./components/SearchBox"

function App() {

  const [fetchData, setFetchData] = useState(null)
  const [error, setError] = useState("")


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchData(data);
      } catch (err) {
        setError("Revisar conexión a internet 😒")
      }

    })
  },[])

  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("")

    try {

      const data = await getWeatherBySearch(CITY);

      if(data === "404"){
        setError('Ciudad no encontrada')
      }else if(data === '400'){
        setError("Ingrese una ciudad")
        //console.log(data);
        
      }
      else{
        setFetchData(data);
      }
      
    } catch (err) {
      setError("Revisar conexión")
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch}/>
     <WeatherContainer fetchData={fetchData} error={error}/>
    </div>
  )
}

export default App
