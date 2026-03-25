"use client";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center justify-center pt-32 pb-12 px-4 sm:px-6 overflow-hidden">
            <div className="w-full flex flex-col items-center text-center gap-8">

                {/* Main Title */}
                <h1 className="flex flex-nowrap items-center justify-center text-[8.5vw] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] leading-[0.85] tracking-tight font-bold text-black uppercase whitespace-nowrap">
                    <span className="relative z-10">DEV</span>
                    <img src="/logo-dev.webp" alt="Logo DEVCilento" className="relative z-0 h-[0.82em] w-auto object-contain -mx-1 sm:-mx-2 md:-mx-4" />
                    <span className="relative z-10">CILENTO</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-black max-w-2xl mt-4 px-4">
                    La tua informazione ha valore solo quando lavora per te.
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                    Rendiamo i tuoi dati visibili, accessibili e sicuri. Sviluppiamo software su misura e sistemi di archiviazione intelligente per eliminare la &quot;carta morta&quot; e far crescere il tuo business.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href="https://wa.me/393715566672?text=Ciao%20%2C%20vorrei%20richiedere%20un%20sopraluogo%20gratuito!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#171717] hover:bg-black transition-colors rounded-full text-white font-medium text-lg tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
                    >
                        Richiedi un sopraluogo gratuito.
                    </a>
                </div>

            </div>
        </section>
    );
}
