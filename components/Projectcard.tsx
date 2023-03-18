import React from "react";
import Image, { StaticImageData } from "next/image";
interface Props {
  title: string;
  description: string;
  imgpro: string;
}
const Projectcard = ({ title, description, imgpro }: Props) => {
  return (
    <div>
      <div className="w-72 p-2 bg-blue-300 rounded-2xl shadow-xl">
        <Image
          src={imgpro}
          alt=""
          className="h-48 object-cover rounded-xl"
        ></Image>
        <div className="p-2">
          <h2 className="font-bold text-blue-900 text-xl">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
