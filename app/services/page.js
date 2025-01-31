import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold text-center">Services</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
            <div className="w-1 h-12 bg-red-500 mr-4"></div>
            UNBEATABLE TRUCKING AND TRANSPORT SERVICES
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            ECL Parcel is the world&apos;s leading logistic service company. We have a wide experience in overland industry
            specific logistic solutions like pharmaceutical logistics, retail and automotive logistics by train or road.
          </p>
          <p className="text-lg text-gray-600">
            We bring your goods safely to worldwide destinations with our great sea freight services. We offer LLC and
            FLC shipments that are fast and effective with no delays.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/ocean-freight.jpg"
                alt="Ocean Freight"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">Ocean Freight Forwarding</h3>
              <p className="text-gray-600">
                Ocean Freight plays perhaps the most vital role in most international trading and supply chain
                solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/air-freight.jpg"
                alt="Air Freight"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">Air Freight Forwarding</h3>
              <p className="text-gray-600">
                As a leader in global air freight forwarding, we offer a complete range of air freight transportation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/road-freight.jpg"
                alt="Road Freight"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">Road Freight Forwarding</h3>
              <p className="text-gray-600">
                Cargo are transported at some stage of their journey by road. We have extensive experience that gives
                you a presence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/door-to-door.jpg"
                alt="Door to Door Delivery"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">Door to Door Delivery</h3>
              <p className="text-gray-600">
                Our expertise in inventory management and distribution lets you focus on what you do best. We&apos;ll deliver
                the parcel at your door.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/warehousing.jpg"
                alt="Warehousing"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">Warehousing</h3>
              <p className="text-gray-600">
                Managing and storing your things effectively and efficiently in our state of the art storage, have
                certified warehouses.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/ground.jpg"
                alt="Ground Transport"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">Ground Transport</h3>
              <p className="text-gray-600">
                Ground transportation depends on all cultures, no matter your needs, schedule or destination.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/india.jpg"
                alt="All over India"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">All Over India Delivery</h3>
              <p className="text-gray-600">
                Specializes in national freight forwarding of merchandise and goods by air, ocean and ground with a
                comprehensive.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none">
            <CardHeader className="p-0">
              <Image
                className="w-full rounded-lg object-cover object-center h-64"
                src="/img/cargo.jpg"
                alt="Cargo Service"
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent className="pt-6 px-0">
              <h3 className="text-xl font-bold mb-2">Cargo Service</h3>
              <p className="text-gray-600">
                Delivery of any goods from one place to another. We are ready to meet your cost and service
                requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

