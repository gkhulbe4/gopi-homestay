import React from "react";
import Reveal from "./Reveal";

const EXPERIENCES = [
  {
    tag: "At the homestay",
    title: "Bonfire evenings",
    text: "Gather around the fire after dark — warmth, song and long conversations under the stars.",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "In the forest",
    title: "Guided forest walks",
    text: "Trails from our doorstep to ridgelines, streams and a waterfall only the village knows.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "From our kitchen",
    title: "Kumaoni home cooking",
    text: "Daal, chawal and hill vegetables cooked on a wood fire, the way it has always been done.",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "In the forest",
    title: "Birdsong mornings",
    text: "The slopes wake with Himalayan birds. Carry chai to the porch and just listen.",
    img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Beyond the village",
    title: "Jim Corbett safari",
    text: "India's oldest national park is close by. We help plan the drive and the safari.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "After dark",
    title: "Skies full of stars",
    text: "No city glow up here — on clear nights the Milky Way stretches across the valley.",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80",
  },
];

function Experiences() {
  return (
    <section
      id="experiences"
      className="border-t border-line bg-paper py-16 md:py-24"
    >
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.7fr] lg:gap-16">
        {/* Sticky editorial intro */}
        <Reveal className="flex flex-col gap-5 self-start lg:sticky lg:top-36">
          <span className="eyebrow">Things to do</span>
          <h2 className="display-lg text-ink text-balance">
            Days that fill themselves
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:text-[15px]">
            Not a checklist of activities — just the natural rhythm of the
            hills, and us to help you find it. A few of the moments guests
            remember most.
          </p>
        </Reveal>

        {/* Horizontal editorial rail */}
        <Reveal className="relative min-w-0" delay={120}>
          <div className="no-scrollbar -mx-3 flex snap-x snap-mandatory gap-6 overflow-x-auto px-3 pb-2 md:-mx-4 md:px-4">
            {EXPERIENCES.map((exp) => (
              <figure
                key={exp.title}
                className="group w-[240px] shrink-0 snap-start sm:w-[280px]"
              >
                <div className="overflow-hidden bg-paper-2">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="pt-4">
                  <p className="eyebrow !text-[0.6rem]">{exp.tag}</p>
                  <h3 className="mt-2 font-display text-xl leading-snug text-ink">
                    {exp.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                    {exp.text}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          {/* right edge fade — flush with the rail's real edge (rail bleeds via -mx) */}
          <div className="pointer-events-none absolute inset-y-0 -right-3 hidden w-40 bg-gradient-to-l from-paper via-paper/70 to-transparent md:-right-4 md:block xl:w-56" />
        </Reveal>
      </div>
    </section>
  );
}

export default Experiences;
