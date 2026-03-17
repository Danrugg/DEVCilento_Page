"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
    const [marketingEnabled, setMarketingEnabled] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setTimeout(() => {
                setIsVisible(true);
                setIsRendered(true);
            }, 0);
        } else {
            try {
                const parsedConsent = JSON.parse(consent);
                if (parsedConsent.analytics) {
                    // Update consent if analytics were previously accepted
                    window.gtag?.('consent', 'update', {
                        'analytics_storage': 'granted'
                    });
                }
                if (parsedConsent.marketing) {
                    window.gtag?.('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                    });
                    window.fbq?.('consent', 'grant');
                }
            } catch {
                // Handle old consent string format safely
            }
        }
    }, []);

    const saveSettings = (analytics: boolean, marketing: boolean) => {
        const consentData = { technical: true, analytics, marketing };
        localStorage.setItem("cookie-consent", JSON.stringify(consentData));
        
        if (analytics) {
            window.gtag?.('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
        
        if (marketing) {
            window.gtag?.('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
            window.fbq?.('consent', 'grant');
        }
        
        setIsVisible(false);
        setShowModal(false);
        setTimeout(() => setIsRendered(false), 500);
    };

    const handleAcceptAll = () => {
        setAnalyticsEnabled(true);
        setMarketingEnabled(true);
        saveSettings(true, true);
    };
    const handleRejectAll = () => saveSettings(false, false);
    const handleSavePreferences = () => saveSettings(analyticsEnabled, marketingEnabled);

    if (!isRendered) return null;

    return (
        <>
            {/* Banner Principale */}
            <div 
                className={`fixed bottom-0 left-0 right-0 z-40 bg-white py-6 px-6 md:px-12 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] transition-opacity duration-500 ${isVisible && !showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-black text-sm md:text-base leading-relaxed flex-1">
                        Utilizziamo cookie tecnici e analitici per garantirti la migliore esperienza sul nostro sito e per analizzare il traffico in modo anonimo. Proseguendo la navigazione o cliccando su Accetta, acconsenti al loro utilizzo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                        <button 
                            onClick={() => setShowModal(true)}
                            className="text-sm font-medium text-gray-500 hover:text-black underline transition-colors"
                        >
                            Gestisci preferenze
                        </button>
                        <button 
                            onClick={handleRejectAll}
                            className="py-3 px-6 text-sm font-medium border border-gray-300 text-black hover:bg-gray-50 transition-colors uppercase tracking-wider text-center"
                        >
                            Solo tecnici
                        </button>
                        <button 
                            onClick={handleAcceptAll}
                            className="py-3 px-6 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-wider text-center"
                        >
                            Accetta tutti
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Preferenze Granulari */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 transition-opacity">
                    <div className="bg-white w-full max-w-lg shadow-2xl p-6 md:p-8 flex flex-col gap-6">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-2">Preferenze Cookie</h2>
                            <p className="text-sm text-gray-500">
                                Gestisci le tue preferenze sui cookie. I cookie tecnici sono necessari per il funzionamento del sito.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* Cookie Tecnici */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Cookie Tecnici (Necessari)</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Indispensabili per il funzionamento del sito e non possono essere disattivati.
                                    </p>
                                </div>
                                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 pointer-events-none">
                                    <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition" />
                                </div>
                            </div>

                            {/* Cookie Analitici */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Cookie Analitici (Google Analytics)</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Ci aiutano a capire come gli utenti usano il sito per migliorarlo.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${analyticsEnabled ? 'bg-black' : 'bg-gray-200'}`}
                                >
                                    <span className={`inline-block h-4 w-4 rounded-full bg-white transition transform ${analyticsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                                </button>
                            </div>

                            {/* Cookie Marketing e Social */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Cookie di Marketing e Social</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Permettono di mostrarti pubblicità personalizzata su Facebook, Instagram e LinkedIn e misurare l&apos;efficacia delle nostre campagne.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setMarketingEnabled(!marketingEnabled)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${marketingEnabled ? 'bg-black' : 'bg-gray-200'}`}
                                >
                                    <span className={`inline-block h-4 w-4 rounded-full bg-white transition transform ${marketingEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end">
                            <button 
                                onClick={handleAcceptAll}
                                className="w-full sm:w-auto py-3 px-6 text-sm font-medium border border-gray-300 text-black hover:bg-gray-50 transition-colors uppercase tracking-wider"
                            >
                                Accetta tutti
                            </button>
                            <button 
                                onClick={handleSavePreferences}
                                className="w-full sm:w-auto py-3 px-6 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-wider"
                            >
                                Salva scelte
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Ensure gtag is declared for TypeScript
declare global {
    interface Window {
        dataLayer: unknown[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtag?: (...args: any[]) => void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fbq?: (...args: any[]) => void;
    }
}
