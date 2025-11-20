import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import pcBuild1 from "@/assets/pc-build-4.jpg";
import pcBuild2 from "@/assets/pc-build-5.jpg";
import pcBuild3 from "@/assets/pc-build-6.png";
import pcBuild4 from "@/assets/pc-build-7.jpg";
import pcBuild5 from "@/assets/pc-build-8.jpg";
import pcBuild6 from "@/assets/pc-build-9.jpg";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const buildsRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const builds = [
    {
      id: "eclipse-starter",
      name: "ECLIPSE STARTER",
      price: "129 900₽",
      image: pcBuild1,
      specs: {
        processor: "AMD Ryzen 5 7600X",
        gpu: "NVIDIA RTX 4060 8GB",
        motherboard: "ASUS B650",
        cooling: "DeepCool AK400",
        ram: "16GB DDR5 5600MHz",
        storage: "1TB NVMe SSD",
        psu: "600W 80+ Bronze",
        case: "DeepCool CC560"
      }
    },
    {
      id: "eclipse-gaming",
      name: "ECLIPSE GAMING",
      price: "189 900₽",
      image: pcBuild2,
      specs: {
        processor: "AMD Ryzen 7 7800X3D",
        gpu: "NVIDIA RTX 4070 Ti 12GB",
        motherboard: "MSI X670E",
        cooling: "Arctic Freezer 360",
        ram: "32GB DDR5 6000MHz",
        storage: "2TB NVMe Gen4 SSD",
        psu: "750W 80+ Gold",
        case: "Lian Li O11 Dynamic"
      }
    },
    {
      id: "eclipse-ultimate",
      name: "ECLIPSE ULTIMATE",
      price: "329 900₽",
      image: pcBuild3,
      specs: {
        processor: "AMD Ryzen 9 7950X",
        gpu: "NVIDIA RTX 4090 24GB",
        motherboard: "ASUS ROG X670E",
        cooling: "NZXT Kraken Z73",
        ram: "64GB DDR5 6400MHz",
        storage: "4TB NVMe Gen4 SSD",
        psu: "1000W 80+ Platinum",
        case: "Corsair 5000D Airflow"
      }
    },
    {
      id: "eclipse-creator",
      name: "ECLIPSE CREATOR",
      price: "249 900₽",
      image: pcBuild4,
      specs: {
        processor: "Intel Core i9-14900K",
        gpu: "NVIDIA RTX 4070 12GB",
        motherboard: "ASUS Z790",
        cooling: "Noctua NH-D15",
        ram: "64GB DDR5 5600MHz",
        storage: "2TB NVMe Gen4 SSD",
        psu: "850W 80+ Gold",
        case: "Fractal Design Torrent"
      }
    },
    {
      id: "eclipse-streamer",
      name: "ECLIPSE STREAMER",
      price: "219 900₽",
      image: pcBuild5,
      specs: {
        processor: "AMD Ryzen 9 7900X",
        gpu: "NVIDIA RTX 4070 Ti 12GB",
        motherboard: "MSI B650",
        cooling: "Arctic Liquid Freezer II",
        ram: "32GB DDR5 6000MHz",
        storage: "2TB NVMe Gen4 SSD + 2TB HDD",
        psu: "750W 80+ Gold",
        case: "NZXT H710i"
      }
    },
    {
      id: "eclipse-elite",
      name: "ECLIPSE ELITE",
      price: "499 900₽",
      image: pcBuild6,
      specs: {
        processor: "Intel Core i9-14900KS",
        gpu: "NVIDIA RTX 4090 24GB",
        motherboard: "ASUS ROG Maximus Z790",
        cooling: "EK-AIO Elite 360",
        ram: "128GB DDR5 6400MHz",
        storage: "8TB NVMe Gen4 SSD",
        psu: "1200W 80+ Titanium",
        case: "Lian Li O11 XL"
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
