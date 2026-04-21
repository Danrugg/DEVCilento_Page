import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CircuitBackground from "@/components/CircuitBackground";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVCilento",
  description: "Sviluppo software su misura",
  icons: {
    icon: [
      { url: '/favicon.ico?v=4', rel: 'icon', type: 'image/x-icon' },
    ],
    shortcut: [
      { url: '/favicon.ico?v=4', rel: 'shortcut icon' },
    ],
    apple: [
      { url: '/favicon.ico?v=4', rel: 'apple-touch-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* CARICHIAMO GTAG UNA SOLA VOLTA */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-DEVCILENTO2026`}
        />

        {/* CONFIGURAZIONE GA4 E ADS INSIEME */}
        <Script
          id="google-analytics-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Blocco preventivo dei cookie
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });

              // Inizializzazione di entrambi i servizi
              gtag('config', 'G-DEVCILENTO2026');
              gtag('config', 'google-ads-id-placeholder');
            `,
          }}
        />

        {/* META PIXEL CON CONSENSO NEGATO DI DEFAULT */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('consent', 'revoke'); // Ottimo, blocca prima dell'init
              fbq('init', 'pixel-id-placeholder');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-transparent relative min-h-screen`}>
        <CircuitBackground />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}