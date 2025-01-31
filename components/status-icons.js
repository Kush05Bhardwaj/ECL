import { Circle, CheckCircle, Truck, RotateCcw, Package, X, AlertTriangle } from "lucide-react"

/** @type {Record<string, import('react').ComponentType>} */
export const StatusIcons = {
  "220": Circle, // Pending
  "221": Package, // Booked
  "222": Package, // Manifested
  "223": Truck, // In Transit
  "224": RotateCcw, // RTS
  "225": RotateCcw, // RTO
  "226": CheckCircle, // Delivered
  "227": X, // Cancelled
  "228": Truck, // Dispatched
  "229": AlertTriangle, // Failed
  "230": Package, // Picked Up
  "231": X, // Not Picked
  "232": Circle, // Pickup Pending
  "233": AlertTriangle, // NDR
  "234": Truck, // RTO - In Transit
  "235": Circle, // RTO - Pending
  "236": Truck, // RTO - OFD
  "237": AlertTriangle, // LOST
  "531": Circle, // On Process
  "532": Package, // Child Shipment
}

/** @type {Record<string, string>} */
export const StatusColors = {
  "220": "text-yellow-500", // Pending
  "221": "text-blue-500", // Booked
  "222": "text-blue-500", // Manifested
  "223": "text-blue-500", // In Transit
  "224": "text-orange-500", // RTS
  "225": "text-orange-500", // RTO
  "226": "text-green-500", // Delivered
  "227": "text-red-500", // Cancelled
  "228": "text-blue-500", // Dispatched
  "229": "text-red-500", // Failed
  "230": "text-blue-500", // Picked Up
  "231": "text-red-500", // Not Picked
  "232": "text-yellow-500", // Pickup Pending
  "233": "text-orange-500", // NDR
  "234": "text-orange-500", // RTO - In Transit
  "235": "text-yellow-500", // RTO - Pending
  "236": "text-orange-500", // RTO - OFD
  "237": "text-red-500", // LOST
  "531": "text-blue-500", // On Process
  "532": "text-blue-500", // Child Shipment
}

