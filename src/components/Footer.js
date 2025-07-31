import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 dark:text-teal-300">
          <div className="w-max h-max flex justify-center items-center">
            <Image src="/images/logo.png" alt="logo" height={160} width={160} />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-xl font-semibold leading-relaxed text-gray-500 dark:text-gray-400">
          Your gateway to the serene beauty of Uttarakhand
        </p>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li className="p-3 rounded-full border border-gray-300">
            <a
              href="https://www.facebook.com/p/Gopi-Homestay-100064131217534/"
              rel="noreferrer"
              target="_blank"
              className="text-[#1877F2] hover:text-[#145dbf] transition "
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="w-6 h-6" />
            </a>
          </li>

          <li className="p-3 rounded-full border border-gray-300">
            <a
              href="https://www.facebook.com/p/Gopi-Homestay-100064131217534/"
              rel="noreferrer"
              target="_blank"
              className="text-[#E1306C] hover:text-[#c0265b] transition"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-lg text-gray-700 font-normal text-center py-5">
        © 2025 Gopi Homestay. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
