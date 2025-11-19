import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/eclipse-logo.png";
import textLogo from "@/assets/eclipse-text-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
            <img src={logo} alt="Eclipse PC Logo" className="h-full w-full object-contain" />
          </div>
          <div className="h-10 transition-all duration-300 group-hover:scale-105 group-hover:brightness-[1.3] group-hover:contrast-[1.2] group-hover:hue-rotate-[-15deg]">
            <img src={textLogo} alt="Eclipse PC" className="h-full w-auto object-contain" />
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">Home</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="#builds" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">Builds</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="/about" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">About</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="/contact" className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group/link">
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>

        <Button variant="default" className="hidden md:flex font-semibold">
          Start Building
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
