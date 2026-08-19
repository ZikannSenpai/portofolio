import Image from "next/image";

export default function FloatingAnime() {
    return (
        <div className="fixed bottom-4 left-3 z-40 pointer-events-none">
            <div className="relative">
                <div className="cloud left-12 bottom-16 scale-75 sm:scale-90">
                    <div className="absolute -top-5 left-8 bg-white text-black px-4 py-2 font-black border-2 border-black whitespace-nowrap -rotate-3">
                        Let's code!
                    </div>
                </div>

                <div className="anime-float relative w-28 h-36 sm:w-36 sm:h-44">
                    <Image
                        src="/anime-mascot.svg"
                        alt="Anime mascot"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="anime-shadow absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full blur-sm" />
            </div>
        </div>
    );
}
