import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Clock, User, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();

  const services = [
    { value: "pose-capsule", label: "Pose Capsule / Popit - 45€", duration: "2h" },
    { value: "remplissage", label: "Remplissage - 35€", duration: "1h30" },
    { value: "gainage", label: "Gainage Ongle Naturel - 35€", duration: "1h15" },
    { value: "semi-permanent", label: "Pose de Semi-permanent - 30€", duration: "1h" },
    { value: "pedicure-renfort", label: "Pédicure Russe + Renfort - 30€", duration: "1h30" },
    { value: "pedicure-russe", label: "Pédicure Russe - 15€", duration: "45min" },
    { value: "callus-peeling", label: "Callus Peeling - 35€", duration: "1h" }
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Réservation envoyée ! Nous vous confirmerons votre rendez-vous par téléphone.");
  };

  return (
    <div className="min-h-screen bg-gray-light">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-dark mb-6">
                Prendre <span className="text-gradient">Rendez-vous</span>
              </h1>
              <p className="text-lg text-gray-medium max-w-3xl mx-auto leading-relaxed">
                Réservez votre créneau en quelques clics. Nous vous confirmerons votre rendez-vous 
                dans les 24 heures par téléphone.
              </p>
            </div>

            <Card className="card-elegant p-8 animate-scale-in">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Informations personnelles */}
                  <div>
                    <h2 className="text-2xl font-playfair font-semibold text-gray-dark mb-6 flex items-center">
                      <User className="w-6 h-6 mr-3 text-pink-accent" />
                      Vos Informations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Prénom *
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Nom *
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Téléphone *
                        </label>
                        <Input 
                          type="tel" 
                          placeholder="06 12 34 56 78"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Email *
                        </label>
                        <Input 
                          type="email" 
                          placeholder="votre.email@exemple.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sélection du service */}
                  <div>
                    <h2 className="text-2xl font-playfair font-semibold text-gray-dark mb-6 flex items-center">
                      <Clock className="w-6 h-6 mr-3 text-turquoise" />
                      Choisir une Prestation
                    </h2>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez une prestation" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label} ({service.duration})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sélection de la date et heure */}
                  <div>
                    <h2 className="text-2xl font-playfair font-semibold text-gray-dark mb-6 flex items-center">
                      <CalendarIcon className="w-6 h-6 mr-3 text-pink-accent" />
                      Date et Heure
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Date souhaitée *
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !selectedDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? (
                                format(selectedDate, "PPP", { locale: fr })
                              ) : (
                                <span>Choisir une date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date() || date.getDay() === 0}
                              initialFocus
                              className="p-3 pointer-events-auto"
                              locale={fr}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          Heure souhaitée *
                        </label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choisir un horaire" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Message optionnel */}
                  <div>
                    <label className="block text-sm font-medium text-gray-dark mb-2">
                      Message (optionnel)
                    </label>
                    <Textarea 
                      placeholder="Avez-vous des demandes particulières, des allergies à signaler ou des questions ?"
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Informations importantes */}
                  <div className="bg-pink-primary/10 rounded-lg p-6">
                    <h3 className="font-playfair font-semibold text-gray-dark mb-3">
                      Informations importantes
                    </h3>
                    <ul className="text-sm text-gray-medium space-y-2">
                      <li>• Votre rendez-vous sera confirmé par téléphone dans les 24h</li>
                      <li>• En cas d'empêchement, merci de nous prévenir 24h à l'avance</li>
                      <li>• Le règlement s'effectue en espèces ou par carte bancaire</li>
                      <li>• Dimanche fermé</li>
                    </ul>
                  </div>

                  {/* Bouton de soumission */}
                  <Button 
                    type="submit" 
                    className="btn-primary w-full text-lg py-4"
                    disabled={!selectedDate || !selectedTime || !selectedService}
                  >
                    Confirmer ma réservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;