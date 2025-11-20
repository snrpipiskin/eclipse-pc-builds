import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import pcBuild1 from "@/assets/apex-hero-1.jpg";
import pcBuild2 from "@/assets/pc-build-5.jpg";
import pcBuild3 from "@/assets/pc-build-6.png";
import pcBuild4 from "@/assets/pc-build-7.jpg";
import pcBuild5 from "@/assets/pc-build-8.jpg";
import pcBuild6 from "@/assets/pc-build-9.jpg";
import eclipseWhite1 from "@/assets/eclipse-white-1.jpg";
import eclipseWhite2 from "@/assets/eclipse-white-2.jpg";
import flowWhite1 from "@/assets/flow-white-1.jpg";
import flowWhite2 from "@/assets/flow-white-2.jpg";
import flowWhite3 from "@/assets/flow-white-3.jpg";
import flowWhite4 from "@/assets/flow-white-4.jpg";
import flow1 from "@/assets/flow-1.jpg";
import flow2 from "@/assets/flow-2.jpg";
import flow3 from "@/assets/flow-3.jpg";
import flow4 from "@/assets/flow-4.jpg";
import flow5 from "@/assets/flow-5.jpg";
import eclipse1 from "@/assets/eclipse-1.jpg";
import eclipse2 from "@/assets/eclipse-2.jpg";
import eclipse3 from "@/assets/eclipse-3.jpg";
import eclipsePro1 from "@/assets/eclipse-pro-1.jpg";
import eclipsePro2 from "@/assets/eclipse-pro-2.jpg";
import eclipsePro3 from "@/assets/eclipse-pro-3.jpg";
import eclipsePro4 from "@/assets/eclipse-pro-4.jpg";
import eclipsePro5 from "@/assets/eclipse-pro-5.jpg";
import eclipseStart1 from "@/assets/eclipse-start-1.jpg";
import eclipseStart2 from "@/assets/eclipse-start-2.jpg";
import eclipseStart3 from "@/assets/eclipse-start-3.jpg";
import eclipseStart4 from "@/assets/eclipse-start-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const buildsRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const builds = [
    {
      id: "eclipse-starter",
      name: "APEX HERO",
      price: "198 000₽",
      image: pcBuild1,
      specs: {
        processor: "AMD Ryzen 7 7800X3D",
        gpu: "NVIDIA RTX 5070 (BLACK)",
        motherboard: "ASRock B650 Pro RS",
        cooling: "Cougar Poseidon Elite 360 ARGB",
        ram: "32Гб DDR5 ADATA XPG Lancer Blade RGB 2x16Гб 6000МГц",
        storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
        psu: "1STPLAYER NGDP, 850W, 80+ Gold",
        case: "LIAN LI O11 Vision COMPACT"
      }
    },
    {
      id: "eclipse-gaming",
      name: "ECLIPSE WHITE",
      price: "155 000₽",
      image: pcBuild2,
      specs: {
        processor: "Intel Core i5-14600KF",
        gpu: "NVIDIA RTX 5060 Ti 16Gb (BLACK)",
        motherboard: "ASRock B760 Pro RS",
        cooling: "Cougar Poseidon Elite 360 ARGB",
        ram: "32Гб ADATA XPG Lancer Blade RGB 2x16Гб 6000МГц",
        storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
        psu: "PHANTEKS AMP BH, 650W, 80+ Bronze White",
        case: "ARDOR GAMING Crystal CC2"
      }
    },
    {
      id: "eclipse-ultimate",
      name: "FLOW WHITE",
      price: "99 000₽",
      image: pcBuild3,
      specs: {
        processor: "AMD Ryzen 5 7500F",
        gpu: "NVIDIA RTX 5060 (BLACK)",
        motherboard: "MSI PRO B650M-B",
        cooling: "JONSBO CR-1000 V2 PRO ARGB White",
        ram: "16Гб ADATA XPG Lancer 2x8Гб 5600МГц",
        storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
        psu: "PHANTEKS AMP BH 650W (80+ BRONZE) White",
        case: "Powercase Alisio Micro Z3W"
      }
    },
    {
      id: "eclipse-creator",
      name: "FLOW",
      price: "87 000₽",
      image: pcBuild4,
      specs: {
        processor: "Intel Core i5-12400F",
        gpu: "NVIDIA RTX 5060",
        motherboard: "MSI PRO H610M-G DDR4",
        cooling: "XASTRA AR400 ARGB",
        ram: "16Гб ADATA XPG SPECTRIX D45G RGB 2x8Гб 3200МГц",
        storage: "1000 ГБ M.2 NVMe накопитель MSI SPATIUM M371",
        psu: "GAMERSTORM PF500X, 500W, 80+ Bronze",
        case: "XASTRA A400M"
      }
    },
    {
      id: "eclipse-streamer",
      name: "ECLIPSE",
      price: "150 000₽",
      image: pcBuild5,
      specs: {
        processor: "Intel Core i5-14600KF",
        gpu: "NVIDIA RTX 5060 Ti 16Gb",
        motherboard: "MSI PRO B760-P II",
        cooling: "Ocypus Delta L36 ARGB V2",
        ram: "32Гб ADATA XPG Lancer Blade RGB 2x16Гб 6000МГц",
        storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
        psu: "PHANTEKS AMP BH, 650W, 80+ Bronze",
        case: "ARDOR GAMING Crystal CC2"
      }
    },
    {
      id: "eclipse-elite",
      name: "ECLIPSE PRO",
      price: "98 000₽",
      image: pcBuild6,
      specs: {
        processor: "AMD Ryzen 5 7500F",
        gpu: "NVIDIA RTX 5060",
        motherboard: "MSI PRO B650M-B",
        cooling: "XASTRA AR400 ARGB",
        ram: "16Гб ADATA XPG Lancer 2x8Гб 5600МГц",
        storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
        psu: "Deepcool GAMERSTORM PF600X, 600W, 80+ Bronze",
        case: "XASTRA A400M"
      }
    },
    {
      id: "eclipse-start",
      name: "ECLIPSE START",
      price: "39 500₽",
      image: eclipseStart1,
      specs: {
        processor: "AMD Ryzen 5 5500",
        gpu: "RTX 2060 Super",
        motherboard: "Asus / Msi / Gigabyte",
        cooling: "JONSBO CR-1000 EVO ARGB",
        ram: "16GB DDR4 2x8Гб 3200МГц",
        storage: "500GB SSD",
        psu: "600W 80+ Bronze",
        case: "Gaming RGB (более 30 на выбор)"
      }
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
        // About section animation
        gsap.from(aboutRef.current?.querySelector(".section-title"), {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
        });

        // Builds section animation
        gsap.from(buildsRef.current?.querySelector(".section-title"), {
          scrollTrigger: {
            trigger: buildsRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
        });

        gsap.from(buildsRef.current?.querySelectorAll(".product-card") ?? [], {
          scrollTrigger: {
            trigger: buildsRef.current,
            start: "top 70%",
          },
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 0.8,
        });

        // Footer animation
        gsap.from(footerRef.current, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
          opacity: 0,
          y: 60,
          duration: 1,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 relative">
        {/* Animated glowing backgrounds with smooth transitions */}
        <div className="absolute inset-0 pointer-events-none -top-40 -bottom-40">
          <div className="absolute top-40 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
          <div className="absolute bottom-32 -left-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-glow-fade" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-6 glow-text">
              О компании <span className="text-primary">Eclipse PC</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              В Eclipse PC мы увлечены созданием непревзойденного компьютерного опыта. С момента основания мы посвятили себя сборке премиальных кастомных ПК, сочетающих передовые технологии с исключительным мастерством. Наша команда опытных сборщиков привносит многолетний опыт и глубокое понимание того, что нужно геймерам, креаторам и профессионалам для достижения успеха в работе и игре.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Индивидуальных сборок доставлено</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Удовлетворенность клиентов</p>
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
      <section ref={buildsRef} id="builds" className="pt-6 pb-24 relative">
        {/* Animated glowing backgrounds with extended reach */}
        <div className="absolute inset-0 pointer-events-none -top-40 -bottom-40">
          <div className="absolute top-48 left-1/4 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[100px] animate-glow-fade" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[90px] animate-glow-fade" style={{ animationDelay: '5s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-4 glow-text">
              Готовые <span className="text-primary">сборки</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите из наших экспертно созданных конфигураций или настройте свою собственную
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builds.map((build, index) => (
              <div key={index} className="product-card">
                <ProductCard {...build} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
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
            
            <p className="text-sm text-muted-foreground pt-6">
              © 2024 Eclipse PC. All rights reserved.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </footer>
    </div>
  );
};

export default Index;
