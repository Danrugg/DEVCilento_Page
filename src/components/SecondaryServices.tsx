"use client";

export default function SecondaryServices() {
    return (
        <section className="px-6 md:px-12 pb-32">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Distruzione Certificata */}
                <div className="bg-[#e8e9ef] p-10 md:p-14 rounded-[2.5rem] flex flex-col gap-4 transition-colors hover:bg-[#dfe0e8]">
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                        Distruzione Certificata
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Dopo la digitalizzazione, smaltiamo il cartaceo a norma di legge (CAD e GDPR) liberando definitivamente i tuoi spazi.
                    </p>
                </div>

                {/* Memorie */}
                <div className="bg-[#e8e9ef] p-10 md:p-14 rounded-[2.5rem] flex flex-col gap-4 transition-colors hover:bg-[#dfe0e8]">
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                        Memorie
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Un servizio dedicato alle famiglie e agli artisti locali. Digitalizziamo foto d&apos;epoca, diari e opere d&apos;arte per proteggere la storia e il talento del nostro territorio.
                    </p>
                </div>
            </div>
        </section>
    );
}
