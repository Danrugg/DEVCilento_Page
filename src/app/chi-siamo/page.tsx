import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, ShieldCheck, Zap, Database, Clock, Scale } from "lucide-react";
import Link from "next/link";

export default function ChiSiamo() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 pt-32 pb-24 md:pt-40">
                {/* 1. Hero Section */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24 md:mb-32">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                            DEVCilento: L&apos;Artigianato Tecnologico al servizio del dato
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                            Trasformiamo archivi fisici in ecosistemi digitali intelligenti, combinando logistica su misura e sviluppo software avanzato per liberare spazio e potenziale nel tuo business.
                        </p>
                    </div>
                </section>

                {/* 2. Sezione Metodo Logistico */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24 md:mb-32">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Il Nostro Metodo Logistico</h2>
                        <p className="text-gray-500 max-w-2xl text-lg">Un processo sicuro e certificato per la gestione e digitalizzazione dei tuoi documenti.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl hover:bg-[#f3efff] transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Truck className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Intervento On-Site</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Portiamo il nostro laboratorio direttamente presso la tua sede. I nostri tecnici specializzati si occupano della digitalizzazione senza che i documenti escano dai tuoi uffici, garantendo massima sicurezza e zero rischi di trasporto.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl hover:bg-[#f3efff] transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Ritiro e Presa in Carico</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Organizziamo il trasporto sicuro dei tuoi archivi verso i nostri centri specializzati. Tracciamo ogni singolo faldone dal momento del ritiro fino alla sua completa digitalizzazione, offrendo una catena di custodia ininterrotta.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl hover:bg-[#f3efff] transition-colors duration-300 group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Gestione Remota</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Riceviamo e digitalizziamo i tuoi flussi documentali via corriere. Ideale per flussi continui o realtà distribuite. I documenti originali possono essere archiviati nei nostri depositi o restituiti al cliente, secondo le necessità.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Sezione Valori */}
                <section className="bg-black text-white py-24 px-6 md:px-12 mb-24 md:mb-32">
                    <div className="max-w-[1800px] mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">I Nostri Valori Fondamentali</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                            <div className="flex flex-col items-center text-center">
                                <ShieldCheck className="w-12 h-12 mb-6 text-gray-300" strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold mb-4 tracking-wide">Sicurezza Intransigente</h3>
                                <p className="text-gray-400 leading-relaxed max-w-sm">
                                    Adottiamo i massimi standard crittografici e operativi per proteggere l&apos;integrità e la riservatezza delle tue informazioni, sia fisiche che digitali.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <Zap className="w-12 h-12 mb-6 text-gray-300" strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold mb-4 tracking-wide">Efficienza Operativa</h3>
                                <p className="text-gray-400 leading-relaxed max-w-sm">
                                    Mappiamo e ottimizziamo i flussi documentali per eliminare i colli di bottiglia, riducendo i tempi di ricerca del dato dai minuti ai millisecondi.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <Scale className="w-12 h-12 mb-6 text-gray-300" strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold mb-4 tracking-wide">Scalabilità Su Misura</h3>
                                <p className="text-gray-400 leading-relaxed max-w-sm">
                                    Progettiamo architetture software in grado di crescere con il tuo business. Non vendiamo scatole chiuse, ma ecosistemi plastici.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Area Testuale 'La nostra Storia' */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24 md:mb-32 flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter sticky top-32">
                            La Nostra Storia
                        </h2>
                    </div>
                    <div className="md:w-2/3 prose prose-lg md:prose-xl text-gray-700 font-light leading-relaxed">
                        <p className="mb-8">
                            Nati nel cuore del Cilento, una terra che unisce tradizioni antiche e un forte sguardo al futuro, abbiamo iniziato il nostro percorso osservando un problema comune a tantissime aziende, studi legali e pubbliche amministrazioni: la paralisi amministrativa causata dall&apos;eccesso di documentazione cartacea. Archivi polverosi, metri cubi di spazio sprecato e ore perse nella ricerca di faldoni mis-archiviati.
                        </p>
                        <p className="mb-8">
                            Abbiamo deciso di unire le competenze logistiche a quelle ingegneristiche per creare soluzioni che non si limitassero a &quot;scansionare fogli&quot;, ma che estraessero il reale valore dal dato strutturato. Oggi DEVCilento rappresenta un partner tecnologico in grado di accompagnare le realtà locali e nazionali nel salto definitivo verso la digitalizzazione, portando l&apos;artigianato tecnologico e l&apos;attenzione al dettaglio tipiche del made in Italy nel mondo del software enterprise.
                        </p>
                    </div>
                </section>

                {/* 5. Pulsante di Azione (CTA) */}
                <section className="px-6 md:px-12 max-w-[1800px] mx-auto text-center">
                    <div className="bg-gray-50 rounded-3xl p-12 md:p-24 flex flex-col items-center">
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
