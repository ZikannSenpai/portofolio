"use client";

import ScrollFadeIn from "./ScrollFadeIn";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Aplikasi E-commerce",
        description: "Toko online dengan fitur keranjang dan pembayaran.",
        tech: ["Next.js", "Stripe", "Tailwind"]
    },
    {
        id: 2,
        title: "Dashboard Admin",
        description: "Panel kontrol interaktif untuk manajemen data.",
        tech: ["React", "Chart.js", "Firebase"]
    },
    {
        id: 3,
        title: "Portfolio Photography",
        description: "Website portofolio dengan galeri responsif.",
        tech: ["Next.js", "Framer Motion", "Tailwind"]
    },
    {
        id: 4,
        title: "Blog Pribadi",
        description: "Blog dengan markdown dan fitur pencarian.",
        tech: ["Next.js", "MDX", "Tailwind"]
    }
];

export default function Projects() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <ScrollFadeIn>
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Proyek <span className="text-primary">Terbaru</span>
                    </h2>
                </ScrollFadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <ScrollFadeIn key={project.id}>
                            <div
                                className="bg-dark border border-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:border-primary/50 active:scale-95"
                                onClick={() =>
                                    console.log("klik proyek", project.title)
                                } // ganti dengan aksi sesuai kebutuhan
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* Indikator klik (opsional) */}
                                <div className="mt-4 text-primary text-sm flex items-center gap-1">
                                    <span>Klik untuk detail</span>
                                    <span className="text-lg transition-transform active:scale-110">
                                        →
                                    </span>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
