import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero/Hero";
import Rooms from "@/components/Rooms/Rooms";
import Scenery from "@/components/Scenery/Scenery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Gopi Homestay",
              image:
                "https://scontent.fdel77-1.fna.fbcdn.net/v/t39.30808-1/301788629_452151666932537_2664775613871857998_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=Nn4dCXI6TnAQ7kNvwE94VJj&_nc_oc=Adka3U7dIEczV-Tidyymmw1KTyQcS1RurVh3RZ6RDFyVT6rIPAfGuBuyCEyK4sqdK_0&_nc_zt=24&_nc_ht=scontent.fdel77-1.fna&_nc_gid=1xj0grQQkxHwvmzFFXlEZw&oh=00_AfSyW93Aq1N854VowHz_MeyMx51w3eL8JCzdL75vBn_Lfw&oe=6891511F",
              description:
                "Affordable and scenic homestay in Uttarakhand near Jim Corbett. Ideal for nature lovers and weekend travelers.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Uttarakhand",
                addressRegion: "IN",
                postalCode: "263646",
                streetAddress:
                  "Village Panwadeokhan,Near Jim Corbett Forest  Tehsil Salt Distt. Almora ,Uttarakhand",
              },
              url: "https://gopihomestay.netlify.com",
              telephone: "+91-9650765002",
              priceRange: "₹1500 - ₹3500",
            }),
          }}
        />
      </Head>
      <Hero />
      <Rooms />
      <Scenery />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
