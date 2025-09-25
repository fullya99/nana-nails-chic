import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const contactInfo = {
    phone: "06 12 34 56 78",
    email: "contact@lesonglesdenana.fr",
    address: "123 Rue de la Beauté, 75001 Paris"
  };

  const openingHours = [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi", hours: "9h - 18h" },
    { day: "Mercredi", hours: "9h - 18h" },
    { day: "Jeudi", hours: "9h - 20h" },
    { day: "Vendredi", hours: "9h - 20h" },
    { day: "Samedi", hours: "9h - 17h" },
    { day: "Dimanche", hours: "10h - 16h" }
  ];

  return (
    <footer id="contact" className="bg-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-playfair font-bold text-gradient mb-4">
                  Les Ongles de Nana
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Votre salon de manucure de référence à Paris. Nous sublimeons vos ongles 
                  avec passion, créativité et les meilleurs produits du marché.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-playfair font-semibold text-lg mb-4">
                  Suivez-nous
                </h4>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-pink-primary/30 text-pink-primary hover:bg-pink-primary hover:text-gray-dark"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-pink-primary/30 text-pink-primary hover:bg-pink-primary hover:text-gray-dark"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-playfair font-semibold text-xl mb-6">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-turquoise mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{contactInfo.phone}</p>
                    <p className="text-sm text-gray-400">Appel ou SMS</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-turquoise mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{contactInfo.email}</p>
                    <p className="text-sm text-gray-400">Réponse sous 24h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-turquoise mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{contactInfo.address}</p>
                    <p className="text-sm text-gray-400">Métro Châtelet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-6">
              <h4 className="font-playfair font-semibold text-xl mb-6">
                Horaires
              </h4>
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span 
                      className={`text-sm ${
                        schedule.hours === "Fermé" 
                          ? "text-gray-500" 
                          : "text-turquoise font-medium"
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mt-4">
                <Clock className="w-4 h-4" />
                <span>Sur rendez-vous uniquement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="border-t border-gray-light/10 py-8">
          <div className="bg-gradient-to-r from-pink-primary/20 to-turquoise/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              Prête pour des ongles parfaits ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Réservez votre rendez-vous dès maintenant et découvrez l'art de la manucure 
              dans notre salon parisien.
            </p>
            <Button className="btn-primary">
              <Phone className="w-4 h-4 mr-2" />
              Réserver maintenant
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-light/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2024 Les Ongles de Nana. Fait avec</span>
              <Heart className="w-4 h-4 text-pink-primary fill-pink-primary" />
              <span>à Paris</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-primary transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="hover:text-pink-primary transition-colors duration-300">
                CGV
              </a>
              <a href="#" className="hover:text-pink-primary transition-colors duration-300">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;