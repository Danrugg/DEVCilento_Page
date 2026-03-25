"use client";

import { useState, useEffect } from "react";
import PrivacyModal from "./PrivacyModal";
import CookiePolicyModal from "./CookiePolicyModal";

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isCookieOpen, setIsCookieOpen] = useState(false);

    // Blocca lo scroll della pagina sottostante quando il modale è aperto
    useEffect(() => {
        if (isPrivacyOpen || isCookieOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isPrivacyOpen, isCookieOpen]);

    return (
        <footer className="bg-[#171717] text-white py-16 px-6 md:px-12 mt-auto">
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div className="flex flex-col gap-6 max-w-sm">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">DEVCilento</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Sviluppiamo software su misura e sistemi di archiviazione intelligente per eliminare la &quot;carta morta&quot; e far crescere il tuo business.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500">Contatti</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-300">
                            <a href="mailto:info@devcilento.it" className="hover:text-white transition-colors">info@devcilento.it</a>
                            <a href="tel:+393715566672" className="hover:text-white transition-colors">+39 371 556 6672</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500">Sede</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-300">
                            <p>Via Poeta Vincenzo D&apos;orsi</p>
                            <p>Moio della Civitella (SA)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} DEVCilento. Tutti i diritti riservati.</p>
                    <p className="hidden md:block">|</p>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsPrivacyOpen(true);
                            }}
                            className="hover:text-gray-300 hover:underline transition-colors"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsCookieOpen(true);
                            }}
                            className="hover:text-gray-300 hover:underline transition-colors"
                        >
                            Cookie Policy
                        </button>
                    </div>
                </div>
                {/*<p>P.IVA: 00000000000</p>*/}
            </div>

            <PrivacyModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
            />
            <CookiePolicyModal
                isOpen={isCookieOpen}
                onClose={() => setIsCookieOpen(false)}
            />
        </footer>
    );
}
