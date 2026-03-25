import { Truck, Database, Clock } from "lucide-react";

export default function LogisticMethod() {
    return (
        <section className="px-6 md:px-12 py-24 md:py-32 bg-transparent max-w-[1800px] mx-auto w-full">
            <div className="mb-12 md:mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black text-center">Il Nostro Metodo Logistico</h2>
                <p className="text-gray-500 max-w-2xl text-lg mx-auto text-center">
                    Un processo sicuro e certificato per la gestione e digitalizzazione dei tuoi documenti.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mx-auto items-stretch">
                {/* Card 1 */}
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                        <Truck className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Intervento On-Site</h3>
                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                        Portiamo il nostro laboratorio direttamente presso la tua sede. I nostri tecnici specializzati si occupano della digitalizzazione senza che i documenti escano dai tuoi uffici, garantendo massima sicurezza e zero rischi di trasporto.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                        <Database className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Ritiro e Presa in Carico</h3>
                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                        Organizziamo il trasporto sicuro dei tuoi archivi verso i nostri centri specializzati. Tracciamo ogni singolo faldone dal momento del ritiro fino alla sua completa digitalizzazione, offrendo una catena di custodia ininterrotta.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                        <Clock className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">Gestione Remota</h3>
                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                        Riceviamo e digitalizziamo i tuoi flussi documentali via corriere. Ideale per flussi continui o realtà distribuite. I documenti originali possono essere archiviati nei nostri depositi o restituiti al cliente, secondo le necessità.
                    </p>
                </div>
            </div>
        </section>
    );
}
