import React from "react";
import { Facebook, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";

const NAV = [
  { id: "about", label: "The Homestay" },
  { id: "rooms", label: "Rooms" },
  { id: "experiences", label: "Experiences" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div>
          <Image
            src="/images/logo.png"
            alt="Gopi Homestay"
            height={120}
            width={120}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-xs font-display text-2xl leading-snug text-white">
            Your gateway to the serene beauty of the Kumaon Himalaya.
          </p>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/40">
            Explore
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/40">
            Reach us
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed">
            <li>Village Panwadeokhan, Distt. Almora, Uttarakhand 263646</li>
            <li>
              <a href="tel:+919650765002" className="transition-colors hover:text-white">
                +91 96507 65002
              </a>
            </li>
            <li>
              <a
                href="mailto:forestin2019@gmail.com"
                className="transition-colors hover:text-white"
              >
                forestin2019@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/p/Gopi-Homestay-100064131217534/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gopi Homestay on Facebook"
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-white/60 hover:text-white"
            >
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/919650765002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-white/60 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:forestin2019@gmail.com"
              aria-label="Email Gopi Homestay"
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-white/60 hover:text-white"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="shell py-6 text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/40">
          © {year} Gopi Homestay · All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
