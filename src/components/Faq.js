"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How do I get to Gopi Homestay?",
    a: "We're in Village Panwadeokhan, near the Jim Corbett forest in Almora district. Once you book, we share exact directions for the last stretch and can help arrange a local pickup — just ask on WhatsApp.",
  },
  {
    q: "Are meals included?",
    a: "Yes. Home-cooked Kumaoni meals are part of the stay — simple, fresh, mostly vegetarian, cooked with what the hills provide. Let us know of any dietary needs and we'll happily adjust.",
  },
  {
    q: "Is it suitable for families and older guests?",
    a: "Absolutely. Families, couples and parents all feel at home here. There's a short walk up to the house — tell us in advance and we'll make the arrival as easy as possible.",
  },
  {
    q: "Do you have Wi-Fi and hot water?",
    a: "Hot water, yes. Wi-Fi is limited — you're deep in the mountains, and honestly that's part of the charm. Mobile signal works for calls and messages.",
  },
  {
    q: "Can you help plan treks or a Jim Corbett safari?",
    a: "Yes. We guide local treks ourselves and can arrange a Jim Corbett safari and other day trips. Mention your dates and interests and we'll build a loose plan with you.",
  },
  {
    q: "How do I book, and is a deposit needed?",
    a: "The quickest way is WhatsApp or a call. A small advance confirms your dates, and we'll walk you through the rest personally.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg text-ink md:text-[1.35rem]">
          {item.q}
        </span>
        <Plus
          strokeWidth={1.2}
          className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-[15px] leading-relaxed text-ink-soft">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t border-line bg-paper py-16 md:py-24">
      <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading align="left" eyebrow="Good to know" title="Questions, answered">
          Anything else on your mind? Message us — we reply quickly and love
          talking about the hills.
        </SectionHeading>

        <Reveal>
          <div>
            {FAQS.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Faq;
