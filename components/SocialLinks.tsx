"use client";

import { FaGithub, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function SocialLinks() {
    const socials = [
        {
            label: "GitHub",
            url: "https://github.com/",
            icon: <FaGithub />
        },
        {
            label: "WhatsApp",
            url: "https://wa.me/628xxxxxxxxxx",
            icon: <FaWhatsapp />
        },
        {
            label: "TikTok",
            url: "https://www.tiktok.com/",
            icon: <FaTiktok />
        }
    ];

    return (
        <section className="px-5 pb-24">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-wrap gap-4">
                    {socials.map(item => (
                        <a
                            key={item.label}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-black border-2 border-white px-5 py-3 font-bold hover:bg-[var(--blue)] transition-colors shadow-[4px_4px_0_#ffd600]"
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
