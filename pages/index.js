import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
export default function Home() {
    const projects = [
        { title: "Anime Streaming", desc: "Nonton Anime Full HD Terlengkap" },
        { title: "Project B", desc: "Deskripsi singkat project B" },
        { title: "Project C", desc: "Deskripsi singkat project C" }
    ];
    return (
        <div className="page-root">
            {" "}
            <Navbar />{" "}
            <header className="hero">
                {" "}
                <h1>ZikNext - Portofolio</h1>{" "}
                <p>Front-end dev | modifikasi motor | scripting</p>{" "}
            </header>
            <section id="about" className="section">
                <h2>About</h2>
                <p>Ini portfolio singkat. Tambahin detailmu sendiri.</p>
            </section>
            <section id="projects" className="section grid">
                {projects.map((p, i) => (
                    <ProjectCard key={i} title={p.title} desc={p.desc} />
                ))}
            </section>
            <section id="contact" className="section">
                <h2>Contact</h2>
                <p>Email: your@email.com</p>
            </section>
            <footer className="footer">
                © {new Date().getFullYear()} ZikNext
            </footer>
        </div>
    );
}
