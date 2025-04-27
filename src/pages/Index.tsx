import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={scrollToSection} activeSection={activeSection} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-secondary py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-medium text-sm">
                  6+ лет опыта в интернет-рекламе
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Эффективная реклама для вашего бизнеса
                </h1>
                <p className="text-lg text-muted-foreground">
                  Помогаю бизнесам привлекать клиентов через профессиональную настройку рекламных кампаний с доказанным ROI
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection("contact")}>
                    Оставить заявку
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => scrollToSection("portfolio")}>
                    Посмотреть кейсы
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Интернет-маркетинг" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection id="about" />

        {/* Portfolio Section */}
        <PortfolioSection id="portfolio" />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Оставьте заявку</h2>
              <p className="text-muted-foreground">
                Заполните форму, и я свяжусь с вами в течение 24 часов, чтобы обсудить ваш проект
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
