import Image from "next/image";
import React from "react";

function SceneCard({ img, caption, className = "", priority = false }) {
  return (
    <figure
      className={`group relative block h-full w-full overflow-hidden bg-ink ${className}`}
    >
      <Image
        alt={caption || "A scene from Gopi Homestay, Uttarakhand"}
        src={img}
        fill
        priority={priority}
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-3.5">
        <p className="translate-y-1 text-sm font-medium leading-snug text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}

export default SceneCard;
