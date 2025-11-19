import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AboutSection from "@/components/AboutSection";
import Preloader from "@/components/Preloader";
import pcBuild1 from "@/assets/pc-build-1.jpg";
import pcBuild2 from "@/assets/pc-build-2.jpg";
import pcBuild3 from "@/assets/pc-build-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const buildsRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const builds = [
    {
      name: "ECLIPSE STARTER",
      price: "$1,299",
      image: pcBuild1,
      specs: {
        processor: "AMD Ryzen 5 7600X",
        gpu: "NVIDIA RTX 4060 8GB",
        ram: "16GB DDR5 5600MHz",
        storage: "1TB NVMe SSD"
      }
    },
    {
      name: "ECLIPSE GAMING",
      price: "$1,899",
      image: pcBuild2,
      specs: {
        processor: "AMD Ryzen 7 7800X3D",
        gpu: "NVIDIA RTX 4070 Ti 12GB",
        ram: "32GB DDR5 6000MHz",
        storage: "2TB NVMe Gen4 SSD"
      }
    },
    {
      name: "ECLIPSE ULTIMATE",
      price: "$3,299",
      image: pcBuild3,
      specs: {
        processor: "AMD Ryzen 9 7950X",
        gpu: "NVIDIA RTX 4090 24GB",
        ram: "64GB DDR5 6400MHz",
        storage: "4TB NVMe Gen4 SSD"
      }
    },
    {
      name: "ECLIPSE CREATOR",
      price: "$2,499",
      image: pcBuild1,
      specs: {
        processor: "Intel Core i9-14900K",
        gpu: "NVIDIA RTX 4070 12GB",
        ram: "64GB DDR5 5600MHz",
        storage: "2TB NVMe Gen4 SSD"
      }
    },
    {
      name: "ECLIPSE STREAMER",
      price: "$2,199",
      image: pcBuild2,
      specs: {
        processor: "AMD Ryzen 9 7900X",
        gpu: "NVIDIA RTX 4070 Ti 12GB",
        ram: "32GB DDR5 6000MHz",
        storage: "2TB NVMe Gen4 SSD + 2TB HDD"
      }
    },
    {
      name: "ECLIPSE ELITE",
      price: "$4,999",
      image: pcBuild3,
      specs: {
        processor: "Intel Core i9-14900KS",
        gpu: "NVIDIA RTX 4090 24GB",
        ram: "128GB DDR5 6400MHz",
        storage: "8TB NVMe Gen4 SSD"
      }
    }
  ];

  useEffect(() => {
    if (!loading && scrollRef.current) {
      // Initialize Locomotive Scroll
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
      });

      // Update ScrollTrigger when Locomotive Scroll updates
      locomotiveScrollRef.current.on("scroll", ScrollTrigger.update);

      // Sync ScrollTrigger with Locomotive Scroll
      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          if (locomotiveScrollRef.current) {
            return arguments.length
              ? locomotiveScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true })
              : locomotiveScrollRef.current.scroll.instance.scroll.y;
          }
          return 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
      });

      const ctx = gsap.context(() => {
        // Create GSAP Timeline for builds section
        const buildsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: buildsRef.current,
            start: "top 80%",
            scroller: scrollRef.current,
          },
        });

        buildsTimeline
          .from(buildsRef.current?.querySelector(".section-title"), {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
            duration: 1,
          })
          .from(
            buildsRef.current?.querySelectorAll(".product-card") ?? [],
            {
              opacity: 0,
              y: 60,
              scale: 0.95,
              stagger: 0.15,
              duration: 0.8,
            },
            "-=0.5"
          );

        // Footer animation with timeline
        const footerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            scroller: scrollRef.current,
          },
        });

        footerTimeline.from(footerRef.current, {
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
          duration: 1,
        });
      });

      // Refresh both ScrollTrigger and Locomotive Scroll
      ScrollTrigger.addEventListener("refresh", () => locomotiveScrollRef.current?.update());
      ScrollTrigger.refresh();

      return () => {
        ctx.revert();
        locomotiveScrollRef.current?.destroy();
        ScrollTrigger.removeEventListener("refresh", () => locomotiveScrollRef.current?.update());
      };
    }
  }, [loading]);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-background">
      <Header />
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section data-scroll data-scroll-speed="1">
        <AboutSection />
      </div>
      
      <section 
        ref={buildsRef} 
        id="builds" 
        className="py-24 relative overflow-hidden"
        data-scroll-section
        data-scroll
        data-scroll-speed="0.5"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 section-title">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              Pre-Configured <span className="text-primary">Builds</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our expertly crafted configurations or customize your own
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builds.map((build, index) => (
              <div key={index} className="product-card" data-scroll data-scroll-speed="0.8">
                <ProductCard {...build} />
              </div>
            ))}
          </div>
        </div>

        {/* Background particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>
      
      <footer 
        ref={footerRef} 
        className="py-16 border-t border-border relative overflow-hidden"
        data-scroll-section
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold glow-text">Eclipse PC</h3>
            <p className="text-muted-foreground">
              Building the future, one PC at a time
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Eclipse PC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </footer>
    </div>
  );
};

export default Index;
