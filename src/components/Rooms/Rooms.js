import React from "react";
import rooms from "@/lib/data/roomsData";
import { RoomCard } from "./RoomCard";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { ArrowRight } from "lucide-react";

function Rooms() {
  return (
    <section id="rooms" className="border-t border-line bg-paper py-16 md:py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Where you'll rest"
            title="Rooms with a view of the valley"
          >
            Three simple, warm rooms — clean beds, hot water and big windows
            onto the pines. Nothing you don&apos;t need.
          </SectionHeading>
          <a
            href="#contact"
            className="link-caps hidden shrink-0 text-ink md:inline-flex"
          >
            Check availability
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3">
          {rooms.map((room, index) => (
            <Reveal key={room.title} delay={index * 100}>
              <RoomCard {...room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
