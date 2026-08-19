const projects = [
    {
        title: "Manga Dashboard",
        description:
            "Dashboard modern untuk mengelola koleksi manga dengan UI bergaya comic.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        link: "#"
    },
    {
        title: "Anime Finder",
        description:
            "Website pencarian anime dengan sistem kategori, detail dan responsive layout.",
        tech: ["React", "API", "CSS"],
        link: "#"
    },
    {
        title: "Landing Page",
        description:
            "Landing page modern dengan fokus pada conversion dan visual storytelling.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-5">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
                    <div>
                        <p className="text-[var(--yellow)] font-black">
                            // SELECTED WORK
                        </p>

                        <h2 className="text-4xl sm:text-6xl font-black uppercase mt-2">
                            My Projects
                        </h2>
                    </div>

                    <div className="bg-[var(--blue)] text-white border-2 border-white px-5 py-3 font-black rotate-2">
                        POW! POW! CODE!
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="comic-card overflow-hidden group"
                        >
                            <div className="h-48 bg-gradient-to-br from-[var(--blue)] to-black relative overflow-hidden">
                                <div className="absolute inset-0 halftone opacity-60" />

                                <div className="absolute top-5 left-5 bg-[var(--yellow)] text-black px-3 py-2 font-black border-2 border-black -rotate-3">
                                    0{index + 1}
                                </div>

                                <div className="absolute bottom-5 right-5 text-white text-6xl font-black opacity-20">
                                    ★
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-black">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-3 leading-7">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs font-bold bg-black border border-gray-600 px-3 py-1"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    className="mt-6 inline-block text-[var(--yellow)] font-black hover:text-white"
                                >
                                    VIEW PROJECT →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
