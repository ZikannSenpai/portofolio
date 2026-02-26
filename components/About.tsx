import ScrollFadeIn from "./ScrollFadeIn";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-dark/50">
            <div className="max-w-4xl mx-auto">
                <ScrollFadeIn>
                    <h2 className="text-4xl font-bold mb-8 text-center">
                        Tentang <span className="text-primary">Saya</span>
                    </h2>
                </ScrollFadeIn>
                <ScrollFadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4 text-gray-300">
                            <p>
                                Halo! Saya Zikri, seorang web developer yang
                                berfokus pada front-end dan pengalaman pengguna.
                                Saya suka membuat website yang cepat, responsif,
                                dan enak dipandang.
                            </p>
                            <p>
                                Dengan pengalaman menggunakan Next.js, Tailwind,
                                dan berbagai teknologi modern, saya siap
                                membantu mewujudkan ide Anda menjadi produk
                                digital yang luar biasa.
                            </p>
                        </div>
                        <div className="bg-primary/10 p-6 rounded-2xl border border-primary/30">
                            <h3 className="text-2xl font-semibold mb-4 text-primary">
                                Keahlian
                            </h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {[
                                    "Next.js",
                                    "React",
                                    "TypeScript",
                                    "Tailwind",
                                    "Node.js",
                                    "Figma"
                                ].map(skill => (
                                    <li
                                        key={skill}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
