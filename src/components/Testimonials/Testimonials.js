import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          What Our Guests Say
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Real experiences from travelers who found their perfect mountain
          retreat.
        </p>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

export default Testimonials;
