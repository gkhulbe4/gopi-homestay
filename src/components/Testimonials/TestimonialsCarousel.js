import React from "react";
import testimonials from "@/lib/data/testimonials";
import TestimonialCard from "./TestimonialCard";

// Split into two rows that scroll in opposite directions
const half = Math.ceil(testimonials.length / 2);
const rowA = testimonials.slice(0, half);
const rowB = testimonials.slice(half);

function Row({ items, direction }) {
  return (
    <div className="marquee-track relative overflow-hidden">
      <div className={`marquee ${direction === "right" ? "marquee-right" : "marquee-left"}`}>
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}

function TestimonialsMarquee() {
  return (
    <div className="relative flex flex-col gap-5">
      <Row items={rowA} direction="left" />
      <Row items={rowB} direction="right" />

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-pine-deep to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-pine-deep to-transparent sm:w-28" />
    </div>
  );
}

export default TestimonialsMarquee;
