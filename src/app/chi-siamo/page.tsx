import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Zap, Scale } from "lucide-react";
import Link from "next/link";

export default function ChiSiamo() {
    return (
        <div className="min-h-screen flex flex-col bg-transparent">
            <Header />

            <main className="flex-1 pt-32 pb-24 md:pt-40">
                {/* 1. Hero Section */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24 md:mb-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                            DEVCilento: Soluzioni Digitali per far crescere la tua attività
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            Trasformiamo la complessità dei processi aziendali in ecosistemi fluidi, combinando eccellenza tecnica e visione strategica per accelerare il potenziale e la scalabilità della tua impresa.</p>
                    </div>
                </section>

                {/* 2. Sezione "Missione" & Area Testuale 'La nostra Storia' */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24 md:mb-32 flex flex-col items-center gap-12 md:gap-16">
                    <div className="w-full text-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            La Nostra Visione
                        </h2>
                    </div>

                    {/* Contenitore Testo: ho impostato text-xl (mobile) e md:text-2xl (desktop) */}
                    <div className="max-w-4xl text-gray-700 font-light leading-relaxed text-center text-xl md:text-2xl">
                        <p className="mb-8 mx-auto">
                            Nati nel cuore del Cilento come realtà focalizzata sull'innovazione, ci siamo evoluti per rispondere a un’esigenza critica del mercato: superare i limiti tecnologici che rallentano le imprese moderne. Troppo spesso le aziende sono frenate da strumenti che non comunicano tra loro, software obsoleti o processi manuali che sottraggono tempo prezioso e impediscono di scalare.                        </p>
                        <p className="mx-auto">
                            Abbiamo scelto di unire la precisione dell'ingegneria alla strategia di business, creando soluzioni che mettono ordine e potenziano ogni attività. Oggi DEVCilento è il partner tecnologico che guida le realtà verso una trasformazione concreta, portando la qualità della progettazione su misura nel mondo dello sviluppo enterprise, degli e-commerce ad alte prestazioni e dell’analisi strategica.
                        </p>
                    </div>
                </section>
                {/* 3. Sezione Valori */}
                <section className="mb-24 md:mb-32 max-w-[1800px] mx-auto px-6 md:px-12">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center text-black">I Nostri Valori Fondamentali</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                                    <ShieldCheck className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Ingegneria su Misura</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    Sviluppiamo architetture e piattaforme cloud che non sono semplici strumenti, ma motori di crescita. Ogni riga di codice è progettata per automatizzare i flussi di lavoro, eliminare le inefficienze e trasformare la tecnologia in un vantaggio competitivo tangibile.</p>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                                    <Zap className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Sicurezza e Integrità</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    La protezione del tuo valore aziendale è il pilastro di ogni nostra architettura. Implementiamo protocolli avanzati e infrastrutture blindate per garantire continuità operativa e totale riservatezza dei tuoi asset strategici.
                                </p>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                                    <Scale className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Scalabilità Nativa</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    Rifiutiamo le soluzioni rigide e limitanti. Progettiamo ecosistemi dinamici e adattivi, nati per espandersi in sincronia con le tue ambizioni. Che si tratti di uno store online globale o di un portale gestionale complesso, la nostra tecnologia evolve insieme al tuo successo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spazio rimosso, storia è stata mossa sopra */}
                {/* 5. Pulsante di Azione (CTA) */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto text-center">
                    <div className="bg-white border border-blue-950 shadow-sm rounded-3xl p-12 md:p-24 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Pronto a portare la tua attività al livello successivo?</h2>
                        <Link
                            href="/contatti"
                            className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-block tracking-wide uppercase shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                        >
                            Richiedi una consulenza gratuita
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
