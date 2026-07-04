import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import SectionHeading from "../SectionHeading";
import testimonials from "@/lib/data/testimonials";
import { Star } from "lucide-react";

function Testimonials() {
  const count = testimonials.length;
  const avg =
    testimonials.reduce((sum, t) => sum + t.stars, 0) / Math.max(count, 1);

  return (
    <section id="reviews" className="bg-pine-deep py-16 text-white md:py-24">
      <div className="shell flex flex-col items-center gap-7">
        <SectionHeading
          eyebrow="Guest stories"
          title="A little like being adopted by a mountain family"
          className="[&_.eyebrow]:!text-white/70 [&_h2]:text-white [&_p]:text-white/80"
        >
          Real words from travellers who found their slow mornings here.
        </SectionHeading>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(avg) ? "fill-amber text-amber" : "text-white/25"
                }`}
              />
            ))}
          </div>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/75">
            {avg.toFixed(1)} / 5 · {count} guest stays
          </span>
        </div>
      </div>

      <div className="mt-12">
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

export default Testimonials;
