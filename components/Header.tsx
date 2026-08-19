"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const formatted = new Intl.DateTimeFormat("id-ID", {
                timeZone: "Asia/Jakarta",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }).format(now);

            setTime(formatted);
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header
            id="home"
            className="hero-grid relative min-h-screen flex items-center overflow-hidden px-5 py-24"
        >
            <div className="speed-lines" />

            <div className="mx-auto w-full max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT */}
                    <div>
                        <div className="inline-flex mb-6">
                            <span className="bg-[var(--yellow)] text-black px-4 py-2 font-black border-2 border-white -rotate-2 shadow-[4px_4px_0_#168cff]">
                                WEB DEVELOPER
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none uppercase tracking-tight">
                            Zika
                            <span className="block text-[var(--blue)]">
                                Nyaw
                                <span className="text-[var(--yellow)]">
                                    Dev
                                </span>
                            </span>
                        </h1>

                        <div className="mt-8 max-w-2xl">
                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                Full Stack Web Developer yang suka membuat
                                website modern, cepat, interaktif, dan sedikit{" "}
                                <span className="text-[var(--yellow)] font-bold">
                                    chaos.
                                </span>
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="comic-btn px-6 py-3 inline-block"
                            >
                                VIEW PROJECT
                            </a>

                            <a
                                href="#contact"
                                className="comic-btn comic-btn-yellow px-6 py-3 inline-block"
                            >
                                CONTACT ME
                            </a>
                        </div>

                        {/* CLOCK */}
                        <div className="mt-10 inline-flex items-center gap-3 bg-black border-2 border-white px-5 py-3 shadow-[4px_4px_0_#168cff]">
                            <span className="text-[var(--yellow)] font-black">
                                WIB
                            </span>

                            <span className="font-mono text-2xl font-bold tracking-widest">
                                {time || "00:00:00"}
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-6 -left-7 z-20 rotate-[-8deg]">
                                <div className="bg-[var(--yellow)] text-black font-black px-5 py-3 border-3 border-black shadow-[5px_5px_0_#168cff]">
                                    HELLO!
                                </div>
                            </div>

                            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]">
                                <div className="absolute inset-0 bg-[var(--blue)] rounded-full blur-[1px] border-4 border-white" />

                                <div className="absolute inset-4 bg-black rounded-full overflow-hidden border-4 border-[var(--yellow)]">
                                    <Image
                                        src="/profile.png"
                                        alt="ZikaNyawDev"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="absolute -bottom-5 -right-5 bg-white text-black border-4 border-black px-6 py-3 font-black rotate-6">
                                    CODE & CREATE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
