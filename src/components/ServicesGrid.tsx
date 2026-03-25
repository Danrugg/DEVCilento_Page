"use client";

import { Zap, ShoppingBag, CloudCog, FileText, Building, Heart, LibraryBig, ShieldCheck, Database, BarChart3 } from "lucide-react";

const services = [
    {
        title: "Landing Page",
        description: "Trasforma ogni clic in un cliente. Progettiamo pagine web ad alto impatto, ottimizzate per la conversione e la velocità, ideali per lanciare nuovi prodotti o campagne marketing che portano risultati concreti e misurabili al tuo business.",
        icon: Zap,
    },
    {
        title: "E-commerce & Store Online",
        description: "Apri il tuo business al mondo 24 ore su 24. Creiamo negozi digitali sicuri, intuitivi e facili da gestire, pensati per offrire un’esperienza d’acquisto perfetta su ogni dispositivo e far crescere le tue vendite senza confini.",
        icon: ShoppingBag,
    },
    {
        title: "Software su Misura & Portali Cloud",
        description: "Smetti di adattarti a programmi pronti all'uso. Sviluppiamo soluzioni software e infrastrutture cloud che si modellano sul tuo metodo di lavoro, automatizzando i processi aziendali e rendendo i tuoi dati accessibili ovunque tu sia.",
        icon: CloudCog,
    },
    {
        title: "Digitalizzazione Documentale",
        description: "Crea il tuo archivio digitale intelligente. Trasforma faldoni e fatture in risorse sicure, organizzate e facili da consultare. Garantiamo conformità ISO e formato PDF/A per ricerche istantanee: libera spazio fisico e ottimizza la gestione dei tuoi documenti aziendali in totale sicurezza.",
        icon: FileText,
    },
    {
        title: "Archivio In Loco: Sicurezza in Sede",
        description: "La protezione definitiva per i tuoi dati. Portiamo la nostra tecnologia direttamente nei tuoi uffici: i documenti non subiscono alcuno spostamento, garantendo il massimo controllo e la piena conformità GDPR per i tuoi archivi più sensibili.",
        icon: Building,
    },
    {
        title: "Memorie di Famiglia",
        description: "Custodisci le tue radici. Trasformiamo album, lettere e diari in un’eredità digitale eterna. Grazie alla tecnologia laser non invasiva, i tuoi ricordi più cari sono protetti dall'usura del tempo e pronti per essere condivisi con chi ami, su ogni dispositivo.",
        icon: Heart,
    },
    {
        title: "Archivio Storico & Museale",
        description: "Valorizzazione del patrimonio culturale. Offriamo soluzioni d’eccellenza per musei e istituzioni: digitalizziamo manoscritti e opere d'arte con precisione laser, garantendo la conservazione degli originali e creando archivi ad alta risoluzione per la ricerca.",
        icon: LibraryBig,
    },
    {
        title: "Distruzione Certificata & Smaltimento",
        description: "Libera i tuoi spazi in totale sicurezza legale. Offriamo triturazione meccanica a norma GDPR con rilascio del certificato ufficiale di distruzione. Uniamo protezione dei dati e sostenibilità, trasformando i tuoi scarti in nuova risorsa eco-friendly.",
        icon: ShieldCheck,
    },
    {
        title: "Data Entry & Database Management",
        description: "Trasforma dati grezzi in database pronti all'uso. Ci occupiamo dell'inserimento e della pulizia delle tue informazioni con massima precisione, liberando il tuo team da task ripetitivi e garantendo un archivio digitale ordinato e senza errori.",
        icon: Database,
    },
    {
        title: "Business Insights & Strategia",
        description: "Non solo dati, ma conoscenza strategica. Analizziamo le tue informazioni per creare report chiari e grafici intuitivi che ti aiutano a prevedere trend e prendere decisioni basate su fatti concreti per far crescere il tuo business con sicurezza.",
        icon: BarChart3,
    },
];

export default function ServicesGrid() {
    return (
        <section className="px-6 md:px-12 pb-24 pt-12 bg-transparent" id="servizi">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1800px] mx-auto items-stretch">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    const isLastCardInCenteredRow = services.length === 10 && index === 9;
                    return (
                        <div 
                            key={index} 
                            className={`bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group ${isLastCardInCenteredRow ? 'md:col-start-2' : ''}`}
                        >
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                                <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
