"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import { Mail, MessageCircle } from "lucide-react";

export default function Contatti() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-transparent">
            <Header />

            <main className="flex-1 pt-32 pb-24 md:pt-40 px-6 md:px-12 max-w-[1800px] w-full mx-auto flex flex-col items-center">
                <div className="max-w-4xl text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                        Siamo qui per ascoltarti: di cosa ha bisogno la tua attività oggi?
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                        Niente moduli complessi o attese. La tua comunicazione arriva direttamente a noi, nel massimo rispetto della tua privacy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
                    {/* Card 1: WhatsApp */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                            <MessageCircle className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-tight">
                            Chat Rapida
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg flex-grow">
                            Per domande veloci, dubbi o un primo contatto informale direttamente sul tuo smartphone.
                        </p>
                        <a
                            href="https://wa.me/393715566672"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-black text-white p-4 rounded-2xl transition-all duration-300 shadow hover:shadow-lg group/btn mt-auto"
                        >
                            <MessageCircle className="w-6 h-6 text-white" />
                            <div className="flex flex-col items-start text-left">
                                <span className="font-bold tracking-tight text-sm">Inizia Chat</span>
                                <span className="text-[10px] text-zinc-300">Risposta rapida su WhatsApp</span>
                            </div>
                        </a>
                    </div>

                    {/* Card 2: Email */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-blue-950 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-6 group">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                            <Mail className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-tight">
                            Inviaci un Progetto
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg flex-grow">
                            Per richieste dettagliate, invio di file tecnici o per richiedere un preventivo formale via email.
                        </p>
                        <a
                            href="mailto:info@devcilento.it"
                            className="w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-black text-white p-4 rounded-2xl transition-all duration-300 shadow hover:shadow-lg group/btn mt-auto"
                        >
                            <Mail className="w-6 h-6 text-white" />
                            <div className="flex flex-col items-start text-left">
                                <span className="font-bold tracking-tight text-sm">Invia Email</span>
                                <span className="text-[10px] text-zinc-300">Gestione sicura dei dati</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="text-center px-4">
                    <p className="text-sm text-gray-400 font-light">
                        Operativi dal Lunedì al Venerdì, 09:00 - 18:00. Rispondiamo mediamente entro 2 ore.
                    </p>
                </div>
            </main>

            <Footer />

            <PrivacyModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
            />
        </div>
    );
}
