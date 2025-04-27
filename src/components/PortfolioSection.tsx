import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Users, ShoppingCart } from "lucide-react";

interface PortfolioSectionProps {
  id: string;
}

interface CaseStudy {
  id: string;
  category: string;
  client: string;
  title: string;
  description: string;
  results: {
    icon: JSX.Element;
    value: string;
    label: string;
  }[];
  image: string;
  tags: string[];
}

const PortfolioSection = ({ id }: PortfolioSectionProps) => {
  const [category, setCategory] = useState("all");
  
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      category: "ecommerce",
      client: "Интернет-магазин мебели",
      title: "Увеличение продаж на 127% за 3 месяца",
      description: "Разработка и внедрение комплексной стратегии для интернет-магазина мебели, включая контекстную рекламу и ремаркетинг.",
      results: [
        { icon: <ShoppingCart className="w-6 h-6 text-primary" />, value: "+127%", label: "рост продаж" },
        { icon: <BarChart className="w-6 h-6 text-primary" />, value: "-32%", label: "снижение CPO" },
        { icon: <Users className="w-6 h-6 text-primary" />, value: "+89%", label: "прирост трафика" }
      ],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Google Ads", "Яндекс Директ", "Ремаркетинг"]
    },
    {
      id: "2",
      category: "service",
      client: "Юридическая компания",
      title: "Привлечение клиентов B2B сегмента",
      description: "Настройка рекламных кампаний для привлечения корпоративных клиентов в юридическую компанию с фокусом на высокий LTV.",
      results: [
        { icon: <Users className="w-6 h-6 text-primary" />, value: "+205%", label: "лидов" },
        { icon: <BarChart className="w-6 h-6 text-primary" />, value: "41%", label: "конверсия" },
        { icon: <ShoppingCart className="w-6 h-6 text-primary" />, value: "450%", label: "ROI" }
      ],
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Таргетированная реклама", "LinkedIn", "Google Ads"]
    },
    {
      id: "3",
      category: "social",
      client: "Сеть фитнес-клубов",
      title: "Продвижение в социальных сетях",
      description: "Разработка и реализация комплексной стратегии в социальных сетях для сети фитнес-клубов с акцентом на сезонные акции.",
      results: [
        { icon: <ShoppingCart className="w-6 h-6 text-primary" />, value: "+94%", label: "абонементов" },
        { icon: <Users className="w-6 h-6 text-primary" />, value: "+15K", label: "подписчиков" },
        { icon: <BarChart className="w-6 h-6 text-primary" />, value: "320%", label: "ROI" }
      ],
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["ВКонтакте", "Instagram", "Таргетированная реклама"]
    }
  ];

  const filteredCases = category === "all" 
    ? caseStudies 
    : caseStudies.filter(item => item.category === category);

  return (
    <section id={id} className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Портфолио проектов</h2>
          <p className="text-muted-foreground">
            Посмотрите примеры реализованных проектов для различных бизнесов и сфер
          </p>
        </div>

        <Tabs defaultValue="all" value={category} onValueChange={setCategory} className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">Все проекты</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="service">Услуги</TabsTrigger>
              <TabsTrigger value="social">Соцсети</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => (
            <Card key={caseItem.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title} 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">{caseItem.client}</div>
                <h3 className="text-xl font-semibold mb-3">{caseItem.title}</h3>
                <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {caseItem.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-1">{result.icon}</div>
                      <div className="font-bold text-primary">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {caseItem.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
