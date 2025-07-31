"use client";
import React from "react";

function HeroButton() {
  const handleScroll = () => {
    window.scrollTo({
      top: 710,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={handleScroll}
        className="rounded-full bg-green-700 px-6 py-3 text-sm sm:text-base font-semibold shadow-md hover:bg-green-800 transition-colors cursor-pointer"
      >
        Discover Your Retreat
      </button>
    </div>
  );
}

export default HeroButton;
