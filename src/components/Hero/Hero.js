import React from "react";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Ambient video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/HeroVideoPoster.jpeg"
        aria-hidden="true"
      >
        <source src="/videos/HeroVideo.mp4" type="video/mp4" />
      </video>

      {/* Quiet cinematic scrim */}
      <div className="absolute inset-0 bg-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/55" />

      {/* Centered statement */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="hero-rise hero-title max-w-4xl text-balance [text-shadow:0_2px_50px_rgba(0,0,0,0.45)]"
          style={{ animationDelay: "0.2s" }}
        >
          Mornings that smell of pine and woodsmoke
        </h1>
        <p
          className="hero-rise mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/90 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)] sm:text-xs"
          style={{ animationDelay: "0.45s" }}
        >
          A family homestay in the Kumaon Himalaya
        </p>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to discover"
        className="hero-rise absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 text-white/80 transition-colors hover:text-white"
        style={{ animationDelay: "0.7s" }}
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.26em]">
          Scroll to discover
        </span>
        <ChevronDown className="h-4 w-4 animate-float-slow" strokeWidth={1.5} />
      </a>
    </section>
  );
}

export default Hero;
