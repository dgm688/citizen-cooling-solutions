import Icon from "./Icon";
import { company } from "@/lib/site";

export default function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Citizen Cooling Solutions, I would like to enquire about your services / products."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 cursor-pointer"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">WhatsApp Us</span>
    </a>
  );
}
