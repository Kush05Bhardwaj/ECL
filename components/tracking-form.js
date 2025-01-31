'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Package, Truck, Circle, CheckCircle, RotateCcw, X, AlertTriangle } from 'lucide-react'



const StatusIcon = ({ code }) => {
  switch (code) {
    case '220': // Pending
    case '232': // Pickup Pending
    case '235': // RTO - Pending
    case '531': // On Process
      return <Circle className="h-5 w-5 text-yellow-500" />
    case '226': // Delivered
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case '223': // In Transit
    case '228': // Dispatched
    case '234': // RTO - In Transit
    case '236': // RTO - OFD
      return <Truck className="h-5 w-5 text-blue-500" />
    case '224': // RTS
    case '225': // RTO
      return <RotateCcw className="h-5 w-5 text-orange-500" />
    case '227': // Cancelled
    case '229': // Failed
    case '231': // Not Picked
    case '237': // LOST
      return <X className="h-5 w-5 text-red-500" />
    case '233': // NDR
      return <AlertTriangle className="h-5 w-5 text-orange-500" />
    default:
      return <Package className="h-5 w-5 text-blue-500" />
  }
}

export default function TrackingForm() {
  const [awb, setAwb] = useState('')
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
        throw new Error(data.error || 'Failed to fetch tracking data')
      }

      setTrackingData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to track shipment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Package className="h-6 w-6" />
          <h1 className="text-2xl font-semibold">Track Your Shipment</h1>
        </div>
        <form onSubmit={handleTracking} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter AWB/Tracking Number"
              value={awb}
              onChange={(e) => setAwb(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-gray-900 hover:bg-gray-800"
            >
              {loading ? 'Tracking...' : 'Track'}
            </Button>
          </div>
        </form>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {trackingData && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Truck className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Tracking Details</h2>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Current Status</h3>
            <div className="flex items-start gap-2">
              <StatusIcon code={trackingData.status_code} />
              <div>
                <p className="text-gray-900 font-medium">{trackingData.status}</p>
                <div className="text-sm text-gray-600 mt-1">{trackingData.timestamp}</div>
                {trackingData.location && trackingData.location !== 'Location not available' && (
                  <div className="text-sm text-gray-600 mt-1">📍 {trackingData.location}</div>
                )}
              </div>
            </div>

            {trackingData.tracking_details && trackingData.tracking_details.length > 0 ? (
              <div className="mt-6">
                <h4 className="font-semibold mb-4">Tracking History</h4>
                <div className="space-y-4">
                  {trackingData.tracking_details.map((detail, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2">
                        <StatusIcon code={detail.status_code} />
                        <div>
                          <div className="font-medium text-gray-900">{detail.status}</div>
                          <div className="text-sm text-gray-600 mt-1">{detail.timestamp}</div>
                          {detail.location && detail.location !== 'Location not available' && (
                            <div className="text-sm text-gray-600 mt-1">📍 {detail.location}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600 mt-4">No tracking history available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

