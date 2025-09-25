import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import galleryImage from "@/assets/gallery-nails.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Manucure Classique", "Semi-Permanent", "Nail Art", "Pédicure"];

  // Simulation de données galerie - en réalité, vous auriez plusieurs images
  const galleryItems = [
    { id: 1, category: "Semi-Permanent", title: "Vernis rose pastel", image: galleryImage },
    { id: 2, category: "Nail Art", title: "Design floral", image: galleryImage },
    { id: 3, category: "Manucure Classique", title: "French manucure", image: galleryImage },
    { id: 4, category: "Semi-Permanent", title: "Turquoise élégant", image: galleryImage },
    { id: 5, category: "Nail Art", title: "Strass et paillettes", image: galleryImage },
    { id: 6, category: "Pédicure", title: "Pédicure rouge", image: galleryImage },
    { id: 7, category: "Semi-Permanent", title: "Nude sophistiqué", image: galleryImage },
    { id: 8, category: "Nail Art", title: "Motifs géométriques", image: galleryImage },
    { id: 9, category: "Manucure Classique", title: "Rose poudré", image: galleryImage }
  ];

  const filteredItems = selectedCategory === "Tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galerie" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-dark mb-6">
            Notre <span className="text-gradient">Galerie</span>
          </h2>
          <p className="text-lg text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Découvrez nos plus belles réalisations. Chaque création est unique et reflète 
            la personnalité de nos clientes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category 
                ? "btn-primary" 
                : "btn-outline border-pink-primary/30 text-gray-medium hover:border-pink-secondary"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-elegant overflow-hidden group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {item.category}
                    </p>
                  </div>
                </div>
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-pink-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-pink-primary/10 via-pink-secondary/10 to-turquoise/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-playfair font-semibold text-gray-dark mb-4">
              Envie d'un style unique ?
            </h3>
            <p className="text-gray-medium mb-6 max-w-2xl mx-auto">
              Inspirez-vous de nos créations ou apportez-nous vos propres idées. 
              Nous sommes là pour réaliser vos rêves d'ongles parfaits !
            </p>
            <Button className="btn-primary">
              Réserver votre séance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;