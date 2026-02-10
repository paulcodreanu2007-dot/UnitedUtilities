import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alicia's Services",
  description: "Woman-owned construction, mechanical, and luxury remodeling company serving Kansas City metro.",
  address: { "@type": "PostalAddress", addressLocality: "Kansas City", addressRegion: "MO" },
  geo: { "@type": "GeoCoordinates", latitude: "39.0997", longitude: "-94.5786" },
  telephone: "(816) 555-0100",
  priceRange: "$$",
  areaServed: ["Kansas City MO", "Kansas City KS", "Overland Park", "Leawood", "Plaza", "Brookside", "Waldo", "Mission Hills", "Prairie Village", "Lee's Summit"],
  openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-15:00",
};

const Index = () => (
  <>
    <Helmet>
      <title>Alicia's Services | Kansas City Construction, Plumbing &amp; Luxury Remodeling</title>
      <meta name="description" content="Woman-owned construction company serving KC metro. Expert plumbing, HVAC, luxury remodels & emergency repairs. Licensed in MO & KS. Get your free consultation today." />
      <meta name="keywords" content="Kansas City construction, KC plumbing, luxury remodeling, woman-owned contractor, emergency HVAC, Missouri Kansas contractor" />
      <meta property="og:title" content="Alicia's Services | Kansas City's Trusted Construction Partner" />
      <meta property="og:description" content="From emergency plumbing to luxury remodels - honest pricing, expert craftsmanship, woman-owned integrity." />
      <meta property="og:type" content="website" />
      <meta name="geo.region" content="US-MO" />
      <meta name="geo.placename" content="Kansas City" />
      <meta name="geo.position" content="39.0997;-94.5786" />
      <meta name="ICBM" content="39.0997, -94.5786" />
      <meta name="theme-color" content="#1B365D" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href="https://www.aliciasservices.com/" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>

    <Navigation />
    <main id="main-content">
      <Hero />
      <WhyChooseUs />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
      <ServiceAreas />
    </main>
    <Footer />
  </>
);

export default Index;
