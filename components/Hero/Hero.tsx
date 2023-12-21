import React from "react";
import { IHero } from "./Hero.interface";
import Image from "next/image";

const Hero = ({ title }: IHero) => {
  return (
    <div className="hero relative">
      <Image
        src="/images/hero/hero.jpeg"
        alt="Hero background"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="min-h-4/6-screen flex justify-center items-center w-full relative z-10 bg-black/50">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
