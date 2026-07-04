import React from "react";
import Reveal from "./Reveal";

/**
 * Editorial section header: uppercase micro-label + serif display heading + lede.
 */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  className = "",
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="display-lg max-w-2xl text-ink text-balance">{title}</h2>
      {children && (
        <p className="max-w-xl text-sm leading-relaxed text-ink-soft md:text-[15px]">
          {children}
        </p>
      )}
    </Reveal>
  );
}
