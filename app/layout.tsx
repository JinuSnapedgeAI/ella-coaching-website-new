import InitScroll from "@/components/scroll/InitScroll";
import "../public/css/styles.css";
import { Urbanist } from "next/font/google";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import ScrollTop from "@/components/scroll/ScrollTop";
import { Metadata, Viewport } from "next";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "Ella | Confidence & Mindset Coach";
const description =
  "Stop doubting yourself. Start showing up. Confidence and mindset coaching with Ella: a free confidence guide, a 6-week 1:1 program and flexible coaching packages.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Confidence & Mindset Coach | Ella – Stop Doubting Yourself",
    template: "%s | Ella",
  },
  description,
  applicationName: siteName,
  keywords: [
    "confidence coach",
    "mindset coach",
    "build self-confidence",
    "overcome self-doubt",
    "imposter syndrome coaching",
    "6-week confidence program",
    "1:1 life coaching",
  ],
  alternates: { canonical: "/" },
  manifest: "/img/favicon/manifest.webmanifest",
  icons: {
    icon: "/img/favicon/icon.svg",
    apple: "/img/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "Stop doubting yourself. Start showing up. | Ella",
    description,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ella | Confidence & Mindset Coach" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "Stop doubting yourself. Start showing up. | Ella",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f0ea",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "Ella – Confidence & Mindset Coaching",
      url: siteUrl,
      description,
      logo: `${siteUrl}/img/logo.png`,
      image: `${siteUrl}/img/logo.png`,
      serviceType: "Confidence and mindset coaching",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Coaching packages",
        itemListElement: [
          { "@type": "Offer", name: "Spark – one-time session", price: "149", priceCurrency: "USD" },
          { "@type": "Offer", name: "Bloom – 6-week program", price: "690", priceCurrency: "USD" },
          { "@type": "Offer", name: "Flourish – 12-week program", price: "1190", priceCurrency: "USD" },
        ],
      },
    },
  ],
};

// Keep the page in the soft light scheme (the theme only ships a light palette here).
const setColorSchemeScript = `document.documentElement.setAttribute('color-scheme','light');`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" color-scheme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={urbanist.variable}>
        {children}
        <LenisSmoothScroll />
        <ScrollTop />
        <InitScroll />
      </body>
    </html>
  );
}
