import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import img1 from "../public/Waleed.jpg";
import BackgroundCircles from "./backgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello this is Abdelrahman",
      "As a dreamworld it's impossible possible",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative  rounded-full h-32 w-32  mx-auto object-cover shadow-2xl"
        src={img1}
        alt="/"
      />
      <div className="z-10">
        <h2 className=" uppercase text-sm text-[#1A1626] pb-2 tracking-[15px]">
          Software engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 font-Sono">
          <span>{text}</span>
          <Cursor cursorColor="#0C7BF6" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
