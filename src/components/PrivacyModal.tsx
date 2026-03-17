"use client";

import { X } from "lucide-react";

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Overlay cliccabile per chiudere */}
            <div className="absolute inset-0" onClick={onClose} />

            {/* Quadro del Modal */}
            <div className="relative bg-white w-full max-w-[800px] h-full max-h-[80vh] rounded-2xl shadow-2xl flex flex-col transform transition-all">
                {/* Intestazione fissa con Bottone X */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
                    <h2 className="text-2xl font-bold tracking-tight text-black">Privacy Policy</h2>
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
                            La presente Privacy Policy descrive le modalità di gestione del sito web in riferimento al trattamento dei dati personali degli utenti.
                        </p>

                        <h3 className="text-lg font-bold text-black mb-3">1. Titolare del Trattamento</h3>
                        <p className="mb-6">
                            Il Titolare del Trattamento dei dati è DEVCilento, con sede legale e operativa nel Cilento, Italia. Per qualsiasi richiesta relativa alla privacy, è possibile contattarci all&apos;indirizzo email: info@devcilento.it.
                        </p>

                        <h3 className="text-lg font-bold text-black mb-3">2. Dati Raccolti e Finalità</h3>
                        <p className="mb-6">
                            Raccogliamo dati personali (es. nome, indirizzo email) solo quando forniti volontariamente dall&apos;utente tramite form di contatto. Tali dati sono utilizzati esclusivamente per rispondere alle richieste presentate. Inoltre, raccogliamo dati di navigazione in modo anonimo per garantire il corretto funzionamento del sito.
                        </p>

                        <h3 className="text-lg font-bold text-black mb-3">3. Cookie di Google, Meta e LinkedIn</h3>
                        <p className="mb-6">
                            Nel rispetto della direttiva ePrivacy e del GDPR, il nostro sito implementa un banner cookie per la gestione del consenso.
                            Utilizziamo <strong>Google Analytics</strong> per statistiche aggregate, il <strong>Pixel di Meta</strong> e il <strong>LinkedIn Insight Tag</strong> per misurare l&apos;efficacia delle nostre campagne di marketing. Tutti gli script di profilazione partono bloccati di default e vengono attivati solo previo consenso esplicito dell&apos;utente (impostando i flag di <em>ad_storage</em>, <em>analytics_storage</em>, ecc. su &quot;granted&quot;).
                        </p>

                        <h3 className="text-lg font-bold text-black mb-3">4. Diritti GDPR dell&apos;Utente</h3>
                        <div className="mb-6">
                            Ti sono riconosciuti tutti i diritti previsti dagli art. 15-22 del GDPR (Regolamento UE 2016/679), tra cui il diritto di:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Ottenere la conferma dell&apos;esistenza o meno di tuoi dati personali.</li>
                                <li>Chiedere la rettifica, l&apos;aggiornamento o la cancellazione degli stessi (diritto all&apos;oblio).</li>
                                <li>Opporti al trattamento dei tuoi dati per motivi legittimi.</li>
                                <li>Revocare il consenso ai cookie di profilazione e marketing in qualsiasi momento tramite il pannello &quot;Gestisci preferenze&quot;.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer fisse del Modal */}
                <div className="p-6 border-t border-gray-100 flex-shrink-0 flex justify-end bg-gray-50 rounded-b-2xl">
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
