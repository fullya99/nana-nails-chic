import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-nails.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mains avec ongles élégants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-primary/80 via-pink-secondary/70 to-turquoise/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-gray-dark mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-turquoise" />
            <span className="text-sm font-medium">Salon de manucure professionnel</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-gray-dark mb-6 leading-tight">
            Sublimez vos ongles avec
            <br />
            <span className="text-gradient">Les Ongles de Nana</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-dark/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'art de la manucure dans notre salon élégant. 
            Des soins personnalisés pour des ongles parfaits qui révèlent votre personnalité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-primary text-lg px-8 py-4 animate-scale-in">
              <Calendar className="w-5 h-5 mr-2" />
              Prendre Rendez-vous
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4 bg-white/20 backdrop-blur-sm border-white/40 text-gray-dark hover:bg-white/30"
            >
              Voir nos Prestations
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in">
              <div className="text-3xl font-playfair font-bold text-gray-dark mb-2">500+</div>
              <div className="text-sm text-gray-dark/80">Clientes satisfaites</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-playfair font-bold text-gray-dark mb-2">3 ans</div>
              <div className="text-sm text-gray-dark/80">D'expérience</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-playfair font-bold text-gray-dark mb-2">100%</div>
              <div className="text-sm text-gray-dark/80">Produits de qualité</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gray-dark/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-dark/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;