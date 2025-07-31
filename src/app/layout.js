import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gopi Homestay | Best Homestay in Jim Corbett, Uttarakhand",
  description:
    "Experience serene nature at Gopi Homestay near Jim Corbett, Uttarakhand. Comfortable rooms, beautiful views, and unmatched hospitality await you.",
  keywords:
    "Gopi Homestay, homestay in Jim Corbett, homestay in Uttarakhand, hotels near Jim Corbett, affordable homestay, Jim Corbett stay, Uttarakhand nature stay",
  authors: [{ name: "Gopi Homestay", url: "https://gopihomestay.netlify.com" }],
  openGraph: {
    title: "Gopi Homestay | Serene Stay in Jim Corbett, Uttarakhand",
    description:
      "Plan your stay at Gopi Homestay for an unforgettable nature retreat near Jim Corbett National Park.",
    url: "https://gopihomestay.netlify.com",
    siteName: "Gopi Homestay",
    images: [
      {
        url: "https://scontent.fdel77-1.fna.fbcdn.net/v/t39.30808-1/301788629_452151666932537_2664775613871857998_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=Nn4dCXI6TnAQ7kNvwE94VJj&_nc_oc=Adka3U7dIEczV-Tidyymmw1KTyQcS1RurVh3RZ6RDFyVT6rIPAfGuBuyCEyK4sqdK_0&_nc_zt=24&_nc_ht=scontent.fdel77-1.fna&_nc_gid=1xj0grQQkxHwvmzFFXlEZw&oh=00_AfSyW93Aq1N854VowHz_MeyMx51w3eL8JCzdL75vBn_Lfw&oe=6891511F", // Add actual OG image
        width: 1200,
        height: 630,
        alt: "Gopi Homestay surrounded by greenery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
