"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import logo from "../assets/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5 px-4 md:px-20">
        <div className="w-34">
          <img src={logo.src} alt="logo" className="w-full h-full" />
        </div>

        <nav
          className={`hidden md:flex items-center gap-8 ${
            isScrolled ? "text-gray-800" : "text-white "
          } text-sm font-medium`}
        >
          <button
            className="hover:underline transition-all ease-in-out duration-300 cursor-pointer"
            onClick={() => scrollToSection("rooms")}
          >
            Rooms
          </button>
          <button
            className="hover:underline transition-all ease-in-out duration-300 cursor-pointer"
            onClick={() => scrollToSection("gallery")}
          >
            Gallery
          </button>
          <button
            className="hover:underline transition-all ease-in-out duration-300 cursor-pointer"
            onClick={() => scrollToSection("reviews")}
          >
            Reviews
          </button>
          <button
            className="hover:underline transition-all ease-in-out duration-300 cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button>
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 bg-gray-50">
              <nav className="flex flex-col gap-2 text-black">
                <button
                  className="font-semibold bg-white px-4 py-2 rounded-md border border-gray-300"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
                <button
                  className="font-semibold bg-white px-4 py-2 rounded-md border border-gray-300"
                  onClick={() => scrollToSection("rooms")}
                >
                  Rooms
                </button>
                <button
                  className="font-semibold bg-white px-4 py-2 rounded-md border border-gray-300"
                  onClick={() => scrollToSection("gallery")}
                >
                  Gallery
                </button>
                <button
                  className="font-semibold bg-white px-4 py-2 rounded-md border border-gray-300"
                  onClick={() => scrollToSection("reviews")}
                >
                  Reviews
                </button>
                <button
                  className="font-semibold bg-white px-4 py-2 rounded-md border border-gray-300"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
