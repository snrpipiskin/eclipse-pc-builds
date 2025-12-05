import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import cpuIcon from "@/assets/icons/cpu.png";
import gpuIcon from "@/assets/icons/gpu.png";
import motherboardIcon from "@/assets/icons/motherboard.png";
import coolingIcon from "@/assets/icons/cooling.png";
import ramIcon from "@/assets/icons/ram.png";
import ssdIcon from "@/assets/icons/ssd.png";
import psuIcon from "@/assets/icons/psu.png";
import caseIcon from "@/assets/icons/case.png";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  images?: string[];
  specs: {
    processor: string;
    gpu: string;
    motherboard: string;
    cooling: string;
    ram: string;
    storage: string;
    psu: string;
    case: string;
  };
}

const ProductCard = ({ id, name, price, image, images, specs }: ProductCardProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageArray = images && images.length > 0 ? images : [image];

  const handleDetails = () => {
    navigate(`/product/${id}`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageArray.length <= 1) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const index = Math.floor(percentage * imageArray.length);
    const clampedIndex = Math.max(0, Math.min(index, imageArray.length - 1));
    
    setCurrentImageIndex(clampedIndex);
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 group glass-card">
      <div 
        className="relative overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src={imageArray[currentImageIndex]} 
          alt={name}
          loading="lazy"
          className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ filter: 'brightness(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        
        {/* Image indicators */}
        {imageArray.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {imageArray.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'w-6 bg-primary' 
                    : 'w-1 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
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
              <img src={cpuIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              Процессор
            </span>
            <span className="font-medium text-right">{specs.processor}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <img src={gpuIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              Видеокарта
            </span>
            <span className="font-medium text-right">{specs.gpu}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <img src={motherboardIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              Материнская плата
            </span>
            <span className="font-medium text-right">{specs.motherboard}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <img src={coolingIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              Охлаждение
            </span>
            <span className="font-medium text-right">{specs.cooling}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center shrink-0">
              <img src={ramIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              ОЗУ
            </span>
            <span className="font-medium text-right break-words ml-2">{specs.ram}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <img src={ssdIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              SSD накопитель
            </span>
            <span className="font-medium text-right">{specs.storage}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground flex items-center">
              <img src={psuIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              Блок питания
            </span>
            <span className="font-medium text-right">{specs.psu}</span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground flex items-center">
              <img src={caseIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              Корпус
            </span>
            <span className="font-medium text-right">{specs.case}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full group/btn relative overflow-hidden glow-box"
          onClick={handleDetails}
        >
          <span className="relative z-10 flex items-center justify-center">
            Подробнее
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
