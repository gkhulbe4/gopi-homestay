import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="bg-pine-deep text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center gap-7 px-6 py-16 sm:px-10 md:px-14 lg:py-24 xl:px-24">
          <span className="eyebrow !text-amber">Our story</span>
          <h2 className="display-lg max-w-xl text-balance text-white">
            A home in the hills, run by the family that lives here
          </h2>
          <div className="flex max-w-md flex-col gap-4 text-[15px] leading-relaxed text-white/85">
            <p>
              Gopi Homestay isn&apos;t a hotel — it&apos;s our house in Village
              Panwadeokhan, opened to travellers who want the mountains the way
              we know them. Wake to birdsong, eat what grows on these slopes,
              and spend evenings around the fire.
            </p>
            <p>
              We cook the food we grew up on and point you to trails only
              locals know. You arrive a guest and leave, most say, like family.
            </p>
          </div>
          <a
            href="#rooms"
            className="btn-caps mt-2 w-fit border-white/80 text-white hover:bg-white hover:text-ink"
          >
            Discover the rooms
          </a>
        </Reveal>

        <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-full">
          <Image
            src="/images/main.jpeg"
            alt="Gopi Homestay in the pine hills of Almora, Uttarakhand"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
