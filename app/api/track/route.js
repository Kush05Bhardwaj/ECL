// app/api/track/route.js

import { NextResponse } from 'next/server'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const awb = searchParams.get('awb');

    if (!awb) {
      return NextResponse.json({ error: "AWB number is required" }, { status: 400 });
    }

    const apiUrl = `https://app.parcelx.in/api/v1/track_order?awb=${awb}`;
    const response = await fetch(apiUrl, {
      headers: {
        'access-token': 'MGU1NjJiZGY2MjQ3M2Y3MTQxZTNlNjJlMzU2Yzg0ODAyODY1M2E5MjoxMmE0ZWJhZDA3YmZiZTk3NzJkMjcwZGQ5Yjk0NTAyYmI1MTM2NGE1MGM4ZjEyMGU0ODgzYzJlYTcwZTJjNmRkN2JiMGU1Njc2NGY0ODk3MTFmZjA2NzFjMzQ3Y2Y2Yzk'
      }
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      return NextResponse.json({ error: "Failed to fetch tracking data" }, { status: 500 });
    }

    return NextResponse.json({
      status: data.current_status.status_title,
      tracking_details: data.data.map(event => ({
        status: event.status_title,
        timestamp: event.event_date,
        location: event.status_location || 'Location not available'
      }))
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
