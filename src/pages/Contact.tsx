import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-light">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-dark mb-6">
                Nous <span className="text-gradient">Contacter</span>
              </h1>
              <p className="text-lg text-gray-medium max-w-3xl mx-auto leading-relaxed">
                Une question ? Un besoin particulier ? N'hésitez pas à nous contacter, 
                nous serons ravies de vous répondre et de vous conseiller.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Informations de contact */}
              <div className="space-y-8 animate-slide-in">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-dark mb-8">
                    Informations Pratiques
                  </h2>
                  
                  <div className="space-y-6">
                    <Card className="card-elegant p-6">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-primary to-pink-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-gray-dark" />
                          </div>
                          <div>
                            <h3 className="font-playfair font-semibold text-gray-dark mb-2">Adresse</h3>
                            <p className="text-gray-medium">
                              123 Rue de la Beauté<br />
                              75001 Paris<br />
                              France
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-elegant p-6">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-turquoise to-turquoise-light rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-playfair font-semibold text-gray-dark mb-2">Téléphone</h3>
                            <p className="text-gray-medium">
                              <a href="tel:+33123456789" className="hover:text-turquoise transition-colors">
                                +33 1 23 45 67 89
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-elegant p-6">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-accent to-pink-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-gray-dark" />
                          </div>
                          <div>
                            <h3 className="font-playfair font-semibold text-gray-dark mb-2">Email</h3>
                            <p className="text-gray-medium">
                              <a href="mailto:nana@lesonglesdenana.fr" className="hover:text-pink-accent transition-colors">
                                nana@lesonglesdenana.fr
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-elegant p-6">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-primary to-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-gray-dark" />
                          </div>
                          <div>
                            <h3 className="font-playfair font-semibold text-gray-dark mb-2">Horaires</h3>
                            <div className="text-gray-medium space-y-1">
                              <p>Lundi - Vendredi : 9h00 - 19h00</p>
                              <p>Samedi : 9h00 - 17h00</p>
                              <p>Dimanche : Fermé</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="animate-fade-in">
                <Card className="card-elegant p-8">
                  <CardContent className="p-0">
                    <h2 className="text-3xl font-playfair font-bold text-gray-dark mb-6">
                      Envoyez-nous un message
                    </h2>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-dark mb-2">
                            Prénom *
                          </label>
                          <Input 
                            type="text" 
                            placeholder="Votre prénom"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-dark mb-2">
                            Nom *
                          </label>
                          <Input 
                            type="text" 
                            placeholder="Votre nom"
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Email *
                        </label>
                        <Input 
                          type="email" 
                          placeholder="votre.email@exemple.com"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Téléphone
                        </label>
                        <Input 
                          type="tel" 
                          placeholder="Votre numéro de téléphone"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Message *
                        </label>
                        <Textarea 
                          placeholder="Décrivez votre demande, vos questions ou vos besoins spécifiques..."
                          className="w-full min-h-[120px]"
                        />
                      </div>
                      
                      <Button className="btn-primary w-full">
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;