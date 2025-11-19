import Header from "@/components/Header";
import { Shield, Zap, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h1 className="text-5xl md:text-7xl font-bold">
              About <span className="text-primary">Eclipse PC</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're passionate about building premium, high-performance computers 
              that exceed expectations. Every Eclipse PC is crafted with precision, 
              using top-tier components and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Every component is carefully selected and tested to ensure maximum reliability and performance.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Peak Performance</h3>
              <p className="text-muted-foreground">
                Optimized configurations that deliver exceptional gaming and workstation performance.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Expert Support</h3>
              <p className="text-muted-foreground">
                Our team of specialists is always ready to help you choose the perfect configuration.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Premium Build</h3>
              <p className="text-muted-foreground">
                Meticulous cable management and aesthetic design in every build we create.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Eclipse PC, we believe everyone deserves access to powerful, reliable computing. 
                Whether you're a competitive gamer, content creator, or professional, we build systems 
                that unleash your full potential. Our commitment to quality, performance, and customer 
                satisfaction drives everything we do.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in custom PC building, we've refined our process to deliver 
                exceptional results. Every Eclipse PC undergoes rigorous testing before shipping, 
                ensuring you receive a system that's ready to perform from day one. We stand behind 
                our work with comprehensive warranties and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
