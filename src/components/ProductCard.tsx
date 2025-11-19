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
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
      <div className="relative overflow-hidden bg-secondary/50">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-3xl font-bold text-primary">{price}</p>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <Cpu className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-muted-foreground">Processor:</span>
              <p className="font-medium">{specs.processor}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-muted-foreground">Graphics:</span>
              <p className="font-medium">{specs.gpu}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Monitor className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-muted-foreground">Memory:</span>
              <p className="font-medium">{specs.ram}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <HardDrive className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-muted-foreground">Storage:</span>
              <p className="font-medium">{specs.storage}</p>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full font-semibold" 
          size="lg"
          onClick={handleOrder}
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
