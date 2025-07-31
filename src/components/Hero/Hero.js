import React from "react";
import main from "../../assets/main.jpeg";
import HeroButton from "./HeroButton";

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${main.src})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
          Experience Serenity in the Heart of Uttarakhand
        </h1>

        <p className="mt-4 text-lg sm:text-xl font-medium drop-shadow-md">
          Wake up to misty mornings, pine-scented air, and the symphony of
          nature at Gopi Homestay
        </p>

        <HeroButton />
      </div>
    </section>
  );
}

export default Hero;
