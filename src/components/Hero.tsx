import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-pc.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-primary text-sm font-bold tracking-wider uppercase">
                Premium Gaming PCs
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build The PC
              <br />
              <span className="text-primary">Of Your Dreams</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Customize high-performance computers tailored to your needs. 
              From gaming to workstations, we deliver excellence with fast shipping and expert support.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold group">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold border-border hover:bg-secondary">
                View Pre-Built PCs
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src={heroImage} 
              alt="Eclipse Gaming PC" 
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
