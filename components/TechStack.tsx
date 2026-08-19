import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiGit,
    SiGithub,
    SiFigma
} from "react-icons/si";

const tech = [
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Figma", icon: <SiFigma /> }
];

export default function TechStack() {
    return (
        <section id="stack" className="py-24 px-5 bg-[#080808]">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="text-[var(--yellow)] font-black">
                        // TECHNOLOGY
                    </p>

                    <h2 className="text-4xl sm:text-6xl font-black uppercase mt-2">
                        Tech Stack
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {tech.map(item => (
                        <div
                            key={item.name}
                            className="comic-card p-5 flex flex-col items-center justify-center min-h-[130px] hover:-translate-y-2 transition-transform"
                        >
                            <div className="text-4xl text-[var(--blue)]">
                                {item.icon}
                            </div>

                            <div className="mt-4 font-bold text-center text-sm">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
