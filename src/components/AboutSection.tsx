import { BadgeCheck, Monitor, BarChart4, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  id: string;
}

const AboutSection = ({ id }: AboutSectionProps) => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Контекстная реклама",
      description: "Настройка и оптимизация рекламных кампаний в Яндекс Директ и Google Ads"
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary" />,
      title: "Таргетированная реклама",
      description: "Продвижение в социальных сетях с точным таргетингом на целевую аудиторию"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Аналитика и отчётность",
      description: "Внедрение систем аналитики и регулярные отчеты о результатах кампаний"
    }
  ];

  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="О специалисте" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Об эксперте</h2>
            <p className="text-lg text-muted-foreground">
              За 6 лет работы в сфере интернет-рекламы я помог более 50 компаниям увеличить продажи и узнаваемость бренда через эффективные маркетинговые стратегии.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-primary mt-0.5" />
                <span>Сертифицированный специалист Google Ads и Яндекс Директ</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-primary mt-0.5" />
                <span>Опыт работы с бюджетами от 50 000 до 1 000 000 рублей в месяц</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-primary mt-0.5" />
                <span>Средний ROI кампаний клиентов — 300%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Мои услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-2 border-secondary">
                <CardContent className="pt-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
