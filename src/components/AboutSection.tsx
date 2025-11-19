import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 1,
      });

      gsap.from(cardsRef.current?.children ?? [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "Expertly Hand-Built Systems",
      description: "Each PC is meticulously assembled by certified technicians with over 10 years of experience. We use only premium, tested components from industry leaders like ASUS, MSI, and Corsair. Every build undergoes rigorous quality checks and stress testing before shipping to ensure flawless performance from day one.",
    },
    {
      icon: Zap,
      title: "Uncompromising Performance",
      description: "Our systems are engineered for excellence with cutting-edge hardware, advanced cooling solutions, and optimized cable management. We achieve up to 30% better thermals than standard builds through custom fan curves and premium thermal compounds. Whether gaming, streaming, or content creation, expect peak performance 24/7.",
    },
    {
      icon: Shield,
      title: "Comprehensive Protection & Support",
      description: "Enjoy peace of mind with our 3-year comprehensive warranty covering parts and labor. Get lifetime access to our expert technical support team available 7 days a week. We stand behind every build with free diagnostics, priority service, and our satisfaction guarantee. Your success is our mission.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 glow-text"
          >
            Why Choose <span className="text-primary">Eclipse PC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium quality meets cutting-edge technology
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg hover:glow-box transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default AboutSection;
