import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(
            "https://api.blockchain.info/charts/hash-rate?timespan=1year&rollingAverage=24hours&format=json",
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error(`Upstream API failed with status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching hash rate data:", error);
        return NextResponse.json(
            { error: "Failed to fetch hash rate data" },
            { status: 500 }
        );
    }
}
