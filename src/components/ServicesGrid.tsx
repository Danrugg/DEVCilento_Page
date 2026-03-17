"use client";

import { Laptop, Truck, Code, Image, Cloud, Archive } from "lucide-react";

const services = [
    {
        title: "Digitalizzazione On-Site",
        description: "Il laboratorio direttamente presso la tua sede.",
        icon: Laptop,
    },
    {
        title: "Logistica & Ritiro",
        description: "Veniamo noi a prelevare i tuoi archivi in totale sicurezza.",
        icon: Truck,
    },
    {
        title: "Sviluppo Software",
        description: "Portali su misura per la gestione intelligente dei tuoi dati.",
        icon: Code,
    },
    {
        title: "Eredità & Memoria",
        description: "Salva foto e ricordi di famiglia in formato digitale eterno.",
        icon: Image,
    },
    {
        title: "Cloud Protetto",
        description: "Archiviazione blindata e accessibile ovunque ti trovi.",
        icon: Cloud,
    },
    {
        title: "Bonifica & Inventario",
        description: "Mettiamo ordine fisico e cataloghiamo i tuoi faldoni.",
        icon: Archive,
    },
];

export default function ServicesGrid() {
    return (
        <section className="px-6 md:px-12 pb-24 pt-12 bg-white" id="servizi">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1800px] mx-auto items-stretch">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div 
                            key={index} 
                            className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-6 group"
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
