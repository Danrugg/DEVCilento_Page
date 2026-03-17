import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Laptop, Truck, Code, Image, Cloud, Archive, MessageCircle } from "lucide-react";

export default function Prezzi() {
    const services = [
        {
            title: "Digitalizzazione On-Site",
            icon: Laptop,
            description: "Il laboratorio da te",
            example: "Grandi archivi aziendali",
            price: "Da €0,15/foglio"
        },
        {
            title: "Logistica & Presa in Carico",
            icon: Truck,
            description: "Veniamo noi a ritirare i tuoi documenti con mezzi sicuri",
            example: "Trasporto archivi storici in laboratorio",
            price: "Da €49/intervento"
        },
        {
            title: "Sviluppo Portali & Software",
            icon: Code,
            description: "Il contenitore intelligente per i tuoi dati",
            example: "Gestionali su misura per ricerca istantanea documenti",
            price: "Da €1.200"
        },
        {
            title: "Eredità & Memoria Digitale",
            icon: Image,
            description: "Salva foto e ricordi di famiglia per sempre",
            example: "Digitalizzazione album e lettere manoscritte",
            price: "Da €190/scatola"
        },
        {
            title: "Archiviazione Cloud Protetta",
            icon: Cloud,
            description: "Dati blindati accessibili ovunque",
            example: "Backup sicuro con accesso multi-utente",
            price: "Da €9,90/mese"
        },
        {
            title: "Bonifica & Inventario",
            icon: Archive,
            description: "Ordine fisico e catalogazione professionale",
            example: "Riordino magazzini e faldoni caotici",
            price: "Da €1,50/faldone"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 pt-32 pb-24 md:pt-40 px-6 md:px-12 max-w-[1800px] w-full mx-auto">
                {/* Header della Pagina */}
                <div className="max-w-4xl mb-20 md:mb-28">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Servizi e Listino Trasparente
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                        Soluzioni su misura per aziende, enti e privati. Scegli il piano più adatto alle tue necessità logistiche.
                    </p>
                </div>

                {/* Griglia dei 6 Servizi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light flex-grow">{service.description}</p>
                                
                                <div className="mt-auto pt-8 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                    <div className="text-sm">
                                        <span className="font-bold text-black block mb-1">Esempio:</span>
                                        <span className="text-gray-500">{service.example}</span>
                                    </div>
                                    <div className="text-base font-bold text-black px-6 py-3 bg-gray-50 rounded-xl whitespace-nowrap border border-zinc-200 text-center shadow-sm">
                                        {service.price}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Sezione Finale (CTA) */}
                <div className="bg-[#f5f3fa] rounded-[2rem] p-12 md:p-20 text-center flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 max-w-2xl text-black">
                        Non trovi quello che cerchi?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-light">
                        Ogni progetto è unico. Contattaci per un preventivo personalizzato basato sul volume dei tuoi documenti.
                    </p>
                    <a 
                        href="https://wa.me/390000000000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black text-white px-10 py-5 rounded-full font-medium text-lg tracking-wide hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 flex items-center justify-center gap-3"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Richiedi Preventivo su WhatsApp
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
