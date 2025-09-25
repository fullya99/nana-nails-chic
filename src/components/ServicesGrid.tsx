import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Scissors, Sparkles, Heart, Clock, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      icon: Palette,
      title: "Pose Capsule / Popit",
      description: "Manucure russe + extension avec la technique au choix (réalisée avec du gel).",
      duration: "2h",
      price: "45€",
      features: ["Manucure russe", "Extension gel", "Technique au choix", "Finition brillante"]
    },
    {
      icon: Sparkles,
      title: "Remplissage",
      description: "Manucure russe + remplissage après 4 semaines maximum.",
      duration: "1h30",
      price: "35€",
      features: ["Manucure russe", "Remplissage", "Retouche forme", "Semi-permanent"]
    },
    {
      icon: Heart,
      title: "Gainage Ongle Naturel",
      description: "Renforcement de l'ongle naturel avec du gel (sans rallongement).",
      duration: "1h15",
      price: "35€",
      features: ["Renforcement gel", "Sans rallongement", "Base protectrice", "Finition naturelle"]
    },
    {
      icon: Scissors,
      title: "Pédicure Russe + Renfort",
      description: "Bain de pieds + gommage + retrait cuticules + renfort + semi-permanent.",
      duration: "1h30",
      price: "30€",
      features: ["Bain relaxant", "Gommage", "Retrait cuticules", "Semi-permanent"]
    }
  ];

  return (
    <section id="prestations" className="section-padding bg-gray-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-dark mb-6">
            Nos <span className="text-gradient">Prestations</span>
          </h2>
          <p className="text-lg text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de soins pour sublimer vos ongles. 
            Chaque prestation est réalisée avec passion et expertise pour un résultat parfait.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-elegant p-6 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-primary to-pink-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-gray-dark" />
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gray-dark group-hover:text-pink-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-medium mt-1">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </span>
                          <span className="flex items-center">
                            <Euro className="w-4 h-4 mr-1" />
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-medium mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-medium">
                        <div className="w-2 h-2 bg-turquoise rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to="/reservation">
                    <Button className="btn-secondary w-full group-hover:shadow-glow transition-all duration-300">
                      Réserver cette prestation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-card animate-fade-in">
          <h3 className="text-2xl font-playfair font-semibold text-gray-dark mb-4">
            Prestations sur mesure disponibles
          </h3>
          <p className="text-gray-medium mb-6 max-w-2xl mx-auto">
            Vous avez une idée spéciale ? Nous créons des designs personnalisés selon vos envies. 
            Contactez-nous pour discuter de votre projet unique !
          </p>
          <Link to="/prestations">
            <Button className="btn-outline">
              Voir toutes nos prestations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;