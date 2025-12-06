import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const {
        error
      } = await supabase.functions.invoke("send-telegram", {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: "Форма обратной связи"
        }
      });
      if (error) throw error;
      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за обращение. Мы скоро свяжемся с вами!"
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Свяжитесь <span className="text-primary">с нами</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы собрать ПК своей мечты? Свяжитесь с нами сегодня!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    <a href="https://wa.me/79993989762" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      WhatsApp
                    </a>
                    {" и "}
                    <a href="https://t.me/eclipsepc_ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      Telegram
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Напишите нам для быстрого ответа
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    <a href="https://vk.com/eclipsepc_ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors bg-inherit">
                      VK
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Подпишитесь на нас в VK для новостей и поддержки
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    Отправьте нам подробное сообщение о ваших требованиях
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя
                </label>
                <Input id="name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} placeholder="Ваше имя" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} placeholder="your.email@example.com" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} placeholder="Расскажите нам о сборке ПК вашей мечты..." rows={5} required />
              </div>

              <Button type="submit" className="w-full glow-box" disabled={isLoading}>
                <Send className="mr-2 h-4 w-4" />
                {isLoading ? "Отправка..." : "Отправить сообщение"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Removed heavy animated blur effects for performance */}
    </section>;
};
export default ContactSection;