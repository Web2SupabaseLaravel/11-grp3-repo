import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import AppointmentSection from "../components/AppointmentSection";
import LocationsSection from "../components/LocationsSection";
import StatsSection from "../components/StatsSection";
import TestimonialSection from "../components/TestimonialSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AppointmentSection />
      <LocationsSection />
      <StatsSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
