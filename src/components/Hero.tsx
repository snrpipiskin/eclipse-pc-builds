import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

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

      {/* Gradient overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95 z-[1]" />

      {/* Tech grid background */}
      <div className="absolute inset-0 z-[1] tech-grid-bg pointer-events-none" />

      {/* Atmospheric depth blur */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/5 to-transparent depth-blur" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent depth-blur" />
      </div>

      {/* Flowing curved lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="flowing-line absolute top-1/4 left-0 w-full h-1 opacity-60" style={{ animationDelay: '0s' }} />
        <div className="flowing-line absolute top-1/2 left-0 w-full h-1 opacity-40" style={{ animationDelay: '2s' }} />
        <div className="flowing-line absolute top-3/4 left-0 w-full h-1 opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      {/* Light streaks for tech feel */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="light-streak absolute top-0 left-0 w-[200%] h-[200%]" style={{ animationDelay: '0s' }} />
        <div className="light-streak absolute top-0 left-0 w-[200%] h-[200%]" style={{ animationDelay: '5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-primary text-sm font-bold tracking-wider uppercase">
              Premium Gaming PCs
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight glow-text light-accent"
          >
            Build The PC
            <br />
            <span className="text-primary neon-accent">Of Your Dreams</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Customize high-performance computers tailored to your needs.
            From gaming to professional workstations - we build it all.
          </p>

          <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="font-semibold group/hero relative overflow-hidden glow-box light-accent"
            >
              <span className="relative z-10 flex items-center">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 group-hover/hero:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold glass-card hover:glow-box hover:light-accent transition-all duration-300"
            >
              View Pre-Built PCs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
