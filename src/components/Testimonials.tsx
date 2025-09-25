import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      rating: 5,
      text: "Nana est une véritable artiste ! Mes ongles n'ont jamais été aussi beaux. L'accueil est chaleureux et le résultat toujours parfait. Je recommande vivement !",
      service: "Manucure Semi-Permanent",
      date: "Il y a 2 semaines"
    },
    {
      name: "Emma Dubois",
      rating: 5,
      text: "Un salon exceptionnel ! Nana prend le temps d'écouter mes envies et me conseille parfaitement. Mes ongles tiennent parfaitement et le nail art est magnifique.",
      service: "Nail Art Personnalisé",
      date: "Il y a 1 mois"
    },
    {
      name: "Léa Rodriguez",
      rating: 5,
      text: "Je suis cliente depuis 6 mois et je ne changerai pour rien au monde. La qualité du travail, l'hygiène et l'attention aux détails sont remarquables.",
      service: "Manucure Classique",
      date: "Il y a 3 jours"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gray-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-dark mb-6">
            Avis de nos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-lg text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que pensent nos clientes de leur expérience aux Ongles de Nana. 
            Leur satisfaction est notre plus belle récompense.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-elegant p-6 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-pink-secondary opacity-50" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-dark mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-pink-primary/20 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-playfair font-semibold text-gray-dark group-hover:text-pink-accent transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-medium">
                        {testimonial.service}
                      </p>
                    </div>
                    <p className="text-xs text-gray-medium">
                      {testimonial.date}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-turquoise rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats & Social Proof */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-playfair font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-sm text-gray-medium">Note moyenne</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gradient mb-2">150+</div>
              <div className="text-sm text-gray-medium">Avis clients</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gradient mb-2">95%</div>
              <div className="text-sm text-gray-medium">Clients fidèles</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gradient mb-2">500+</div>
              <div className="text-sm text-gray-medium">Créations réalisées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;