"use client";

import React, { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import logo from "../../public/images/logo.png";

const NAV = [
  { id: "about", label: "The Homestay" },
  { id: "rooms", label: "Rooms" },
  { id: "experiences", label: "Experiences" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const light = !isScrolled; // over the hero video

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? "border-b border-line bg-paper/95 text-ink backdrop-blur-md"
          : "border-b border-white/20 bg-transparent text-white"
      }`}
    >
      {/* top row: menu / logo / book */}
      <div className="shell grid grid-cols-3 items-center py-3">
        <div className="flex justify-start">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="link-caps cursor-pointer transition-opacity hover:opacity-70"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
                <span className="hidden sm:inline">Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 border-r border-line bg-paper p-8"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-10 flex h-full flex-col">
                <span className="eyebrow">Gopi Homestay</span>
                <nav className="mt-8 flex flex-col gap-5">
                  {NAV.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center justify-between text-left font-display text-2xl text-ink transition-colors hover:text-pine"
                    >
                      {item.label}
                      <ArrowRight
                        className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    </button>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 border-t border-line pt-6 pb-4">
                  <a
                    href="tel:+919650765002"
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                  >
                    +91 96507 65002
                  </a>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="btn-caps w-full cursor-pointer text-ink hover:bg-ink hover:text-paper"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <button
          onClick={() => scrollToSection("hero")}
          aria-label="Gopi Homestay — back to top"
          className="flex justify-center"
        >
          <img
            src={logo.src}
            alt="Gopi Homestay"
            className={`h-10 w-auto transition-[filter] duration-500 md:h-11 ${
              light ? "brightness-0 invert" : ""
            }`}
          />
        </button>

        <div className="flex justify-end">
          <button
            onClick={() => scrollToSection("contact")}
            className={`btn-caps cursor-pointer !px-4 !py-2.5 sm:!px-6 ${
              light
                ? "border-white/60 text-white hover:bg-white hover:text-ink"
                : "border-ink/40 text-ink hover:bg-ink hover:text-paper"
            }`}
          >
            Book now
          </button>
        </div>
      </div>

      {/* nav row — desktop only */}
      <nav
        className={`hidden items-center justify-center gap-10 border-t py-3 md:flex ${
          light ? "border-white/20" : "border-line"
        }`}
      >
        {NAV.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="cursor-pointer text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
