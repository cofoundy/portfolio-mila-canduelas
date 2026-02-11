import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cofoundy.github.io/portfolio-mila-canduelas"),
  title: "Mila Canduelas | Visual Artist",
  description:
    "Peruvian visual artist based in Cardiff, Wales. Painting, sculpture, weaving, encaustic, cyanotype. Inspired by ancestral knowledge and Mother Nature.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Mila Canduelas | Visual Artist",
    description:
      "Peruvian visual artist based in Cardiff, Wales. Inspired by ancestral knowledge and Mother Nature.",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mila Canduelas | Visual Artist",
    description:
      "Peruvian visual artist based in Cardiff, Wales. Inspired by ancestral knowledge and Mother Nature.",
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
      </body>
    </html>
  );
}
