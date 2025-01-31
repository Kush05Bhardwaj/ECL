import Image from "next/image"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold text-center">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">WHO WE ARE</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/img/ecl.png"
                alt="About ECL Logistics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                ECL Parcel is an e-commerce focused logistics service provider, delivering reliable and fast logistics
                solutions across the globe. With years of experience in the industry, we have built a reputation for
                excellence in shipping and supply chain management.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to simplify logistics for businesses of all sizes, providing seamless integration,
                real-time tracking, and exceptional customer service. We understand the unique challenges of modern
                e-commerce and offer tailored solutions to meet your specific needs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Successful Deliveries</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">On Time Delivery </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Reliability</h4>
                <p className="text-gray-600">
                  We pride ourselves on consistent, dependable service that our clients can count on every time.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Innovation</h4>
                <p className="text-gray-600">
                  Embracing the latest technology to provide cutting-edge logistics solutions.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Customer Focus</h4>
                <p className="text-gray-600">
                  Your success is our priority. We&#39;re dedicated to providing exceptional service.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Global Reach</h4>
                <p className="text-gray-600">
                  Connected worldwide, delivering locally with understanding of regional needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

