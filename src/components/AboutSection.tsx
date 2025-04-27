import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  id: string;
}

const AboutSection = ({ id }: AboutSectionProps) => {
  const services = [
    {
      title: "Контекстная реклама",
      description: "Настройка и ведение рекламных кампаний в Яндекс Директ и Google Ads с высокой конверсией",
      features: ["Анализ ниши и конкурентов", "Сбор ключевых слов", "A/B тестирование", "Регулярная оптимизация"]
    },
    {
      title: "Таргетированная реклама",
      description: "Создание и управление эффективными рекламными кампаниями в социальных сетях",
      features: ["Выявление целевой аудитории", "Разработка креативов", "Установка пикселей", "Масштабирование"]
    },
    {
      title: "Аналитика и отчетность",
      description: "Настройка систем аналитики и подготовка понятных отчетов о результатах рекламных кампаний",
      features: ["Настройка Яндекс Метрики", "Интеграция Google Analytics", "Отслеживание конверсий", "Ежемесячные отчеты"]
    }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Мои услуги и опыт</h2>
          <p className="text-lg text-muted-foreground">
            За 6+ лет работы в интернет-рекламе я помог более 50 компаниям увеличить продажи 
            и узнаваемость бренда с помощью эффективных маркетинговых стратегий
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats and Experience */}
        <div className="bg-background border-2 rounded-xl p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Мой подход к работе</h3>
              <p className="mb-4">
                Я не просто настраиваю рекламу, а разрабатываю комплексную маркетинговую стратегию, 
                которая учитывает особенности вашего бизнеса, целевой аудитории и рынка.
              </p>
              <p className="mb-6">
                Работая со мной, вы получаете не только настройку рекламных кампаний, 
                но и постоянное сопровождение, анализ результатов и рекомендации по улучшению.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
                  alt="Специалист по интернет-рекламе" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold">Дмитрий Волков</div>
                  <div className="text-muted-foreground">PPC и SMM специалист</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">рекламных кампаний</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">150M+</div>
                <div className="text-sm text-muted-foreground">рублей рекламного бюджета</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
