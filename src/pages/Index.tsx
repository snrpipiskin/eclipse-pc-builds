import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Benefits";
import pcBuild1 from "@/assets/pc-build-1.jpg";
import pcBuild2 from "@/assets/pc-build-2.jpg";
import pcBuild3 from "@/assets/pc-build-3.jpg";

const Index = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section id="builds" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pre-Configured <span className="text-primary">Builds</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our expertly crafted configurations or customize your own
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builds.map((build, index) => (
              <ProductCard key={index} {...build} />
            ))}
          </div>
        </div>
      </section>
      
      <Benefits />
      
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Eclipse PC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
