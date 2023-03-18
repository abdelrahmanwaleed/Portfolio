import React from "react";
import Image from "next/image";
import wimg from "../images/weatherapp.png";

const Weathercard = () => {
  return (
    <div className="w-60 p-2 bg-blue-200 rounded-2xl shadow-xl">
      <Image
        className="h-40 object-cover rounded-xl"
        src={wimg}
        alt="weather"
      ></Image>
      <div className="p-2">
        <h2 className="font-bold text-lg text-blue-900">Weather App</h2>
        <p>
          Its a responsive weather app made with: React.js API use weather and
          geo
        </p>
      </div>
    </div>
  );
};

export default Weathercard;
