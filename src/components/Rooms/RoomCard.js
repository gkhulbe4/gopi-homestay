import React from "react";
import ImagesCarousel from "./ImagesCarousel";
import { ArrowRight } from "lucide-react";

export const RoomCard = ({ title, description, price, images, amenities }) => {
  const enquiry = `https://wa.me/919650765002?text=${encodeURIComponent(
    `Hi Gopi Homestay! I'd like to check availability for the "${title}" (${price}/night).`
  )}`;

  return (
    <article className="group flex h-full flex-col">
      <div className="overflow-hidden">
        <ImagesCarousel images={images} alt={title} />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow !text-[0.62rem]">From {price} / night</p>
        <h3 className="mt-2.5 font-display text-2xl leading-snug text-ink">
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
          {description}
        </p>
        <p className="mt-4 text-xs tracking-wide text-ink-soft/90">
          {amenities.map((a) => a.label).join("  ·  ")}
        </p>
        <a
          href={enquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="link-caps mt-6 text-ink"
        >
          Enquire on WhatsApp
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
};
