import { MessageCircleMore } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+919650765002"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition-all"
    >
      <MessageCircleMore className="w-6 h-6" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
