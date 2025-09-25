import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Award, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import anaisPortrait from "@/assets/anais-portrait.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Chaque manucure est réalisée avec amour et attention aux détails"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Seuls les meilleurs produits pour des résultats irréprochables"
    },
    {
      icon: Sparkles,
      title: "Créativité",
      description: "Des designs uniques qui reflètent votre personnalité"
    }
  ];

  return (
    <section id="apropos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-dark mb-6">
            À Propos de <span className="text-gradient">Nana</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Intro */}
          <div className="space-y-8 animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-elegant">
                <img
                  src={anaisPortrait}
                  alt="Anaïs - Les Ongles de Nana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-8 w-24 h-24 bg-gradient-to-br from-pink-primary to-turquoise rounded-full flex items-center justify-center shadow-glow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-turquoise mr-2" />
                  </div>
                  <div className="text-2xl font-playfair font-bold text-gray-dark">3 ans</div>
                  <div className="text-sm text-gray-medium">d'expérience</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-turquoise mr-2" />
                  </div>
                  <div className="text-2xl font-playfair font-bold text-gray-dark">Certifiée</div>
                  <div className="text-sm text-gray-medium">professionnelle</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-dark mb-4">
                Bonjour, je suis Anaïs !
              </h3>
              <div className="space-y-4 text-gray-medium leading-relaxed">
                <p>
                  Passionnée par l'art de la manucure depuis toujours, j'ai créé "Les Ongles de Nana" 
                  pour offrir à chaque femme la possibilité de sublimer ses mains avec élégance.
                </p>
                <p>
                  Formée aux dernières techniques et tendances, je mets mon expertise et ma créativité 
                  au service de vos envies. Chaque cliente est unique, et mes créations le sont aussi !
                </p>
                <p>
                  Mon salon est un cocon de douceur où vous pouvez vous détendre pendant que je prends 
                  soin de vos ongles avec les meilleurs produits du marché.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-dark mb-6">
                Mes Valeurs
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-pink-primary/10 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-primary to-pink-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-gray-dark" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-gray-dark mb-1">
                          {value.title}
                        </h4>
                        <p className="text-gray-medium text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-pink-primary/10 via-pink-secondary/10 to-turquoise/10 rounded-2xl p-6">
              <h4 className="font-playfair font-semibold text-gray-dark mb-3">
                Prête à sublimer vos ongles ?
              </h4>
              <p className="text-gray-medium text-sm mb-4">
                Prenez rendez-vous et découvrez l'expérience unique des Ongles de Nana.
              </p>
              <Link to="/reservation">
                <Button className="btn-primary">
                  Réserver maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;