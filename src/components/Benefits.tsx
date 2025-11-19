import { Zap, Shield, Headphones, Truck } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Высокая производительность",
      description: "Топовые комплектующие для максимальной производительности и надежности"
    },
    {
      icon: Truck,
      title: "Быстрая доставка",
      description: "Быстрая и безопасная доставка до вашей двери"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Премиальные комплектующие с полной гарантией"
    },
    {
      icon: Headphones,
      title: "Экспертная поддержка",
      description: "Техническая поддержка и консультации 24/7"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают <span className="text-primary">Eclipse PC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы гарантируем превосходство в каждой сборке с непревзойденным качеством и поддержкой
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <benefit.icon className="h-6 w-6 text-primary group-hover:text-background transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
