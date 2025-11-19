import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Cpu, HardDrive, Zap, Monitor } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  specs: {
    processor: string;
    gpu: string;
    ram: string;
    storage: string;
  };
}

const ProductCard = ({ name, price, image, specs }: ProductCardProps) => {
  const handleOrder = () => {
    const message = `Hi! I'm interested in the ${name} configuration for ${price}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Create dialog with contact options
    const contactDialog = window.confirm(
      `Choose your preferred contact method:\n\nOK - WhatsApp\nCancel - Show more options`
    );
    
    if (contactDialog) {
      window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    } else {
      const otherOptions = window.confirm(
        `Choose contact method:\n\nOK - Telegram\nCancel - VK`
      );
      
      if (otherOptions) {
        window.open(`https://t.me/share/url?url=&text=${encodedMessage}`, '_blank');
      } else {
        window.open(`https://vk.com/share.php?url=&title=${encodedMessage}`, '_blank');
      }
    }
  };

  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      <div className="relative overflow-hidden bg-secondary/50">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-3xl font-bold text-primary">{price}</p>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3 group/spec p-2 -mx-2 rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer">
            <Cpu className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover/spec:scale-125 group-hover/spec:rotate-12 transition-transform duration-300" />
            <div className="flex-1">
              <span className="text-muted-foreground group-hover/spec:text-primary transition-colors duration-300">Processor:</span>
              <p className="font-medium group-hover/spec:text-primary transition-colors duration-300">{specs.processor}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group/spec p-2 -mx-2 rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer">
            <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover/spec:scale-125 group-hover/spec:rotate-12 transition-transform duration-300" />
            <div className="flex-1">
              <span className="text-muted-foreground group-hover/spec:text-primary transition-colors duration-300">Graphics:</span>
              <p className="font-medium group-hover/spec:text-primary transition-colors duration-300">{specs.gpu}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group/spec p-2 -mx-2 rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer">
            <Monitor className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover/spec:scale-125 group-hover/spec:rotate-12 transition-transform duration-300" />
            <div className="flex-1">
              <span className="text-muted-foreground group-hover/spec:text-primary transition-colors duration-300">Memory:</span>
              <p className="font-medium group-hover/spec:text-primary transition-colors duration-300">{specs.ram}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group/spec p-2 -mx-2 rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer">
            <HardDrive className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover/spec:scale-125 group-hover/spec:rotate-12 transition-transform duration-300" />
            <div className="flex-1">
              <span className="text-muted-foreground group-hover/spec:text-primary transition-colors duration-300">Storage:</span>
              <p className="font-medium group-hover/spec:text-primary transition-colors duration-300">{specs.storage}</p>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full font-semibold group/btn relative overflow-hidden" 
          size="lg"
          onClick={handleOrder}
        >
          <span className="relative z-10">Order Now</span>
          <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
