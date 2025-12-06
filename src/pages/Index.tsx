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
// Social icons are now inline SVGs for consistent theming
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
                href="https://wa.me/79993989762" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a 
                href="https://vk.com/eclipsepc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                title="ВКонтакте"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.713-1.033-1.001-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.562c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202-2.17-3.048-2.763-5.335-2.763-5.792 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.457 2.271 4.607 2.865 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.746c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.149-3.574 2.149-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.356 4.031-2.356 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.729-.576.729z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/eclipsepc_ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                title="Telegram"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a 
                href="https://www.avito.ru/brands/99ae3b0888a34cd772f8690683463ef4/all?sellerId=f4be8b98442a0b6811e031e77e59aca2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                title="Avito"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.634c-.18.18-.422.28-.677.28H6.783a.957.957 0 0 1-.957-.957V8.043c0-.529.428-.957.957-.957h10.434c.255 0 .497.1.677.28l1.5 1.5a.957.957 0 0 1 0 1.354l-1.5 1.5a.957.957 0 0 1-.677.28H9.5v2h6.717c.255 0 .497.1.677.28l1.5 1.5a.957.957 0 0 1 0 1.354l-1.5 1.5z"/>
                </svg>
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
