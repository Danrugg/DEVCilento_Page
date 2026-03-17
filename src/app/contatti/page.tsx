"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

export default function Contatti() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000); // Reset success message after 5 seconds
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 pt-32 pb-24 md:pt-40 px-6 md:px-12 max-w-[1800px] w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                    {/* Left Column: Info */}
                    <div className="flex flex-col">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                            Parliamo del tuo progetto
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed font-light mb-12 max-w-lg">
                            Dalla digitalizzazione on-site allo sviluppo software, il nostro team è pronto a raggiungerti ovunque sia la tua azienda.
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            <a href="mailto:info@devcilento.it" className="flex items-center gap-4 text-lg hover:text-gray-500 transition-colors group">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                    <Mail className="w-5 h-5 text-black" />
                                </div>
                                <span className="font-medium">info@devcilento.it</span>
                            </a>
                            <a href="https://wa.me/390000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-gray-500 transition-colors group">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                    <MessageCircle className="w-5 h-5 text-black" />
                                </div>
                                <span className="font-medium">WhatsApp</span>
                            </a>
                            <a href="https://linkedin.com/company/devcilento" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-gray-500 transition-colors group">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                    <Linkedin className="w-5 h-5 text-black" />
                                </div>
                                <span className="font-medium">LinkedIn</span>
                            </a>
                        </div>

                        <div className="bg-gray-50 border border-zinc-200 p-6 rounded-2xl max-w-md">
                            <p className="font-medium text-black">
                                Disponibili per sopralluoghi tecnici in tutta Italia
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full max-w-xl lg:max-w-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome e Cognome *</label>
                                <input required type="text" id="name" className="w-full p-4 bg-transparent border border-zinc-200 rounded-xl focus:outline-none focus:border-black transition-colors" placeholder="Mario Rossi" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                                <input required type="email" id="email" className="w-full p-4 bg-transparent border border-zinc-200 rounded-xl focus:outline-none focus:border-black transition-colors" placeholder="mario@azienda.it" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-700">Azienda</label>
                                <input type="text" id="company" className="w-full p-4 bg-transparent border border-zinc-200 rounded-xl focus:outline-none focus:border-black transition-colors" placeholder="Nome della tua azienda" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Oggetto *</label>
                                <select required id="subject" defaultValue="" className="w-full p-4 bg-transparent border border-zinc-200 rounded-xl focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer">
                                    <option value="" disabled>Seleziona un&apos;opzione</option>
                                    <option value="digitalizzazione">Digitalizzazione</option>
                                    <option value="software">Sviluppo Software</option>
                                    <option value="altro">Altro</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Messaggio *</label>
                                <textarea required id="message" rows={5} className="w-full p-4 bg-transparent border border-zinc-200 rounded-xl focus:outline-none focus:border-black transition-colors resize-none" placeholder="Parlaci del tuo progetto..."></textarea>
                            </div>

                            {isSuccess && (
                                <div className="p-4 bg-green-50 text-green-800 border border-green-200 rounded-xl text-center font-medium my-2 animate-in fade-in duration-300">
                                    Messaggio inviato. Ti risponderemo entro 24 ore.
                                </div>
                            )}

                            <button 
                                type="submit" 
                                disabled={isSubmitting || isSuccess}
                                className="w-full bg-black text-white px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-gray-800 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-h-[56px]"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    "Invia Richiesta"
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-2">
                                Inviando questo modulo accetti la nostra{" "}
                                <button 
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsPrivacyOpen(true);
                                    }}
                                    className="underline hover:text-black transition-colors"
                                >
                                    Privacy Policy
                                </button>
                                .
                            </p>
                        </form>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="border-t border-zinc-200 pt-16 pb-8 md:pt-24 md:pb-12 text-center flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Preferisci parlare subito?</h2>
                    <a 
                        href="https://wa.me/390000000000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-lg tracking-wide hover:bg-[#20bd5a] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chatta su WhatsApp
                    </a>
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
