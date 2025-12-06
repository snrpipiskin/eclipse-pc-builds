import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import BuildsFilter, { FilterState } from "@/components/BuildsFilter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { buildsData } from "@/data/buildsData";
import { usePerformance } from "@/hooks/use-performance";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const buildsRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const { isLowPerformance, prefersReducedMotion } = usePerformance();
  const [filters, setFilters] = useState<FilterState>({
    sortBy: "default",
    gpuBrand: "all",
    cpuBrand: "all",
    ramSize: "all",
    caseColor: "all",
    priceRange: "all",
    searchQuery: ""
  });

  const builds = buildsData;

  // Filter and sort builds
  const getFilteredAndSortedBuilds = () => {
    let filtered = [...builds];

    // Search filter
    if (filters.searchQuery.trim() !== "") {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(build => {
        return (
          build.name.toLowerCase().includes(query) ||
          build.specs.processor.toLowerCase().includes(query) ||
          build.specs.gpu.toLowerCase().includes(query) ||
          build.specs.motherboard.toLowerCase().includes(query) ||
          build.specs.ram.toLowerCase().includes(query) ||
          build.specs.storage.toLowerCase().includes(query) ||
          build.specs.case.toLowerCase().includes(query) ||
          build.price.includes(query)
        );
      });
    }

    // Filter by GPU brand
    if (filters.gpuBrand !== "all") {
      filtered = filtered.filter(build => {
        const gpu = build.specs.gpu.toLowerCase();
        if (filters.gpuBrand === "nvidia") return gpu.includes("nvidia") || gpu.includes("rtx") || gpu.includes("geforce");
        if (filters.gpuBrand === "amd") return gpu.includes("amd") || gpu.includes("radeon");
        return true;
      });
    }

    // Filter by CPU brand
    if (filters.cpuBrand !== "all") {
      filtered = filtered.filter(build => {
        const cpu = build.specs.processor.toLowerCase();
        if (filters.cpuBrand === "intel") return cpu.includes("intel") || cpu.includes("core") || cpu.includes("xeon");
        if (filters.cpuBrand === "amd") return cpu.includes("amd") || cpu.includes("ryzen");
        return true;
      });
    }

    // Filter by RAM size
    if (filters.ramSize !== "all") {
      filtered = filtered.filter(build => {
        const ram = build.specs.ram.toLowerCase();
        const size = filters.ramSize;
        return ram.includes(`${size}гб`) || ram.includes(`${size}gb`);
      });
    }

    // Filter by case color
    if (filters.caseColor !== "all") {
      filtered = filtered.filter(build => {
        const caseName = build.name.toLowerCase();
        const caseSpec = build.specs.case.toLowerCase();
        if (filters.caseColor === "white") return caseName.includes("white") || caseSpec.includes("white");
        if (filters.caseColor === "black") return !caseName.includes("white") && (caseName.includes("black") || caseSpec.includes("black") || (!caseSpec.includes("white") && !caseSpec.includes("rgb")));
        if (filters.caseColor === "rgb") return caseSpec.includes("rgb") || caseSpec.includes("argb") || caseName.includes("gaming");
        return true;
      });
    }

    // Filter by price range
    if (filters.priceRange !== "all") {
      filtered = filtered.filter(build => {
        const price = parseInt(build.price.replace(/\s/g, "").replace("₽", ""));
        if (filters.priceRange === "0-50000") return price < 50000;
        if (filters.priceRange === "50000-100000") return price >= 50000 && price < 100000;
        if (filters.priceRange === "100000-150000") return price >= 100000 && price < 150000;
        if (filters.priceRange === "150000-200000") return price >= 150000 && price < 200000;
        if (filters.priceRange === "200000+") return price >= 200000;
        return true;
      });
    }

    // Sort builds
    if (filters.sortBy !== "default") {
      filtered.sort((a, b) => {
        if (filters.sortBy === "price-asc") {
          return parseInt(a.price.replace(/\s/g, "").replace("₽", "")) - parseInt(b.price.replace(/\s/g, "").replace("₽", ""));
        }
        if (filters.sortBy === "price-desc") {
          return parseInt(b.price.replace(/\s/g, "").replace("₽", "")) - parseInt(a.price.replace(/\s/g, "").replace("₽", ""));
        }
        if (filters.sortBy === "name-asc") {
          return a.name.localeCompare(b.name);
        }
        if (filters.sortBy === "name-desc") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    }

    return filtered;
  };
  // Memoize filtered builds for performance
  const filteredBuilds = useMemo(() => getFilteredAndSortedBuilds(), [filters]);

  useEffect(() => {
    // Skip all GSAP animations on mobile/low-performance devices or if user prefers reduced motion
    if (prefersReducedMotion || isLowPerformance) return;

    const ctx = gsap.context(() => {
        // About section animation
        gsap.from(aboutRef.current?.querySelector(".section-title"), {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
        });

        // Builds section animation
        gsap.from(buildsRef.current?.querySelector(".section-title"), {
          scrollTrigger: {
            trigger: buildsRef.current,
            start: "top 85%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
        });

        // Animate cards
        gsap.from(buildsRef.current?.querySelectorAll(".product-card") ?? [], {
          scrollTrigger: {
            trigger: buildsRef.current,
            start: "top 75%",
          },
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.6,
        });

        // Footer animation
        gsap.from(footerRef.current, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
        });
    });

    return () => ctx.revert();
  }, [isLowPerformance, prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 relative overflow-hidden scroll-mt-20">
        {/* Animated glowing backgrounds - conditional rendering */}
        {!isLowPerformance && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 -right-32 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[60px] animate-glow-pulse" />
            <div className="absolute bottom-0 -left-32 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[60px] animate-glow-fade" style={{ animationDelay: '1s' }} />
          </div>
        )}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-6 glow-text">
              О компании <span className="text-primary">Eclipse PC</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              В Eclipse PC мы увлечены созданием непревзойденного компьютерного опыта. С момента основания мы посвятили себя сборке как бюджетных, так и премиальных кастомных ПК, сочетающих передовые технологии с исключительным мастерством. Наша команда опытных сборщиков привносит многолетний опыт и глубокое понимание того, что нужно геймерам, креаторам и профессионалам для достижения успеха в работе и игре.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Индивидуальных сборок собрано</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Клиентов довольны</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5 лет</div>
              <p className="text-muted-foreground">Средняя гарантия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <AboutSection />
      
      {/* Pre-Configured Builds Section */}
      <section ref={buildsRef} id="builds" className="pt-6 pb-24 relative overflow-hidden scroll-mt-20">
        {/* Animated glowing backgrounds - conditional */}
        {!isLowPerformance && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-12 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[50px] animate-glow-fade" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-12 right-1/4 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[50px] animate-glow-pulse" style={{ animationDelay: '4s' }} />
          </div>
        )}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-4 glow-text">
              Готовые <span className="text-primary">сборки</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите из наших экспертно созданных конфигураций или настройте свою собственную
            </p>
          </div>
          
          <BuildsFilter onFilterChange={setFilters} />
          
          {filteredBuilds.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">Нет компьютеров, соответствующих выбранным фильтрам</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры фильтрации</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBuilds.map((build, index) => (
                <div key={index} className="product-card">
                  <ProductCard {...build} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer with Social Media */}
      <footer ref={footerRef} className="py-16 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold glow-text">Eclipse PC</h3>
            <p className="text-muted-foreground">
              Строим будущее, один ПК за раз
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              <Link 
                to="/privacy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Условия использования
              </Link>
              <Link 
                to="/cookies" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Политика Cookies
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              Почта для поддержки: <a href="mailto:support@eclipsepc.ru" className="text-muted-foreground hover:text-primary transition-colors">support@eclipsepc.ru</a>
            </p>
            <p className="text-sm text-muted-foreground pt-2">
              © 2024 Eclipse PC. Все права защищены.
            </p>
          </div>
        </div>

        {!isLowPerformance && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="glow-orb absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="glow-orb absolute top-1/3 right-1/3 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
          </div>
        )}
      </footer>
    </div>
  );
};

export default Index;
