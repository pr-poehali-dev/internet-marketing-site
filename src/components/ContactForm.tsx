import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  company: z.string().optional(),
  email: z.string().email({ message: "Введите корректный email" }),
  phone: z.string().min(6, { message: "Введите корректный номер телефона" }),
  message: z.string().min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Симуляция отправки формы
    setTimeout(() => {
      console.log("Form submitted", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      
      // Сбросить состояние успешной отправки через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <Card className="border-2 border-secondary bg-background">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя*</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Компания</FormLabel>
                      <FormControl>
                        <Input placeholder="ООО «Компания»" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон*</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (999) 123-45-67" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Расскажите о вашем проекте*</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Опишите задачу, бюджет и ожидаемые результаты" 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Заявка отправлена!
                  </>
                ) : (
                  "Отправить заявку"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Контактная информация</h3>
        <p className="text-muted-foreground">
          Буду рад обсудить ваш проект и ответить на любые вопросы о моих услугах в области интернет-рекламы.
        </p>
        
        <div className="space-y-4 mt-6">
          <div>
            <div className="font-medium">Email:</div>
            <a href="mailto:contact@digitalpro.ru" className="text-primary hover:underline">
              contact@digitalpro.ru
            </a>
          </div>
          
          <div>
            <div className="font-medium">Телефон:</div>
            <a href="tel:+79001234567" className="text-primary hover:underline">
              +7 (900) 123-45-67
            </a>
          </div>
          
          <div>
            <div className="font-medium">Рабочие часы:</div>
            <p>Понедельник – Пятница, 9:00 – 18:00</p>
          </div>
        </div>
        
        <div className="pt-6">
          <h4 className="font-medium mb-2">Остались вопросы?</h4>
          <p className="text-muted-foreground mb-4">
            Позвоните мне или напишите сообщение в любом мессенджере для быстрой связи
          </p>
          <div className="flex space-x-4">
            <Button variant="outline">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
            <Button variant="outline">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111644.png" className="h-5 w-5 mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
