"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Package,
  Truck,
  Circle,
  CheckCircle,
  RotateCcw,
  X,
  AlertTriangle,
  PackageCheck,
  PackageOpen,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Status Icon Function
const StatusIcon = ({ status }) => {
  if (!status) return <Package className="h-5 w-5 text-gray-500" />
  const lowerStatus = status.toLowerCase()

  if (lowerStatus.includes("pending") || lowerStatus.includes("on process")) {
    return <Circle className="h-5 w-5 text-yellow-500" />
  }
  if (lowerStatus.includes("delivered")) {
    return <CheckCircle className="h-5 w-5 text-green-500" />
  }
  if (lowerStatus.includes("transit") || lowerStatus.includes("dispatched")) {
    return <Truck className="h-5 w-5 text-blue-500" />
  }
  if (lowerStatus.includes("rts") || lowerStatus.includes("rto")) {
    return <RotateCcw className="h-5 w-5 text-orange-500" />
  }
  if (lowerStatus.includes("cancelled") || lowerStatus.includes("failed") || lowerStatus.includes("lost")) {
    return <X className="h-5 w-5 text-red-500" />
  }
  if (lowerStatus.includes("ndr")) {
    return <AlertTriangle className="h-5 w-5 text-orange-500" />
  }
  if (lowerStatus.includes("picked")) {
    return <PackageCheck className="h-5 w-5 text-green-500" />
  }
  if (lowerStatus.includes("manifested")) {
    return <PackageOpen className="h-5 w-5 text-blue-500" />
  }
  if (lowerStatus.includes("booked")) {
    return <Package className="h-5 w-5 text-blue-500" />
  }
  return <Package className="h-5 w-5 text-gray-500" />
}

export default function TrackingForm() {
  const [awb, setAwb] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [trackingData, setTrackingData] = useState(null)

  const handleTracking = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setTrackingData(null)

    try {
      const response = await fetch(`/api/track?awb=${awb}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch tracking data")
      }

      setTrackingData(data)
    } catch (err) {
      setError(err.message || "Failed to track shipment")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Tracking Form */}
      <form onSubmit={handleTracking} className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Enter AWB Number"
          value={awb}
          onChange={(e) => setAwb(e.target.value)}
          className="w-full"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Tracking..." : "Track"}
        </Button>
      </form>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Tracking Data */}
      {trackingData && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Shipment Details</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              <strong>Tracking Number:</strong> {trackingData.shipmentDetails.trackingNumber}
            </p>
            <p>
              <strong>Current Status:</strong> {trackingData.shipmentDetails.currentStatus}
            </p>
            <p>
              <strong>Expected Delivery:</strong> {trackingData.shipmentDetails.expectedDelivery}
            </p>
          </div>

          {/* In-Transit Logs Table */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">In-Transit Logs</h3>
            <Table className="border rounded-md">
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trackingData.tracking_details
                  .filter((event) => event.status.toLowerCase().includes("transit"))
                  .map((event, index) => (
                    <TableRow key={index}>
                      <TableCell className="flex items-center gap-2">
                        <StatusIcon status={event.status} />
                        {event.status}
                      </TableCell>
                      <TableCell>{event.timestamp}</TableCell>
                      <TableCell>{event.location}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>

          {/* NDR Logs Table */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">NDR Logs</h3>
            <Table className="border rounded-md">
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trackingData.tracking_details
                  .filter((event) => event.status.toLowerCase().includes("ndr"))
                  .map((event, index) => (
                    <TableRow key={index}>
                      <TableCell className="flex items-center gap-2">
                        <StatusIcon status={event.status} />
                        {event.status}
                      </TableCell>
                      <TableCell>{event.timestamp}</TableCell>
                      <TableCell>{event.location}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  )
}
