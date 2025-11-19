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
              <Button size="lg" className="font-semibold group/hero relative overflow-hidden hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/hero:translate-x-2 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 scale-x-0 group-hover/hero:scale-x-100 transition-transform duration-500 origin-left" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold border-border hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                View Pre-Built PCs
              </Button>
            </div>
          </div>
          
          <div className="relative group/hero-img">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover/hero-img:bg-primary/30 transition-colors duration-500" />
            <img 
              src={heroImage} 
              alt="Eclipse Gaming PC" 
              className="relative rounded-2xl shadow-2xl group-hover/hero-img:scale-105 transition-transform duration-700 group-hover/hero-img:shadow-primary/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
