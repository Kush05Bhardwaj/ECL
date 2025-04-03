'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Package, Truck, Circle, CheckCircle, RotateCcw, X, AlertTriangle } from 'lucide-react'

const StatusIcon = ({ status }) => {
  if (!status) return <Package className="h-5 w-5 text-gray-500" />
  const lowerStatus = status.toLowerCase()

  if (lowerStatus.includes('pending') || lowerStatus.includes('on process')) {
    return <Circle className="h-5 w-5 text-yellow-500" />
  }
  if (lowerStatus.includes('delivered')) {
    return <CheckCircle className="h-5 w-5 text-green-500" />
  }
  if (lowerStatus.includes('transit') || lowerStatus.includes('dispatched')) {
    return <Truck className="h-5 w-5 text-blue-500" />
  }
  if (lowerStatus.includes('rts') || lowerStatus.includes('rto')) {
    return <RotateCcw className="h-5 w-5 text-orange-500" />
  }
  if (lowerStatus.includes('cancelled') || lowerStatus.includes('failed') || lowerStatus.includes('lost')) {
    return <X className="h-5 w-5 text-red-500" />
  }
  if (lowerStatus.includes('ndr')) {
    return <AlertTriangle className="h-5 w-5 text-orange-500" />
  }
  return <Package className="h-5 w-5 text-gray-500" />
}

export default function TrackingForm() {
  const [awb, setAwb] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [trackingData, setTrackingData] = useState(null)

  const handleTracking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTrackingData(null);
  
    try {
      const response = await fetch(`/api/track?awb=${awb}`);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch tracking data');
      }
  
      setTrackingData(data);
    } catch (err) {
      setError(err.message || 'Failed to track shipment');
    } finally {
      setLoading(false);
    }
  };
  

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
              <StatusIcon status={trackingData.status} />
              <div>
                <p className="text-gray-900 font-medium">{trackingData.status}</p>
              </div>
            </div>

            {trackingData.tracking_details.length > 0 ? (
              <div className="mt-6">
                <h4 className="font-semibold mb-4">Tracking History</h4>
                <div className="space-y-4">
                  {trackingData.tracking_details.map((detail, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={detail.status} />
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
