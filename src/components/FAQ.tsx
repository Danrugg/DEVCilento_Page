"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Qual è il vostro approccio allo sviluppo software?",
        answer: "Non assembliamo soluzioni pre-confezionate. Progettiamo e sviluppiamo architetture digitali su misura. Ogni riga di codice è scritta per ottimizzare le performance, garantire la sicurezza e assicurare la scalabilità del prodotto finale."
    },
    {
        question: "Utilizzate template o CMS tradizionali?",
        answer: "No. Il nostro setup On-Site è compatto e silenzioso. Lavoriamo in un angolo senza disturbare il tuo staff: tu lavori, noi digitalizziamo."
    },
    {
        question: "E se il foglio è fragile?",
        answer: "Usiamo scanner a piano fisso e maneggiamo ogni foglio a mano. Nessun caricatore automatico per i documenti d'epoca o i ricordi di famiglia."
    },
    {
        question: "Come ritrovo i file?",
        answer: "Creiamo un indice intelligente. Non dovrai più cercare tra le cartelle: scrivi una parola chiave nel portale e il documento apparirà all'istante."
    },
    {
        question: "Cosa ne fate del cartaceo?",
        answer: "Li riconsegniamo ordinati o gestiamo la distruzione certificata. Avrai sempre un inventario chiaro di ciò che è stato processato."
    },
    {
        question: "In che zone operate?",
        answer: "Siamo specialisti della Campania e delle regioni vicine (Puglia, Basilicata, Lazio). Essere vicini significa velocità, meno costi e assistenza reale."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 md:px-12 py-24 md:py-32 bg-transparent w-full">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">Domande Frequenti</h2>
                    <p className="text-gray-500 max-w-2xl text-lg mx-auto">
                        Tutto chiaro? Ecco le risposte alle domande più comuni sul nostro servizio.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col gap-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 md:p-10 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex flex-col md:flex-row justify-between items-center gap-4 transition-colors focus:outline-none"
                                >
                                    <span className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight flex-1 md:text-left">{faq.question}</span>
                                    <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-black" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-black" />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                                        }`}
                                >
                                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg text-center md:text-left">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
