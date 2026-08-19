export default function Contact() {
    return (
        <section id="contact" className="py-24 px-5">
            <div className="mx-auto max-w-5xl">
                <div className="comic-card p-8 sm:p-12 text-center relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--blue)] opacity-20" />

                    <p className="text-[var(--yellow)] font-black">
                        // GET IN TOUCH
                    </p>

                    <h2 className="text-4xl sm:text-6xl font-black uppercase mt-3">
                        Let's Build
                        <span className="block text-[var(--blue)]">
                            Something Awesome.
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
                        Punya project, ide website, atau sekadar ingin ngobrol
                        tentang coding? Kirim pesan dan mari mulai.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="mailto:your@email.com"
                            className="comic-btn px-7 py-4 text-lg"
                        >
                            SEND EMAIL
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
