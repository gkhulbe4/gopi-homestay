import React from "react";
import { Star } from "lucide-react";

function TestimonialCard({ name, stars, review }) {
  return (
    <figure className="flex h-full w-[320px] shrink-0 flex-col justify-between gap-5 border border-white/10 bg-ink/60 p-6 text-left sm:w-[420px] sm:p-7">
      <blockquote className="line-clamp-4 font-display text-lg leading-relaxed text-white/90 sm:text-xl">
        “{review}”
      </blockquote>

      <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60">
          {name}
        </p>
        <div className="flex gap-0.5">
          {Array.from({ length: stars }).map((_, idx) => (
            <Star key={idx} className="h-3 w-3 fill-amber text-amber" />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
