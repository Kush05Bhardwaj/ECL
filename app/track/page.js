import { Card } from "@/components/ui/card"
import TrackingForm from "@/components/tracking-form"

export default function TrackPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold text-center">Track Shipment</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="p-8">
            <TrackingForm />
          </Card>
        </div>
      </div>
    </div>
  )
}

