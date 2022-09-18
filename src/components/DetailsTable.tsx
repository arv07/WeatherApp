import React from "react";
import { WeatherData } from "../interfaces/WeatherData";

export const DetailsTable = ({
  data: {
    humidity,
    feels,
    visibility,
    pressure,
    longitude,
    latitude,
    windSpeed,
  },
}: {
  data: WeatherData;
}) => {
  return (
    <table>
      <tbody className="text-gray-200">
        <tr>
          <th>Humedad:</th>
          <td id="humidity">{humidity}</td>
        </tr>
        <tr>
          <th>Grados:</th>
          <td id="feels">{feels}</td>
        </tr>
        <tr>
          <th>Visibilidad:</th>
          <td id="visibility">{visibility}</td>
        </tr>
        <tr>
          <th>Presión:</th>
          <td id="pressure">{pressure}</td>
        </tr>
        <tr>
          <th>Longitud:</th>
          <td id="longitude">{longitude}</td>
        </tr>
        <tr>
          <th>Latitud:</th>
          <td id="windspeed">{latitude}</td>
        </tr>
        <tr>
          <th>Vientos:</th>
          <td id="windspeed">{windSpeed}</td>
        </tr>
      </tbody>
    </table>
  );
};
