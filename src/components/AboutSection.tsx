import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, Shield, Award, HeadphonesIcon, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 1,
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.6")
      .from(cardsRef.current?.children ?? [], {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
      }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "Premium Components Only",
      description: "We exclusively use top-tier components from industry leaders like NVIDIA, AMD, Intel, and Corsair. Every part is carefully selected for reliability and performance, ensuring your PC operates at peak efficiency for years to come.",
    },
    {
      icon: Zap,
      title: "Unmatched Performance",
      description: "Our expert builders optimize every aspect of your system - from precision cable management for optimal airflow to custom cooling solutions. Experience lightning-fast load times, smooth multitasking, and graphics that bring your games to life.",
    },
    {
      icon: Shield,
      title: "Industry-Leading Warranty",
      description: "Every Eclipse PC comes with comprehensive warranty coverage and lifetime technical support. We stand behind our craftsmanship with free diagnostics, priority support channels, and hassle-free RMA process. Your investment is protected.",
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Each PC is meticulously hand-assembled by certified technicians with years of experience. We conduct rigorous stress testing and quality checks before shipping, ensuring your system arrives ready to dominate any task you throw at it.",
    },
    {
      icon: Rocket,
      title: "Future-Proof Builds",
      description: "We design with upgradability in mind. Spacious cases, adequate PSU headroom, and strategic component selection mean your Eclipse PC can evolve with technology. Stay ahead of the curve without starting from scratch.",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support 24/7",
      description: "Our dedicated support team is available round the clock to assist you. Whether you need help with setup, optimization tips, or troubleshooting, we're just a call or message away. Experience white-glove service that sets us apart.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-6 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 glow-text"
          >
            Why Choose <span className="text-primary">Eclipse PC</span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Where exceptional quality meets cutting-edge innovation. We don't just build PCs—we craft premium computing experiences tailored for enthusiasts, professionals, and gamers who demand nothing but the best.
          </p>
        </div>

        <div ref={cardsRef} className="hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg hover:glow-box transition-all duration-500 group cursor-pointer"
            >
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default AboutSection;
