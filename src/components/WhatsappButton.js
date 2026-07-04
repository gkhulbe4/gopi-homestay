import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919650765002?text=Hi%20Gopi%20Homestay!%20I'd%20like%20to%20enquire%20about%20a%20stay."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gopi Homestay on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-black/20 transition-all hover:gap-2 hover:pr-5"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
