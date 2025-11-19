import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="text-2xl font-bold tracking-tight">ECLIPSE PC</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </a>
          <a href="#builds" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Builds
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#contacts" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contacts
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
