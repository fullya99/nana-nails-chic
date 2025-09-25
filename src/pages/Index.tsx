import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <Gallery />
        <AboutSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
