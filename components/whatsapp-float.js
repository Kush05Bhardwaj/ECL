import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/9625930612" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappIcon size={24} />
    </a>
  )
}

