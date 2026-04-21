import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, ShoppingBag, CloudCog, FileText, Building, Heart, LibraryBig, ShieldCheck, Database, BarChart3, MessageCircle } from "lucide-react";

export default function Prezzi() {
    const services = [
        {
            title: "Landing Page",
            icon: Zap,
            description: "Una pagina semplice e diretta, pensata per portarti nuovi clienti",
            example: "Hai un nuovo servizio o un'offerta da spingere? Creiamo una pagina veloce dove chi entra capisce subito cosa fai e ti contatta con un solo clic.",
            price: "A partire da €299" /* MODIFICA_PREZZO_REALE_QUI */,
            whatsappMessage: "Ciao DEVCilento! Vorrei ricevere maggiori informazioni sul servizio Landing Page visto sul sito. Grazie!"
        },
        {
            title: "E-commerce & Store Online",
            icon: ShoppingBag,
            description: "Vendi i tuoi prodotti ovunque, con un negozio online facile da gestire.",
            example: "Creiamo uno store che fa tutto da solo: accoglie il cliente, elabora il pagamento e ti avvisa quando è il momento di spedire.",
            price: "Su Preventivo" /* MODIFICA_PREZZO_REALE_QUI */,
            whatsappMessage: "Ciao! Sono interessato al vostro servizio E-commerce & Store Online. Grazie!"
        },
        {
            title: "Software su Misura & Portali Cloud",
            icon: CloudCog,
            description: "Smetti di impazzire tra mille file e fogli di calcolo sparsi.",
            example: "Usi tre programmi diversi per fare una sola cosa? Ti creiamo uno spazio di lavoro unico, fatto esattamente come serve a te, dove tutto è al suo posto e a portata di clic.",
            price: "Su Preventivo" /* MODIFICA_PREZZO_REALE_QUI */,
            whatsappMessage: "Buongiorno DEVCilento, vorrei saperne di più sullo sviluppo di Software su Misura e Portali Cloud. Grazie."
        },
        /*{
            title: "Digitalizzazione Documentale",
            icon: FileText,
            description: "Addio polvere, benvenuta efficienza in un click.",
            example: "Il commercialista ti chiede una fattura di tre anni fa? Invece di scavare in archivio, scrivi il nome del fornitore sul PC e trovala in 3 secondi grazie al formato PDF/A ricercabile.",
            price: "Da €17,99 / kg",
            whatsappMessage: "Ciao, vorrei maggiori informazioni sul servizio di Digitalizzazione Documentale a norma. Grazie!"
        },
        {
            title: "Archivio In Loco: Sicurezza in Sede",
            icon: Building,
            description: "Ci spostiamo noi, non i tuoi documenti.",
            example: "Gestisci dati sensibilissimi in uno studio legale o medico? Allestiamo il laboratorio da te: i faldoni non lasciano mai la tua sede, garantendo riservatezza totale sotto la tua supervisione.",
            price: "Da €34,99 / kg",
            whatsappMessage: "Salve, sono interessato al servizio Archivio In Loco per la sicurezza dei dati in sede. Potete contattarmi?"
        },
        {
            title: "Memorie di Famiglia",
            icon: Heart,
            description: "Proteggi le tue radici dall'usura del tempo.",
            example: "Hai una scatola di vecchie foto che si stanno ingiallendo? Le trasformiamo in un archivio digitale nitido e restaurato, pronto per essere condiviso su WhatsApp con tutta la famiglia.",
            price: "Da €0,99 / cad",
            whatsappMessage: "Ciao DEVCilento, ho visto il servizio Memorie di Famiglia sul sito e vorrei ricevere i dettagli. Grazie."
        },
        {
            title: "Archivio Storico & Museale",
            icon: LibraryBig,
            description: "Diamo alla storia il futuro che merita.",
            example: "Un Comune o un Ente ha documenti rari e fragili? Creiamo copie digitali ad altissima risoluzione con tecnologia laser non invasiva, perfette per mostre virtuali o consultazione scientifica.",
            price: "Su Preventivo",
            whatsappMessage: "Buongiorno, vorrei informazioni sulla digitalizzazione per Archivi Storici e Museali. Grazie."
        },
        {
            title: "Distruzione Certificata & Smaltimento",
            icon: ShieldCheck,
            description: "Liberati dal peso della carta in totale sicurezza legale.",
            example: "Hai digitalizzato tutto e ora hai quintali di carta rischiosa? La trituriamo a norma GDPR e ti rilasciamo il certificato ufficiale che ti mette al riparo da ogni sanzione sulla privacy.",
            price: "Da €4,99 / kg",
            whatsappMessage: "Ciao! Mi servirebbero dettagli sul servizio di Distruzione Certificata e Smaltimento a norma GDPR."
        },*/
        {
            title: "Data Entry & Database Management",
            icon: Database,
            description: "Liberati dai lavori noiosi e ripetitivi di inserimento dati, ci pensiamo noi.",
            example: "Passi ore a ricopiare numeri, fatture o contatti a mano? Lascia a noi questo compito noioso. Inseriamo e puliamo i tuoi dati con precisione assoluta",
            price: "Da €24,99/ora" /* MODIFICA_PREZZO_REALE_QUI */,
            whatsappMessage: "Salve DEVCilento, vorrei informazioni sul servizio di Data Entry e Gestione Database. Grazie."
        },
        {
            title: "Business Insights & Strategia",
            icon: BarChart3,
            description: "Prendi decisioni sicure, basate sui fatti e non sulle sensazioni.",
            example: "A volte si spingono servizi che in realtà rendono poco. Con i nostri report intuitivi, capirai subito quali attività tagliare e quali potenziare, massimizzando i profitti senza disperdere tempo e risorse.",
            price: "Su Preventivo" /* MODIFICA_PREZZO_REALE_QUI */,
            whatsappMessage: "Ciao! Sono interessato al servizio Business Insights & Strategia per analizzare i miei dati aziendali."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-transparent">
            <Header />

            <main className="flex-1 pt-32 pb-24 md:pt-40 px-6 md:px-12 max-w-[1800px] w-full mx-auto">
                {/* Header della Pagina */}
                <div className="max-w-4xl mb-20 md:mb-28">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Servizi e Prezzi
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                        Soluzioni su misura per aziende, enti e privati. Scegli il servizio più adatto alle tue necessità.
                    </p>
                </div>

                {/* Griglia dei 6 Servizi */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-24 md:mb-32 max-w-[1800px] mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                /* w-full: 1 colonna su mobile
                                   md:flex-[0_0_calc(50%-1.5rem)]: 2 colonne precise su desktop (50% meno metà del gap)
                                   Rimosso max-w così occupano tutto lo spazio disponibile
                                */
                                className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group w-full md:flex-[0_0_calc(50%-2rem)] min-h-[450px]"
                            >
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light flex-grow">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-8 border-t border-zinc-100 flex flex-col gap-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                        <div className="text-sm md:text-base">
                                            <span className="font-bold text-black block mb-1 uppercase tracking-wider text-xs">Esempio pratico:</span>
                                            <span className="text-gray-500 italic">"{service.example}"</span>
                                        </div>
                                        <div className="text-lg font-bold text-black px-8 py-4 bg-blue-50 rounded-2xl whitespace-nowrap border border-blue-100 text-center shadow-sm shrink-0">
                                            {service.price}
                                        </div>
                                    </div>

                                    <a
                                        href={`https://wa.me/393715566672?text=${encodeURIComponent(service.whatsappMessage)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-4 bg-zinc-900 hover:bg-black text-white p-5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-2xl group/btn mt-2"
                                    >
                                        <MessageCircle className="w-7 h-7 text-white" />
                                        <div className="flex flex-col items-start text-left">
                                            <span className="font-bold tracking-tight text-base">Parliamone su WhatsApp</span>
                                            <span className="text-xs text-zinc-400">Ti rispondiamo subito</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Sezione Finale (CTA) */}
                <div className="bg-white border border-blue-950 shadow-sm rounded-[2rem] p-12 md:p-20 text-center flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 max-w-2xl text-black">
                        Non trovi quello che cerchi?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-light">
                        Ogni progetto è unico. Contattaci per un preventivo personalizzato.
                    </p>
                    <a
                        href="https://wa.me/393715566672"
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
