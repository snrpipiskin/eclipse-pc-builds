import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Preloader from "@/components/Preloader";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import pcBuild1 from "@/assets/pc-build-4.jpg";
import pcBuild2 from "@/assets/pc-build-5.jpg";
import pcBuild3 from "@/assets/pc-build-6.png";
import pcBuild4 from "@/assets/pc-build-7.jpg";
import pcBuild5 from "@/assets/pc-build-8.jpg";
import pcBuild6 from "@/assets/pc-build-9.jpg";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef<HTMLElement>(null);
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
      image: pcBuild4,
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
      image: pcBuild5,
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
      image: pcBuild6,
      specs: {
        processor: "Intel Core i9-14900KS",
        gpu: "NVIDIA RTX 4090 24GB",
        ram: "128GB DDR5 6400MHz",
        storage: "8TB NVMe Gen4 SSD"
      }
    }
  ];

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading]);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="pt-24 pb-8 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-6 glow-text">
              About <span className="text-primary">Eclipse PC</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Eclipse PC, we're passionate about creating the ultimate computing experience. Since our founding, we've been dedicated to building premium custom PCs that combine cutting-edge technology with exceptional craftsmanship. Our team of expert builders brings years of experience and a deep understanding of what gamers, creators, and professionals need to excel in their work and play.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Custom Builds Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5yrs</div>
              <p className="text-muted-foreground">Average Warranty</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Why Choose Us Section */}
      <AboutSection />
      
      {/* Call to Action Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text">
              Ready to Build Your <span className="text-primary">Dream PC</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who've upgraded their gaming and productivity with Eclipse PC. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button 
                onClick={() => document.getElementById('builds')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                View Pre-Built Systems
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-background/10 backdrop-blur-sm border-2 border-primary/50 text-foreground rounded-lg font-semibold text-lg hover:bg-background/20 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                Request Custom Build
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pre-Configured Builds Section */}
      <section ref={buildsRef} id="builds" className="pt-0 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-4 glow-text">
              Pre-Configured <span className="text-primary">Builds</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our expertly crafted configurations or customize your own
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
              Building the future, one PC at a time
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
