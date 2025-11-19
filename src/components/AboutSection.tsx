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
      // Create GSAP Timeline for chained animations
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      timeline
        .from(titleRef.current, {
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
          duration: 1,
        })
        .from(
          cardsRef.current?.children ?? [],
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "Expert Custom Engineering",
      description: "Each Eclipse PC is meticulously hand-built by certified technicians with over 10 years of experience. We don't mass-produce—every system is individually crafted, tested, and optimized to ensure it meets our rigorous quality standards. Your PC isn't just assembled; it's engineered for excellence.",
    },
    {
      icon: Zap,
      title: "Uncompromising Performance",
      description: "We exclusively use premium, top-tier components from industry leaders like NVIDIA, AMD, and Intel. Our systems feature advanced liquid cooling solutions, optimized airflow designs, and professional cable management. Every build undergoes 72-hour stress testing to guarantee peak performance under any workload.",
    },
    {
      icon: Shield,
      title: "Industry-Leading Support",
      description: "Eclipse PC includes a comprehensive 3-year warranty covering all components and labor. Our dedicated support team is available 24/7 to assist you. We also offer lifetime free technical consultation, remote diagnostics, and priority service. Your investment is protected, and we're here for the long haul.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      data-scroll
      data-scroll-speed="0.5"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 glow-text"
          >
            Why Choose <span className="text-primary">Eclipse PC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just build computers—we engineer performance machines tailored to your exact needs. With premium components, expert craftsmanship, and unmatched support, Eclipse PC delivers an experience that mass-market brands simply can't match.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg hover:glow-box transition-all duration-300 group"
              data-scroll
              data-scroll-speed={0.6 + index * 0.1}
            >
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background glow with parallax */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none"
        data-scroll
        data-scroll-speed="-0.3"
      />
    </section>
  );
};

export default AboutSection;
