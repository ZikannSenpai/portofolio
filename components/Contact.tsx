import ScrollFadeIn from "./ScrollFadeIn";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-dark/50">
            <div className="max-w-3xl mx-auto text-center">
                <ScrollFadeIn>
                    <h2 className="text-4xl font-bold mb-4">
                        Hubungi <span className="text-primary">Saya</span>
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Tertarik bekerja sama? Kirim pesan melalui form di bawah
                        atau langsung ke email saya.
                    </p>
                </ScrollFadeIn>

                <ScrollFadeIn>
                    <form
                        className="space-y-6"
                        onSubmit={e => e.preventDefault()}
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Nama"
                                className="w-full p-4 bg-black border border-gray-800 rounded-xl focus:border-primary outline-none text-white"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 bg-black border border-gray-800 rounded-xl focus:border-primary outline-none text-white"
                            />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="Pesan"
                            className="w-full p-4 bg-black border border-gray-800 rounded-xl focus:border-primary outline-none text-white"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors active:scale-95 transform"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
