"use client";

import { useEffect, useState } from "react";

const texts = [
    "I build websites.",
    "I create digital experiences.",
    "I love Anime.",
    "I solve problems with code.",
    "I turn ideas into interfaces."
];

export default function About() {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIndex];

        const speed = deleting ? 45 : 85;

        const timer = setTimeout(() => {
            if (!deleting) {
                const next = current.substring(0, displayText.length + 1);
                setDisplayText(next);

                if (next === current) {
                    setTimeout(() => setDeleting(true), 1000);
                }
            } else {
                const next = current.substring(0, displayText.length - 1);
                setDisplayText(next);

                if (next === "") {
                    setDeleting(false);
                    setTextIndex(prev => (prev + 1) % texts.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, deleting, textIndex]);

    return (
        <section id="about" className="py-24 px-5">
            <div className="mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-stretch">
                    <div className="comic-card min-h-[300px] p-8 flex items-center">
                        <div>
                            <p className="text-[var(--yellow)] font-black mb-4">
                                // ABOUT ME
                            </p>

                            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight">
                                Developer
                                <br />
                                <span className="text-[var(--blue)]">
                                    by day.
                                </span>
                                <br />
                                <span className="text-[var(--yellow)]">
                                    Anime enjoyer.
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="comic-card p-8">
                        <div className="text-gray-300 leading-8 text-lg">
                            <p>
                                Halo! Saya{" "}
                                <strong className="text-white">Zika</strong>,
                                seorang developer yang fokus pada pengembangan
                                website modern menggunakan teknologi JavaScript
                                ecosystem.
                            </p>

                            <p className="mt-5">
                                Saya senang mengubah desain, ide, dan problem
                                menjadi interface yang enak digunakan dan punya
                                karakter sendiri.
                            </p>

                            <div className="mt-8 bg-black border-2 border-[var(--yellow)] p-5">
                                <div className="text-sm uppercase font-black text-gray-500 mb-2">
                                    CURRENT THOUGHT
                                </div>

                                <div className="text-2xl sm:text-3xl font-black text-white">
                                    <span className="text-[var(--blue)]">
                                        {displayText}
                                    </span>
                                    <span className="cursor ml-1">&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
