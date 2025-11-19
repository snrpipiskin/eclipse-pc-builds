import { Zap, Shield, Headphones, Truck } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Top-tier components for maximum performance and reliability"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and secure shipping to your doorstep"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium components with comprehensive warranty"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "24/7 technical support and consultation"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Eclipse PC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence in every build with unmatched quality and support
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
