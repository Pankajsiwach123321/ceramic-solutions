import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "@/app/styles/global.css";
import { inter } from "./lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.CHANGEME.com"),
  title: {
    default: "template change me",
    template: "%s | Pixel Perfect Webdesign & Security",
  },
  description:
    "Elevate your online presence with our expert web solutions tailored to amplify your brand's success in the digital landscape. Expert Web Design in Knoxville TN",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Unleash Your Digital Potential Today",
    siteName: "TEMPLATE CHANGE ME",
    description:
      "Elevate your online presence with our expert web solutions tailored to amplify your brand's success in the digital landscape.",
    url: "https://www.CHANGEME.com",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://CHANGEME.com/#organization",
      name: "TEMPLATE CHANGE ME",
      url: "https://CHANGEME.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://CHANGEME.com/#website",
      url: "https://CHANGEME.com",
      name: "TEMPLATE CHANGE ME",
      alternateName: "TEMPLATE CHANGE ME",
      publisher: {
        "@id": "https://CHANGEME.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://CHANGEME.com/#webpage",
      url: "https://CHANGEME.com",
      name: "TEMPLATE CHANGE ME",
      about: {
        "@id": "https://CHANGEME.com/#organization",
      },
      isPartOf: {
        "@id": "https://CHANGEME.com/#website",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-inter`}>{children}</body>
    </html>
  );
}
