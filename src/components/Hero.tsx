import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ContactDialog from "@/components/ContactDialog";
import { usePerformance } from "@/hooks/use-performance";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { isLowPerformance, prefersReducedMotion } = usePerformance();
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Only load Spline on high-performance devices after initial render
    if (!isLowPerformance && !prefersReducedMotion) {
      const timer = setTimeout(() => setSplineLoaded(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLowPerformance, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, "-=0.4")
      .from(ctaRef.current?.querySelectorAll('button') ?? [], {
        opacity: 0,
        y: 15,
        duration: 0.5,
        clearProps: "transform,opacity"
      }, "-=0.3");

      // Floating orbs animation - only on high performance
      if (!isLowPerformance) {
        gsap.to(".glow-orb", {
          y: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.8,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isLowPerformance, prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Spline 3D Background - Only on high-performance devices */}
      {splineLoaded && !isLowPerformance && (
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://my.spline.design/orb-xkTrsJ4x8kMwcNDzRYSbdX4e/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-[1]" />

      {/* Floating glow orbs - Simplified for performance */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div 
          className={`glow-orb absolute top-20 left-20 w-48 md:w-64 h-48 md:h-64 bg-primary/20 rounded-full ${isLowPerformance ? '' : 'blur-2xl md:blur-3xl'}`} 
          style={{ filter: isLowPerformance ? 'blur(20px)' : undefined }}
        />
        <div 
          className={`glow-orb absolute bottom-40 right-20 w-56 md:w-80 h-56 md:h-80 bg-accent/20 rounded-full ${isLowPerformance ? '' : 'blur-2xl md:blur-3xl'}`}
          style={{ filter: isLowPerformance ? 'blur(20px)' : undefined }}
        />
        {!isLowPerformance && (
          <div className="glow-orb absolute top-1/2 left-1/2 w-72 md:w-96 h-72 md:h-96 bg-primary/15 rounded-full blur-3xl" />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight glow-text"
          >
            Собери ПК
            <br />
            <span className="text-primary">Своей мечты</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Настраиваемые высокопроизводительные компьютеры под ваши задачи.
          </p>

          <div ref={ctaRef} className="flex flex-wrap justify-center items-center gap-4">
            <Button
              size="lg"
              className="inline-flex items-center font-semibold group/hero relative overflow-hidden glow-box"
            >
              Конфигурации
              <ArrowRight className="ml-2 h-5 w-5 group-hover/hero:translate-x-2 transition-transform duration-300" />
            </Button>
            <ContactDialog>
              <Button
                size="lg"
                variant="outline"
                className="inline-flex items-center font-semibold border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                Индивидуальная сборка
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
