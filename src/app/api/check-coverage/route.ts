import { NextRequest, NextResponse } from "next/server";
import { findOfficeByZip, offices } from "@/data/service-areas";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || "AIzaSyDy0kj8bh1GXyznQUyVHwPWCQOOM2KEUEs";

interface GeocodeResult {
  address_components: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;
  formatted_address: string;
  geometry: {
    location: { lat: number; lng: number };
  };
}

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959; // Earth radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export async function GET(request: NextRequest) {
  const zip = request.nextUrl.searchParams.get("zip");

  if (!zip || !/^\d{5}$/.test(zip)) {
    return NextResponse.json({ error: "Please enter a valid 5-digit zip code." }, { status: 400 });
  }

  // First check our local database
  const directMatch = findOfficeByZip(zip);
  if (directMatch) {
    return NextResponse.json({
      covered: true,
      office: {
        city: directMatch.city,
        state: directMatch.state,
        stateCode: directMatch.stateCode,
        phone: directMatch.phone,
        address: directMatch.address,
      },
      message: `Great news! We serve your area from our ${directMatch.city}, ${directMatch.stateCode} office.`,
    });
  }

  // If no direct match, use Google Maps Geocoding to find nearest office
  try {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(geocodeUrl);
    const data = await response.json();

    if (data.status !== "OK" || !data.results?.length) {
      return NextResponse.json({
        covered: false,
        message: "We couldn't verify that zip code. Please try again or call us at (866) 326-2847.",
      });
    }

    const result: GeocodeResult = data.results[0];
    const { lat, lng } = result.geometry.location;

    // Get state from geocode result
    const stateComponent = result.address_components.find((c: GeocodeResult["address_components"][0]) =>
      c.types.includes("administrative_area_level_1")
    );
    const stateCode = stateComponent?.short_name || "";

    // Check if the zip is in one of our service states
    const serviceStateCodes = ["CA", "OR", "WA", "TN", "NV"];
    if (!serviceStateCodes.includes(stateCode)) {
      return NextResponse.json({
        covered: false,
        state: stateCode,
        message: `We don't currently serve ${stateComponent?.long_name || "your state"}, but we're expanding! Leave your info and we'll notify you.`,
      });
    }

    // Find the nearest office by geocoding each office city
    const stateOffices = offices.filter((o) => o.stateCode === stateCode);
    let nearestOffice = stateOffices[0];
    let minDistance = Infinity;

    for (const office of stateOffices) {
      const officeGeoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        office.city + ", " + office.stateCode
      )}&key=${GOOGLE_MAPS_API_KEY}`;
      const officeRes = await fetch(officeGeoUrl);
      const officeData = await officeRes.json();

      if (officeData.status === "OK" && officeData.results?.length) {
        const officeLoc = officeData.results[0].geometry.location;
        const distance = haversineDistance(lat, lng, officeLoc.lat, officeLoc.lng);
        if (distance < minDistance) {
          minDistance = distance;
          nearestOffice = office;
        }
      }
    }

    // If within 50 miles of an office, consider it covered
    if (minDistance <= 50) {
      return NextResponse.json({
        covered: true,
        office: {
          city: nearestOffice.city,
          state: nearestOffice.state,
          stateCode: nearestOffice.stateCode,
          phone: nearestOffice.phone,
          address: nearestOffice.address,
        },
        distance: Math.round(minDistance),
        message: `Great news! We serve your area from our ${nearestOffice.city}, ${nearestOffice.stateCode} office (${Math.round(minDistance)} miles away).`,
      });
    }

    return NextResponse.json({
      covered: false,
      nearestCity: nearestOffice.city,
      distance: Math.round(minDistance),
      message: `Our nearest office is in ${nearestOffice.city}, ${nearestOffice.stateCode} (${Math.round(minDistance)} miles away). Call us at (866) 326-2847 to check if we can help.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please call us at (866) 326-2847." },
      { status: 500 }
    );
  }
}
