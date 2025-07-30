import React from "react";
import main from "../../src/assets/main.jpeg";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${main.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:grid lg:h-screen lg:place-content-center opacity-100"
    >
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1
            style={{
              textShadow:
                "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            }}
            className="text-4xl font-black text-gray-200  sm:text-6xl"
          >
            Experience Serenity in the Heart of Uttarakhand
          </h1>

          <p
            style={{
              textShadow:
                "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            }}
            className="mt-4 text-base text-pretty text-gray-200 sm:text-lg/relaxed"
          >
            Wake up to misty mornings, pine-scented air, and the symphony of
            nature at Gopi Homestay
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a className="inline-block rounded-full border border-green-700 bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-green-800 cursor-pointer">
              Discover Your Retreat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
