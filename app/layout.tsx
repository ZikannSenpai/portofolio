import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ZikNext - Portofolio",
    description:
        "Portofolio pribadi Zikri, developer Next.js dengan tema hitam-merah.",
    icons: {
        icon: "/favicon.ico" // favicon.ico diletakkan di /app
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className="antialiased">
                <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <span className="text-2xl font-bold text-primary">
                                ZikNext
                            </span>
                            <div className="hidden md:flex space-x-8">
                                <a
                                    href="#about"
                                    className="hover:text-primary transition"
                                >
                                    Tentang
                                </a>
                                <a
                                    href="#projects"
                                    className="hover:text-primary transition"
                                >
                                    Proyek
                                </a>
                                <a
                                    href="#contact"
                                    className="hover:text-primary transition"
                                >
                                    Kontak
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="pt-16">{children}</div>
            </body>
        </html>
    );
}
