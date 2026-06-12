import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freshfaceherbals.com"),
  title: "Fresh Face Herbals | Salon Herbals from Our Own Land",
  description:
    "Herbals made exclusively for salon service. Founded by Jawahar in Tamil Nadu — ancestral formulas using ingredients from our own land. 100% natural, zero synthetics.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Fresh Face Herbals | Salon Herbals from Our Own Land",
    description:
      "Herbals made exclusively for salon service. Founded by Jawahar in Tamil Nadu — ancestral formulas using ingredients from our own land.",
    url: "https://freshfaceherbals.com",
    siteName: "Fresh Face Herbals",
    images: [{ url: "/freshface-harbals-logo.png", width: 512, height: 512 }],
    locale: "en_IN",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fresh Face Herbals",
  url: "https://freshfaceherbals.com",
  logo: "https://freshfaceherbals.com/freshface-harbals-logo.png",
  sameAs: [
    "https://www.instagram.com/freshface_herbals",
    "https://www.youtube.com/@freshfaceherbals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${jost.variable} bg-forest font-sans text-cream antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
