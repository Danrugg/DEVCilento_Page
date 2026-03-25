import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVCilento",
  description: "Sviluppo software su misura e sistemi di archiviazione intelligente",
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

import CircuitBackground from "@/components/CircuitBackground";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SOSTITUIRE CON ID REALE GA4 E GOOGLE ADS QUI */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-DEVCILENTO2026`}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=google-ads-id-placeholder`}
        />
        <Script
          id="google-analytics-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });

              gtag('config', 'G-DEVCILENTO2026');
              gtag('config', 'google-ads-id-placeholder');
            `,
          }}
        />

        {/* SOSTITUIRE CON ID REALE META PIXEL QUI */}
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
              fbq('consent', 'revoke'); // Consenso negato di default
              fbq('init', 'pixel-id-placeholder');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* SOSTITUIRE CON ID REALE LINKEDIN INSIGHT TAG QUI */}
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "linkedin-id-placeholder";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
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
