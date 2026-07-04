import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

// Elegant editorial serif for all display text
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://gopihomestay.netlify.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gopi Homestay | Homestay Near Jim Corbett, Uttarakhand",
    template: "%s | Gopi Homestay",
  },
  description:
    "A family-run homestay in the Kumaon hills near Jim Corbett, Almora. Misty mornings, pine forests, home-cooked Kumaoni meals and warm hospitality from ₹1,000/night.",
  keywords: [
    "Gopi Homestay",
    "homestay near Jim Corbett",
    "homestay in Uttarakhand",
    "Almora homestay",
    "Kumaon homestay",
    "budget stay Jim Corbett",
    "nature retreat Uttarakhand",
    "mountain homestay India",
  ],
  authors: [{ name: "Gopi Homestay", url: SITE_URL }],
  creator: "Gopi Homestay",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Gopi Homestay | Serene Stay Near Jim Corbett, Uttarakhand",
    description:
      "Wake up to misty mornings and pine-scented air. A warm, family-run homestay in the Kumaon hills near Jim Corbett National Park.",
    url: SITE_URL,
    siteName: "Gopi Homestay",
    images: [
      {
        url: "/images/main.jpeg",
        width: 1200,
        height: 630,
        alt: "Gopi Homestay nestled in the pine forests of Uttarakhand",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gopi Homestay | Serene Stay Near Jim Corbett, Uttarakhand",
    description:
      "A family-run mountain homestay in the Kumaon hills near Jim Corbett. Misty mornings, pine forests and home-cooked meals.",
    images: ["/images/main.jpeg"],
  },
  category: "travel",
};

export const viewport = {
  themeColor: "#35463C",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <WhatsappButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
