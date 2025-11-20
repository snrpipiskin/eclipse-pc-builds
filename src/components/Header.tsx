import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import textLogo from "@/assets/eclipse-text-logo.png";
import ContactDialog from "@/components/ContactDialog";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <a 
            href="tel:+79993989762" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-semibold text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
          >
            <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            <span>+7 (999) 398-97-62</span>
          </a>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
