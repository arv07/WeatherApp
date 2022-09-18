import React from "react";
import { WeatherData } from "../interfaces/WeatherData";

export const DegreeSection = ({
  data: { temperature, description, icon },
}: {
  data: WeatherData;
}) => {
  return (
    <section className="text-5xl font-bold text-white ">
      <span className="text-yellow-500 mx-5" id="temperature">
        {temperature}
      </span>
      C
      <section>
        <img src={icon} id="iconImg" alt="" />
      </section>
      <section
        className="font-bold uppercase text-xl text-white mb-6"
        id="description"
      >
        {description}
      </section>
    </section>
  );
};
