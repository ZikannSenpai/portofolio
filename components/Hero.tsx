import ScrollFadeIn from "./ScrollFadeIn";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <ScrollFadeIn>
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        ZikNext <span className="text-primary">Portofolio</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                        Developer kreatif dengan sentuhan modern. Spesialisasi
                        di Next.js, React, dan desain responsif.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                        >
                            Lihat Proyek
                        </a>
                        <a
                            href="#contact"
                            className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                        >
                            Hubungi Saya
                        </a>
                    </div>
                </div>
            </ScrollFadeIn>
        </section>
    );
}
