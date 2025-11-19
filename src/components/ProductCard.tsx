import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, HardDrive, ArrowRight } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

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
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  const handleOrder = () => {
    setShowDialog(true);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-2 group glass-card">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1 glass-card rounded-full">
          <span className="text-xs font-bold text-primary">NEW</span>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{name}</CardTitle>
          <span className="text-2xl font-bold text-primary glow-text">{price}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <Cpu className="mr-2 h-4 w-4" />
              CPU
            </span>
            <span className="font-medium text-right">{specs.processor}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <Cpu className="mr-2 h-4 w-4" />
              GPU
            </span>
            <span className="font-medium text-right">{specs.gpu}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <HardDrive className="mr-2 h-4 w-4" />
              RAM
            </span>
            <span className="font-medium text-right">{specs.ram}</span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground flex items-center">
              <HardDrive className="mr-2 h-4 w-4" />
              Storage
            </span>
            <span className="font-medium text-right">{specs.storage}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full group/btn relative overflow-hidden glow-box"
          onClick={handleOrder}
        >
          <span className="relative z-10 flex items-center justify-center">
            Order Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
          </span>
        </Button>
      </CardFooter>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="glass-card">
          <AlertDialogHeader>
            <AlertDialogTitle>Ready to Order?</AlertDialogTitle>
            <AlertDialogDescription>
              To complete your order for the {name}, please contact us through one of these channels:
              <div className="mt-4 space-y-2">
                <p className="font-medium">WhatsApp, Telegram, or VK</p>
                <p className="text-sm">We'll help you finalize your custom build and answer any questions!</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              toast({
                title: "Thank you!",
                description: "Please reach out via WhatsApp, Telegram, or VK to complete your order.",
              });
            }}>
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};

export default ProductCard;
