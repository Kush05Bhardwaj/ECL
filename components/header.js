"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <Image
            src={isScrolled ? "/img/ECL-logo-wide.png" : "/img/ECL-logo-wide-white.png"}
            alt="ECL Logo"
            width={150}
            height={50}
          />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className={`mr-5 hover:text-gray-300 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`mr-5 hover:text-gray-300 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`mr-5 hover:text-gray-300 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            Services
          </Link>
          <Link
            href="/track"
            className={`mr-5 hover:text-gray-300 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            Track
          </Link>
        </nav>
        <Button
          asChild
          className={`${
            isScrolled ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-white text-blue-600 hover:bg-gray-100"
          }`}
        >
          <Link href="/contact" className="inline-flex items-center">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </Button>
      </div>
    </header>
  )
}

