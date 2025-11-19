import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="group cursor-pointer">
          <span className="text-2xl font-bold glow-text transition-all duration-300 group-hover:scale-105 inline-block">
            ECLIPSE PC
          </span>
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
