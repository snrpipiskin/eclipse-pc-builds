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

const ProductCard = ({ id, name, price, image, specs }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-2 group glass-card">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 group-hover:saturate-150"
          style={{ filter: 'brightness(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent group-hover:bg-primary/20 transition-colors duration-500" />
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
            <span className="text-muted-foreground flex items-center">
              <img src={ramIcon} alt="" className="mr-2 h-4 w-4 brightness-0 invert" />
              ОЗУ
            </span>
            <span className="font-medium text-right">{specs.ram}</span>
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
