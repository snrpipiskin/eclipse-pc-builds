import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ContactDialog from "@/components/ContactDialog";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 1.2,
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.6")
      .from(ctaRef.current?.children ?? [], {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
      }, "-=0.4")
      .from(splineRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
      }, "-=0.8");

      // Floating orbs animation
      gsap.to(".glow-orb", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.5,
        }
      });

      // CTA hover pulse
      const ctaButtons = ctaRef.current?.querySelectorAll("button");
      ctaButtons?.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div
        ref={splineRef}
        className="absolute inset-0 z-0"
      >
        <iframe
          src="https://my.spline.design/orb-xkTrsJ4x8kMwcNDzRYSbdX4e/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 z-[1]" />

      {/* Floating glow orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="glow-orb absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="glow-orb absolute bottom-40 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        <div className="glow-orb absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-primary text-sm font-bold tracking-wider uppercase">
              Премиальные игровые ПК
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight glow-text"
          >
            Собери ПК
            <br />
            <span className="text-primary">Своей мечты</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Настраиваемые высокопроизводительные компьютеры под ваши задачи.
            From gaming to professional workstations - we build it all.
          </p>

          <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="font-semibold group/hero relative overflow-hidden glow-box"
            >
              <span className="relative z-10 flex items-center">
                Начать сборку
                <ArrowRight className="ml-2 h-5 w-5 group-hover/hero:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <ContactDialog>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold border-2 border-primary/70 bg-primary/5 text-foreground hover:bg-primary/20 hover:border-primary transition-all duration-300"
              >
                Хотите индивидуальное решение?
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
