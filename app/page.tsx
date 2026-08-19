import Header from "@/components/Header";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ApiStatus from "@/components/ApiStatus";
import Contact from "@/components/Contact";
import FloatingAnime from "@/components/FloatingAnime";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            <About />

            <SocialLinks />

            <TechStack />

            <Projects />

            <ApiStatus />

            <Contact />

            <footer className="border-t-2 border-gray-800 px-5 py-10">
                <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-4">
                    <div>
                        <div className="font-black text-xl">
                            Zika<span className="text-[var(--blue)]">Nyaw</span>
                            <span className="text-[var(--yellow)]">Dev</span>
                        </div>

                        <div className="text-gray-500 text-sm mt-2">
                            Built with Next.js + Tailwind CSS
                        </div>
                    </div>

                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} ZikaNyawDev
                    </div>
                </div>
            </footer>

            <FloatingAnime />

            <FloatingActions />
        </main>
    );
}
