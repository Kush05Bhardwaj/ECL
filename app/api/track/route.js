import { NextResponse } from 'next/server'

/**
 * @typedef {Object} ServiceProvider
 * @property {string} name
 * @property {string} accessKey
 * @property {string} secretKey
 */

/** @type {ServiceProvider[]} */
const serviceProviders = [
  { 
    name: 'ParcelX Account 1',
    accessKey: process.env.PARCELX_ACCESS_KEY_1 || '',
    secretKey: process.env.PARCELX_SECRET_KEY_1 || '',
  },
  { 
    name: 'ParcelX Account 2',
    accessKey: process.env.PARCELX_ACCESS_KEY_2 || '',
    secretKey: process.env.PARCELX_SECRET_KEY_2 || '',
  },
]
/** @type {{ [key: string]: string }} */
const statusMap = {
  'Pending': '220',
  'Booked': '221',
  'Manifested': '222',
  'In Transit': '223',
  'RTS': '224',
  'RTO': '225',
  'Delivered': '226',
  'Cancelled': '227',
  'Dispatched': '228',
  'Failed': '229',
  'Picked Up': '230',
  'Not Picked': '231',
  'Pickup Pending': '232',
  'NDR': '233',
  'RTO - In Transit': '234',
  'RTO - Pending': '235',
  'RTO - OFD': '236',
  'LOST': '237',
  'Child Shipment': '532'
}

/**
 * @param {string} status
 * @returns {string}
 */
const getStatusCode = (status) => {
  return statusMap[status] || '220'
}

/**
 * @param {string} awb
 * @param {ServiceProvider} provider
 */
async function fetchTrackingData(awb, provider) {
  const authToken = Buffer.from(`${provider.accessKey}:${provider.secretKey}`).toString('base64')

const response = await fetch(`https://parcelx.in/tracking.php?waybill_no=${awb}`, {
  headers: {
    'Accept': 'application/json',
    'Authorization': `Basic ${authToken}`,
    'Content-Type': 'application/json'
  }
})

  if (!response.ok) {
    throw new Error(`API responded with status ${response.status}`)
  }

  return await response.json()
}

/** @param {Request} request */
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const awb = searchParams.get('awb')

  if (!awb) {
    return NextResponse.json({ error: 'AWB number is required' }, { status: 400 })
  }

  for (const provider of serviceProviders) {
    if (!provider.accessKey || !provider.secretKey) {
      console.error(`API credentials are not configured for ${provider.name}`)
      continue
    }

    try {
      const data = await fetchTrackingData(awb, provider)
      console.log(`Raw API response from ${provider.name}:`, data)

      const transformedData = {
        status: data.current_status?.status_title || 'Status not available',
        status_code: getStatusCode(data.current_status?.status_title || ''),
        timestamp: data.current_status?.event_date || '',
        location: data.current_status?.status_location || '',
        tracking_details: Array.isArray(data.data)
          ? data.data.map((history) => ({
              status: history.status_title || 'Status not available',
              status_code: getStatusCode(history.status_title || ''),
              timestamp: history.event_date || 'Date not available',
              location: history.status_location || 'Location not available',
            }))
          : [],
      }

      console.log(`Transformed data from ${provider.name}:`, transformedData)
      return NextResponse.json(transformedData)
    } catch (error) {
      console.error(`Error fetching tracking data from ${provider.name}:`, error)
    }
  }

  return NextResponse.json(
    { error: 'Failed to fetch tracking data from all available accounts' },
    { status: 500 }
  )
}

