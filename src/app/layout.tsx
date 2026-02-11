import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Mila Canduelas | Visual Artist",
  description: "Peruvian visual artist based in Cardiff, UK. Inspired by ancestral knowledge and Mother Nature. Painting, sculpture, weaving, encaustic, cyanotype.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Mila Canduelas | Visual Artist",
    description: "Peruvian visual artist based in Cardiff, UK. Inspired by ancestral knowledge and Mother Nature.",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mila Canduelas | Visual Artist",
    description: "Peruvian visual artist based in Cardiff, UK. Inspired by ancestral knowledge and Mother Nature.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="lazyOnload"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
