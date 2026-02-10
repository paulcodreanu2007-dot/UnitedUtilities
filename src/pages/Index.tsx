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
  "name": "United Utilities",
  "description": "Professional excavation and underground utility services serving Bloomington and Southern Indiana.",
  "address": { 
    "@type": "PostalAddress", 
    "addressLocality": "Bloomington", 
    "addressRegion": "IN" 
  },
  "geo": { 
    "@type": "GeoCoordinates", 
    "latitude": "39.1653", 
    "longitude": "-86.5264" 
  },
  "telephone": "(812) 271-4432",
  "priceRange": "$$$",
  "areaServed": ["Bloomington", "Ellettsville", "Bedford", "Martinsville", "Columbus", "Nashville", "Southern Indiana"],
  "openingHours": "Mo-Fr 07:00-17:00, Sa 08:00-12:00",
};

const Index = () => (
  <>
    <Helmet>
      {/* THIS CONTROLS THE BROWSER TAB TEXT */}
      <title>United Utilities | Southern Indiana Excavation & Utilities</title>
      
      {/* THIS CONTROLS THE FAVICON (Ensure your file in /public is named favicon.ico) */}
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content="Precision excavation and underground utility solutions in Bloomington, IN. Specialized in site preparation, water/sewer repair, and emergency utility dispatch." />
      <meta name="keywords" content="United Utilities, Bloomington excavation, Indiana utility contractor, sewer repair, grading, site prep Bloomington" />
      
      {/* SOCIAL MEDIA TAGS */}
      <meta property="og:title" content="United Utilities | Professional Infrastructure Services" />
      <meta property="og:description" content="Serving Southern Indiana with professional excavation and utility solutions. Built with grit." />
      <meta property="og:type" content="website" />
      
      {/* REGIONAL GEOGRAPHY */}
      <meta name="geo.region" content="US-IN" />
      <meta name="geo.placename" content="Bloomington" />
      <meta name="geo.position" content="39.1653;-86.5264" />
      <meta name="ICBM" content="39.1653, -86.5264" />
      
      {/* BRANDING */}
      <meta name="theme-color" content="#C8102E" />
      <meta name="robots" content="index, follow" />
      
      <link rel="canonical" href="https://www.unitedutilitiesin.com/" />
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
