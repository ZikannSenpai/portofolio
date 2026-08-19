"use client";

import { FaShareAlt, FaArrowUp, FaCoffee } from "react-icons/fa";

export default function FloatingActions() {
    const handleShare = async () => {
        const url = window.location.href;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: "ZikaNyawDev",
                    text: "Check out ZikaNyawDev portfolio!",
                    url
                });
            } else {
                await navigator.clipboard.writeText(url);
                alert("Link berhasil disalin!");
            }
        } catch {
            // User closed share dialog.
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-3">
            <a
                href="https://trakteer.id/"
                target="_blank"
                rel="noopener noreferrer"
                title="Trakteer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[var(--yellow)] text-black border-3 border-black shadow-[4px_4px_0_#168cff] hover:translate-y-1 transition-transform"
            >
                <FaCoffee className="text-xl" />
            </a>

            <button
                onClick={handleShare}
                title="Share"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[var(--blue)] text-white border-3 border-white shadow-[4px_4px_0_#ffd600] hover:translate-y-1 transition-transform"
            >
                <FaShareAlt />
            </button>

            <button
                onClick={scrollTop}
                title="Page Up"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black text-white border-3 border-white shadow-[4px_4px_0_#168cff] hover:translate-y-1 transition-transform"
            >
                <FaArrowUp />
            </button>
        </div>
    );
}
