import { useState } from "react";
import { Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import textLogo from "@/assets/eclipse-text-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMobileNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group cursor-pointer">
          <div className="h-10 transition-all duration-300 group-hover:scale-105 group-hover:brightness-[1.3] group-hover:contrast-[1.2] group-hover:hue-rotate-[-15deg]">
            <img src={textLogo} alt="Eclipse PC" className="h-full w-auto object-contain" />
          </div>
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">Главная</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button onClick={() => scrollToSection('about')} className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">О нас</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button onClick={() => scrollToSection('builds')} className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">Сборки</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button onClick={() => scrollToSection('contact')} className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">Контакты</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-semibold text-foreground/80">
            <MapPin className="h-4 w-4" />
            <span>г.Грозный, б-р М.А. Эсамбаева, 5</span>
          </div>
          <a 
            href="tel:+79993989762" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-semibold text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
          >
            <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            <span>+7 (999) 398-97-62</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-lg border-border/50">
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="mb-8 mt-2">
                <img src={textLogo} alt="Eclipse PC" className="h-8 w-auto object-contain" />
              </div>
              
              {/* Navigation */}
              <nav className="flex flex-col gap-2">
                <button 
                  onClick={() => handleMobileNavigation('home')} 
                  className="text-lg font-medium text-left py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Главная
                </button>
                <button 
                  onClick={() => handleMobileNavigation('about')} 
                  className="text-lg font-medium text-left py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  О нас
                </button>
                <button 
                  onClick={() => handleMobileNavigation('builds')} 
                  className="text-lg font-medium text-left py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Сборки
                </button>
                <button 
                  onClick={() => handleMobileNavigation('contact')} 
                  className="text-lg font-medium text-left py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Контакты
                </button>
              </nav>
              
              {/* Contact Info */}
              <div className="mt-auto space-y-3 pb-4">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50 text-sm">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>г.Грозный, б-р М.А. Эсамбаева, 5</span>
                </div>
                <a 
                  href="tel:+79993989762" 
                  className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+7 (999) 398-97-62</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
