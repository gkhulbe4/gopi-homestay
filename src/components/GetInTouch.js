import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import React from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const CONTACTS = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+91 96507 65002",
    href: "tel:+919650765002",
  },
  {
    icon: Mail,
    label: "Email",
    value: "forestin2019@gmail.com",
    href: "mailto:forestin2019@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Village Panwadeokhan, near Jim Corbett Forest, Tehsil Salt, Distt. Almora, Uttarakhand 263646",
    href: "https://www.google.com/maps/place/Gopi+Homestay+%26+Restaurant",
  },
];

function GetInTouch() {
  return (
    <section id="contact" className="border-t border-line bg-paper pt-16 md:pt-24">
      <div className="shell">
        <SectionHeading eyebrow="Come stay with us" title="Plan your visit">
          Bookings, directions, or just a chat about the hills — we answer
          WhatsApp and calls ourselves, usually within a few hours.
        </SectionHeading>
      </div>

      <Reveal className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Info panel */}
          <div className="flex flex-col justify-center gap-10 bg-pine-deep px-6 py-14 text-white sm:px-10 md:px-14 lg:py-20 xl:px-24">
            <ul className="flex max-w-md flex-col gap-7">
              {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4"
                  >
                    <Icon
                      className="mt-1 h-4 w-4 shrink-0 text-white/60 transition-colors group-hover:text-white"
                      strokeWidth={1.5}
                    />
                    <span>
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/60">
                        {label}
                      </span>
                      <span className="mt-1.5 block font-display text-lg leading-snug text-white transition-colors group-hover:text-white sm:text-xl">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex max-w-md flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919650765002?text=Hi%20Gopi%20Homestay!%20I'd%20like%20to%20enquire%20about%20a%20stay."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caps flex-1 border-white/50 text-white hover:bg-white hover:text-ink"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                WhatsApp us
              </a>
              <a
                href="tel:+919650765002"
                className="btn-caps flex-1 border-white/25 text-white/85 hover:border-white/50 hover:text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                Call now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[340px] lg:min-h-full">
            <iframe
              title="Gopi Homestay location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.1962720259544!2d79.22608107553562!3d29.56889207516652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a0541791d9369%3A0x25f5e6e8e92fb596!2sGopi%20Homestay%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1753905875410!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default GetInTouch;
