"use client";

import { useEffect, useState } from "react";

type Service = {
    name: string;
    status: "operational" | "degraded";
};

type StatusResponse = {
    status: string;
    latency: number;
    services: Service[];
    timestamp: string;
};

export default function ApiStatus() {
    const [data, setData] = useState<StatusResponse | null>(null);
    const [loading, setLoading] = useState(true);

    async function fetchStatus() {
        try {
            const response = await fetch("/api/status", {
                cache: "no-store"
            });

            const result = await response.json();

            setData(result);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStatus();

        const interval = setInterval(fetchStatus, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-5 bg-[#080808]">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10">
                    <p className="text-[var(--yellow)] font-black">
                        // LIVE MONITOR
                    </p>

                    <h2 className="text-4xl sm:text-6xl font-black uppercase mt-2">
                        API Status
                    </h2>
                </div>

                <div className="comic-card p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between gap-5 border-b border-gray-700 pb-6">
                        <div>
                            <div className="text-gray-500 text-sm uppercase font-bold">
                                SYSTEM STATUS
                            </div>

                            <div className="flex items-center gap-3 mt-2">
                                <span className="w-4 h-4 rounded-full bg-green-400 status-dot" />

                                <span className="text-3xl font-black uppercase">
                                    {loading
                                        ? "Checking..."
                                        : data?.status ?? "Offline"}
                                </span>
                            </div>
                        </div>

                        <div className="text-left md:text-right">
                            <div className="text-gray-500 text-sm uppercase font-bold">
                                LATENCY
                            </div>

                            <div className="text-[var(--yellow)] text-3xl font-black font-mono mt-2">
                                {loading ? "--" : `${data?.latency ?? 0} ms`}
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        {data?.services.map(service => (
                            <div
                                key={service.name}
                                className="bg-black border-2 border-gray-800 p-5"
                            >
                                <div className="text-sm text-gray-500 font-bold">
                                    SERVICE
                                </div>

                                <div className="font-black text-xl mt-2">
                                    {service.name}
                                </div>

                                <div
                                    className={`mt-4 text-sm font-black uppercase ${
                                        service.status === "operational"
                                            ? "text-green-400"
                                            : "text-yellow-400"
                                    }`}
                                >
                                    ● {service.status}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-xs text-gray-500 font-mono">
                        Last checked:{" "}
                        {data?.timestamp
                            ? new Date(data.timestamp).toLocaleTimeString(
                                  "id-ID"
                              )
                            : "--"}
                        {" • "}
                        polling every 5s
                    </div>
                </div>
            </div>
        </section>
    );
}
