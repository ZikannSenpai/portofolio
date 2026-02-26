"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { ReactNode } from "react";

interface ScrollFadeInProps {
    children: ReactNode;
    className?: string;
}

export default function ScrollFadeIn({
    children,
    className = ""
}: ScrollFadeInProps) {
    const { ref, isVisible } = useFadeIn();

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-5"
            } ${className}`}
        >
            {children}
        </div>
    );
}
