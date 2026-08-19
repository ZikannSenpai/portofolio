import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ZikaNyawDev — Web Developer",
    description: "Portfolio personal ZikaNyawDev — Full Stack Web Developeler.",
    keywords: [
        "ZikaNyawDev",
        "Web Developer",
        "Next.js",
        "React",
        "TypeScript",
        "Portfolio"
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
