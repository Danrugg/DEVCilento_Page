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
                            DEVCilento: Architetture digitali per il patrimonio informativo
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            Trasformiamo il caos documentale in patrimonio informativo strategico, combinando ingeneria del software e logistica d’avanguardia per liberare lo spazio e il potenziale del tuo business.
                        </p>
                    </div>
                </section>

                {/* 2. Sezione "Missione" & Area Testuale 'La nostra Storia' */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24 md:mb-32 flex flex-col items-center gap-12 md:gap-16">
                    <div className="w-full text-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            La Nostra Storia
                        </h2>
                    </div>

                    {/* Contenitore Testo: ho impostato text-xl (mobile) e md:text-2xl (desktop) */}
                    <div className="max-w-4xl text-gray-700 font-light leading-relaxed text-center text-xl md:text-2xl">
                        <p className="mb-8 mx-auto">
                            Nati nel cuore del Cilento — una terra dove la solidità della tradizione incontra una spinta costante verso il futuro — abbiamo risposto a un&apos;esigenza critica di aziende, studi professionali e pubbliche amministrazioni: la paralisi operativa causata dal cartaceo. Archivi saturi e ore perse nella ricerca di documenti smarriti non sono solo un costo, ma un freno all&apos;evoluzione.
                        </p>
                        <p className="mx-auto">
                            Abbiamo scelto di unire competenze logistiche e visione ingegneristica per creare ecosistemi che non si limitano a &quot;scansionare&quot;, ma che estraggono il reale valore da ogni singola informazione. Oggi DEVCilento è il partner tecnologico che guida le realtà locali e nazionali verso la trasformazione digitale, portando la precisione progettuale e l&apos;eccellenza del Made in Italy nel mondo del software enterprise e della conservazione storica.
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
                                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Sicurezza</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    Implementiamo protocolli crittografici d’avanguardia per blindare l’integrità e la riservatezza del tuo patrimonio informativo, garantendo protezione totale tra spazio fisico e infrastruttura cloud
                                </p>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                                    <Zap className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Efficienza Operativa</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    Ingegnerizziamo i flussi documentali per eliminare ogni attrito e inefficienza, trasformando i tempi di accesso e ricerca dei tuoi dati critici da minuti a millisecondi.
                                </p>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                                    <Scale className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Scalabilità</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    Sviluppiamo infrastrutture software progettate per espandersi in sincronia con il tuo business. Rifiutiamo soluzioni rigide a favore di ecosistemi dinamici, adattivi e pronti all&apos;evoluzione.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spazio rimosso, storia è stata mossa sopra */}
                {/* 5. Pulsante di Azione (CTA) */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto text-center">
                    <div className="bg-white border border-blue-950 shadow-sm rounded-3xl p-12 md:p-24 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Pronto a trasformare i tuoi archivi?</h2>
                        <Link
                            href="/contatti"
                            className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-block tracking-wide uppercase shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                        >
                            Richiedi una consulenza logistica
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
