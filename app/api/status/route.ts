import { NextResponse } from "next/server";

export async function GET() {
    const now = new Date();

    const services = [
        {
            name: "Portfolio",
            status: "operational"
        },
        {
            name: "API",
            status: "operational"
        },
        {
            name: "Database",
            status: Math.random() > 0.08 ? "operational" : "degraded"
        },
        {
            name: "CDN",
            status: "operational"
        }
    ];

    const latency = Math.floor(Math.random() * 40) + 30;

    return NextResponse.json({
        status: "online",
        latency,
        services,
        timestamp: now.toISOString()
    });
}
