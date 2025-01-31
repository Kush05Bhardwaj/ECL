import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">ABOUT ECL PARCEL</h2>
            <p className="mb-4">
              Ecl Parcel is an e-commerce focused logistics service provider, providing reliable and fast logistics
              solutions to its clients.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/ECL-Parcel-100063837199187/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://x.com/eclparcel" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">QUICK LINKS</h2>
            <nav className="list-none space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-white">
                  Track
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 py-4">
          <p className="text-sm">Copyright © {new Date().getFullYear()} ECL Parcel, All Right Reserved</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-4 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  )
}

