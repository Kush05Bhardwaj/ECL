"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Award, Truck, Shield, Clock, Globe } from "lucide-react"

const partners = [
  { name: "Delhivery", logo: "/img/delhivery.png" },
  { name: "Xpressbees", logo: "/img/xpressbees.png"},
  { name: "DTDC", logo: "/img/bluedart.png" },
  { name: "Delhivery", logo: "/img/ats-amazon.png" },
  { name: "BlueDart", logo: "/img/ecom.png" },
]

export default function Home() {
  const [currentPartner, setCurrentPartner] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/img/slide3.jpg" alt="Logistics Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            WE CARE ABOUT
            <br />
            YOUR CARGO
          </h1>
          <div className="flex gap-4 justify-center">
            <Link href="/about">
              <Button
                variant="outline"
                className="text-black bg-white hover:text-white hover:bg-black transition-colors border-none"
              >
                About us
              </Button>
            </Link>
            <Link href="/track">
              <Button className="bg-blue-600 hover:bg-blue-700">Track Shipment</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to ECL Parcel</h2>
            <p className="text-lg text-gray-600 mb-8">
              ECL Parcel is an e-commerce focused logistics service provider, providing reliable and fast logistics
              solutions to its clients. Our global network reach, strong technology platform and last mile management
              system makes us one of the most trusted e-commerce logistics solutions provider in India.
            </p>
            <p className="text-lg text-gray-600">
              We successfully deliver 40,000+ shipments every day, and this number is scaling exponentially. Your search
              for reliable logistics and supply chain solutions provider ends with us.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mt-4">Our Logistics Excellence</h2>
            <p className="text-lg text-gray-600 mt-4">
              Discover how our features can transform your logistics experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Carrier Network</h3>
              <p className="text-gray-600">
                Access a vast network of carriers for optimal shipping solutions tailored to your needs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Shipments</h3>
              <p className="text-gray-600">
                Advanced tracking and insurance options to ensure your packages arrive safely.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer service to assist you with any queries or concerns.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
              <p className="text-gray-600">
                Rapid response logistics solutions for time-sensitive and critical shipments.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Extensive international shipping capabilities to connect you with markets worldwide.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Leading Service</h3>
              <p className="text-gray-600">
                Consistently recognized for our exceptional logistics solutions and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Delivery Partners</h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 relative">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    index === currentPartner ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={80}
                    objectFit="contain"
                    layout="responsive"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Get in touch with us for a personalized quote tailored to your logistics needs.
            </p>
            <div className="flex mt-6 justify-center">
              <Link href="/contact">
                <Button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

