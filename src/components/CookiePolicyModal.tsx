"use client";

import { X } from "lucide-react";

interface CookiePolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CookiePolicyModal({ isOpen, onClose }: CookiePolicyModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Overlay cliccabile per chiudere */}
            <div className="absolute inset-0" onClick={onClose} />

            {/* Quadro del Modal */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] flex flex-col transform transition-all">
                {/* Intestazione fissa con Bottone X */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
                    <h2 className="text-2xl font-bold tracking-tight text-black">Cookie Policy</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Chiudi"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Contenuto Scrollabile */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="prose prose-sm md:prose-base max-w-none text-gray-700 font-light leading-relaxed">
                        <p className="mb-6">
                            La presente Cookie Policy ha lo scopo di illustrare i tipi e le categorie di cookie, le finalità e le modalità di utilizzo dei cookie da parte di DEVCilento, nonché di fornire indicazioni agli utenti circa le azioni per rifiutare o eliminare i cookie presenti.
                        </p>

                        <h3 className="text-lg font-bold text-black mb-3">Cookie Tecnici</h3>
                        <p className="mb-6">
                            I cookie tecnici sono quelli il cui utilizzo non richiede il consenso dell&apos;utente. Essi sono essenziali per il corretto funzionamento del sito e per consentire la navigazione e l&apos;utilizzo delle varie funzioni (ad esempio, mantenere aperta la sessione o memorizzare le preferenze di navigazione).
                        </p>

                        <h3 className="text-lg font-bold text-black mb-3">Cookie Analitici</h3>
                        <div className="mb-6">
                            I cookie analitici vengono utilizzati per raccogliere informazioni sull&apos;uso del sito. Usiamo queste informazioni per analisi statistiche, per migliorare il sito e semplificarne l&apos;utilizzo.
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Google Analytics:</strong> Utilizzato per analizzare le statistiche di traffico in modo aggregato.</li>
                            </ul>
                        </div>

                        <h3 className="text-lg font-bold text-black mb-3">Cookie di Marketing</h3>
                        <div className="mb-6">
                            Questi cookie sono volti a creare profili completi dell&apos;utente al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dallo stesso nell&apos;ambito della navigazione in rete. L&apos;attivazione di questi cookie richiede il consenso esplicito.
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Pixel di Meta:</strong> Utilizzato per tracciare le conversioni e creare un pubblico personalizzato.</li>
                                <li><strong>LinkedIn Insight Tag:</strong> Utilizzato per analisi e misurazione delle performance delle campagne su LinkedIn.</li>
                            </ul>
                        </div>

                        <h3 className="text-lg font-bold text-black mb-3">Gestione dei Cookie</h3>
                        <p className="mb-6">
                            L&apos;utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. Attenzione: la disabilitazione totale o parziale dei cookie tecnici può compromettere l&apos;utilizzo delle funzionalità del sito.
                        </p>
                    </div>
                </div>

                {/* Footer fisse del Modal */}
                <div className="p-6 border-t border-gray-100 flex-shrink-0 flex justify-end bg-gray-50 rounded-b-lg">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors tracking-wide text-sm md:text-base w-full sm:w-auto"
                    >
                        Chiudi e torna al sito
                    </button>
                </div>
            </div>
        </div>
    );
}
