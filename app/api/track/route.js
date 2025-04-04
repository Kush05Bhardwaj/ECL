import { NextResponse } from "next/server"

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const awb = searchParams.get("awb")

    if (!awb) {
      return NextResponse.json({ error: "AWB number is required" }, { status: 400 })
    }

    // Array of access tokens from environment variables
    const accessTokens = [
      process.env.PARCELX_ACCESS_TOKEN_1,
      process.env.PARCELX_ACCESS_TOKEN_2,
      process.env.PARCELX_ACCESS_TOKEN_3,
    ].filter(Boolean) // Filter out undefined tokens

    // Try each access token until one works
    let lastError = null

    for (const token of accessTokens) {
      try {
        const apiUrl = `https://app.parcelx.in/api/v1/track_order?awb=${awb}`
        const response = await fetch(apiUrl, {
          headers: {
            "access-token": token || "",
          },
        })

        // If the response is not OK, throw an error to try the next token
        if (!response.ok) {
          throw new Error(`API responded with status ${response.status}`)
        }

        const data = await response.json()

        // Check if the response has the expected structure
        if (!data.status) {
          throw new Error("Invalid response format")
        }

        // Extract shipment details for the summary section
        const shipmentDetails = {
          trackingNumber: awb,
          orderID: data.order_id || "N/A",
          lastMile: data.last_mile || "N/A",
          destination: data.destination || "N/A",
          currentStatus: data.current_status?.status_title || "N/A",
          expectedDelivery: data.expected_delivery_date || "N/A",
          shipmentType: data.shipment_type || "N/A",
          origin: data.origin || "N/A",
        }

        // If we get here, we have a valid response
        return NextResponse.json({
          status: data.current_status.status_title,
          shipmentDetails: shipmentDetails,
          tracking_details: data.data.map((event) => ({
            status: event.status_title,
            timestamp: event.event_date,
            location: event.status_location || "Location not available",
            remark: event.remark || "",
            scannedAt: event.scanned_at || event.event_date,
          })),
        })
      } catch (error) {
        // Store the error and try the next token
        lastError = error
        console.error(`Error with token: `, error)
        // Continue to the next token
      }
    }

    // If we get here, all tokens failed
    return NextResponse.json(
      {
        error: "Failed to fetch tracking data with all available accounts",
        details: lastError instanceof Error ? lastError.message : String(lastError),
      },
      { status: 500 },
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      {
        error: "Server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

