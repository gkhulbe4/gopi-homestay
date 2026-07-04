import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms/Rooms";
import Experiences from "@/components/Experiences";
import Scenery from "@/components/Scenery/Scenery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/Faq";

const SITE_URL = "https://gopihomestay.netlify.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL}/#lodging`,
  name: "Gopi Homestay",
  description:
    "A family-run homestay in the Kumaon hills near Jim Corbett, Almora. Misty mornings, pine forests, home-cooked Kumaoni meals and warm hospitality.",
  image: `${SITE_URL}/images/main.jpeg`,
  url: SITE_URL,
  telephone: "+91-9650765002",
  email: "forestin2019@gmail.com",
  priceRange: "₹1000–₹2500",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Village Panwadeokhan, Near Jim Corbett Forest, Tehsil Salt",
    addressLocality: "Almora",
    addressRegion: "Uttarakhand",
    postalCode: "263646",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.56889,
    longitude: 79.22608,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hot Water", value: true },
    { "@type": "LocationFeatureSpecification", name: "Home-cooked Meals", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bonfire", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mountain View", value: true },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "10",
    bestRating: "5",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Rooms />
      <Experiences />
      <Scenery />
      <Testimonials />
      <Faq />
      <GetInTouch />
    </>
  );
}
