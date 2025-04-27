import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PortfolioSectionProps {
  id: string;
}

type ProjectCategory = "all" | "context" | "target" | "analytics";

interface Project {
  title: string;
  category: Exclude<ProjectCategory, "all">[];
  description: string;
  results: string[];
  image: string;
  roi: string;
  client: string;
}

const PortfolioSection = ({ id }: PortfolioSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const categories = [
    { id: "all", name: "Все проекты" },
    { id: "context", name: "Контекстная реклама" },
    { id: "target", name: "Таргетированная реклама" },
    { id: "analytics", name: "Аналитика" },
  ];

  const projects: Project[] = [
    {
      title: "Увеличение продаж интернет-магазина мебели",
      category: ["context", "analytics"],
      description: "Разработка и запуск рекламных кампаний в Яндекс Директ и Google Ads для увеличения продаж офисной мебели.",
      results: [
        "Рост конверсии сайта на 42%",
        "Снижение стоимости привлечения клиента на 35%",
        "Увеличение среднего чека на 18%"
      ],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      roi: "380%",
      client: "МебельПро"
    },
    {
      title: "Продвижение образовательных курсов",
      category: ["target", "analytics"],
      description: "Запуск таргетированной рекламы в Instagram и ВКонтакте для привлечения студентов на онлайн-курсы программирования.",
      results: [
        "Более 500 заявок за первый месяц",
        "Стоимость заявки снижена с 1200₽ до 450₽",
        "Заполняемость групп увеличена на 70%"
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      roi: "420%",
      client: "IT-Academy"
    },
    {
      title: "Продвижение медицинского центра",
      category: ["context", "target"],
      description: "Комплексная рекламная кампания для сети частных клиник, включающая Яндекс Директ, Google Ads и рекламу в социальных сетях.",
      results: [
        "Увеличение числа новых пациентов на 63%",
        "Снижение стоимости привлечения пациента на 28%",
        "Рост узнаваемости бренда на 45%"
      ],
      image: "https://images.unsplash.com/photo-1631815585553-a8a8d5746c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      roi: "310%",
      client: "МедЭксперт"
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === "all" || project.category.includes(selectedCategory as Exclude<ProjectCategory, "all">)
  );

  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Портфолио проектов</h2>
          <p className="text-muted-foreground">
            Ознакомьтесь с реальными кейсами и результатами моей работы с клиентами из разных сфер бизнеса
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id as ProjectCategory)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <Badge key={cat} variant="secondary" className="text-xs">
                      {categories.find(c => c.id === cat)?.name}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Результаты:</h4>
                  <ul className="text-sm space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm mt-4 pt-4 border-t border-border">
                  <div>
                    <span className="text-muted-foreground">Клиент:</span> {project.client}
                  </div>
                  <div className="font-semibold text-primary">
                    ROI: {project.roi}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="group">
            Смотреть все проекты
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
