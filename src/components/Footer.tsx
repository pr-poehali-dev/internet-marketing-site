import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="text-xl font-bold text-primary mb-4">DigitalПро</div>
            <p className="text-muted-foreground mb-4">
              Профессиональные услуги по настройке и ведению рекламных кампаний для бизнеса любого размера.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="h-5 w-5" alt="WhatsApp" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111644.png" className="h-5 w-5" alt="Telegram" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="h-5 w-5" alt="VK" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Контекстная реклама</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Таргетированная реклама</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Настройка аналитики</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Маркетинговые стратегии</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Аудит рекламных кампаний</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Обо мне</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Портфолио</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Блог</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Отзывы клиентов</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Контакты</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <div className="font-medium text-foreground">Email:</div>
                <a href="mailto:contact@digitalpro.ru" className="hover:text-primary transition-colors">
                  contact@digitalpro.ru
                </a>
              </li>
              <li>
                <div className="font-medium text-foreground">Телефон:</div>
                <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li>
                <div className="font-medium text-foreground">Рабочие часы:</div>
                <div>Пн-Пт, 9:00 – 18:00</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border/50">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} DigitalПро. Все права защищены.
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
            <Separator orientation="vertical" className="h-4 my-auto" />
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
