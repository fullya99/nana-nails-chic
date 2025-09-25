import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Euro, Palette, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Prestations = () => {
  const mainsServices = [
    {
      icon: Palette,
      title: "Pose Capsule / Popit",
      description: "Manucure russe + extension avec la technique au choix (réalisée avec du gel).",
      duration: "2h",
      price: "45€"
    },
    {
      icon: Palette,
      title: "Remplissage",
      description: "Manucure russe + remplissage après 4 semaines maximum.",
      duration: "1h30",
      price: "35€"
    },
    {
      icon: Palette,
      title: "Gainage Ongle Naturel",
      description: "Renforcement de l'ongle naturel avec du gel (sans rallongement). +5€/ongle si besoin.",
      duration: "1h15",
      price: "35€"
    },
    {
      icon: Palette,
      title: "Pose de Semi-permanent",
      description: "Manucure russe + pose de vernis semi-permanent (sans rallongement).",
      duration: "1h",
      price: "30€"
    }
  ];

  const piedsServices = [
    {
      icon: Scissors,
      title: "Pédicure Russe + Renfort",
      description: "Bain de pieds + gommage + retrait cuticules + renfort + semi-permanent.",
      duration: "1h30",
      price: "30€"
    },
    {
      icon: Scissors,
      title: "Pédicure Russe",
      description: "Bain de pieds + gommage + retrait cuticules (sans vernis).",
      duration: "45min",
      price: "15€"
    },
    {
      icon: Scissors,
      title: "Callus Peeling",
      description: "Traitement anti-callosités (sans vernis ni semi-permanent).",
      duration: "1h",
      price: "35€"
    }
  ];

  const supplementsMains = [
    { name: "Strass / Ongle", price: "2€" },
    { name: "French Manucure", price: "5€" },
    { name: "Baby Boomer", price: "10€" },
    { name: "Autres Nail Art", price: "Sur devis" }
  ];

  const supplementsPieds = [
    { name: "Jelly SPA", price: "15€" },
    { name: "Reconstruction Ongle", price: "5€" },
    { name: "Dépose semi-permanent", price: "5€" },
    { name: "Dépose Gel", price: "10€" }
  ];

  return (
    <div className="min-h-screen bg-gray-light">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-dark mb-6">
                Nos <span className="text-gradient">Prestations</span>
              </h1>
              <p className="text-lg text-gray-medium max-w-3xl mx-auto leading-relaxed">
                Découvrez notre gamme complète de soins pour sublimer vos ongles. 
                Chaque prestation est réalisée avec passion et expertise pour un résultat parfait.
              </p>
            </div>

            {/* Prestations Mains */}
            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-gray-dark mb-8 text-center">
                Prestations <span className="text-gradient">Mains</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {mainsServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="card-elegant p-6 group cursor-pointer animate-scale-in">
                      <CardContent className="p-0">
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
                        <p className="text-gray-medium mb-4 leading-relaxed">
                          {service.description}
                        </p>
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

              {/* Suppléments Mains */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-playfair font-semibold text-gray-dark mb-6 text-center">
                  Suppléments Mains
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {supplementsMains.map((supplement, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-pink-primary/10 rounded-lg">
                      <span className="text-gray-dark font-medium">{supplement.name}</span>
                      <span className="text-pink-accent font-semibold">{supplement.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prestations Pieds */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-dark mb-8 text-center">
                Prestations <span className="text-gradient">Pieds</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {piedsServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="card-elegant p-6 group cursor-pointer animate-scale-in">
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-turquoise to-turquoise-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-playfair font-semibold text-gray-dark group-hover:text-turquoise transition-colors duration-300">
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
                        <p className="text-gray-medium mb-4 leading-relaxed">
                          {service.description}
                        </p>
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

              {/* Suppléments Pieds */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-playfair font-semibold text-gray-dark mb-6 text-center">
                  Suppléments Pieds
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {supplementsPieds.map((supplement, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-turquoise/10 rounded-lg">
                      <span className="text-gray-dark font-medium">{supplement.name}</span>
                      <span className="text-turquoise font-semibold">{supplement.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Prestations;