import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowLeft, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
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
import auraLite1 from "@/assets/aura-lite-1.jpg";
import auraLite2 from "@/assets/aura-lite-2.jpg";
import auraLite3 from "@/assets/aura-lite-3.jpg";
import series2_1 from "@/assets/series-2-1.png";
import series2_2 from "@/assets/series-2-2.jpg";
import series2_3 from "@/assets/series-2-3.jpg";
import series2_4 from "@/assets/series-2-4.jpg";
import series2Alpha1 from "@/assets/series-2-alpha-1.jpeg";
import series2Alpha2 from "@/assets/series-2-alpha-2.jpeg";
import series2Alpha3 from "@/assets/series-2-alpha-3.jpeg";
import series2Alpha4 from "@/assets/series-2-alpha-4.jpeg";

const productData = {
  "aura-lite": {
    name: "AURA LITE",
    price: "31 990₽",
    images: [auraLite1, auraLite2, auraLite3],
    description: "Экономичная сборка на базе серверного процессора Intel Xeon E5-2640v4 с 10 ядрами и 20 потоками. В паре с RTX 2060 6GB обеспечивает отличную производительность в современных играх при доступной цене.",
    specs: {
      processor: "Xeon E5-2640v4",
      gpu: "RTX 2060 6GB",
      motherboard: "Серверная материнская плата",
      cooling: "JONSBO CR-1000 EVO ARGB WHITE",
      ram: "16Гб DDR4 2133 2x8Гб 2133МГц",
      storage: "SSD 120GB, HDD 500GB",
      psu: "700W IWONGOU ATX (RM700) WHITE Bronze+",
      case: "Warrior Z5 WHITE"
    }
  },
  "series-2": {
    name: "Series 2",
    price: "89 000₽",
    images: [series2_4, series2_2, series2_3, series2_1],
    description: "Мощная игровая сборка на базе AMD Ryzen 5600 и RTX 5060. Отличный выбор для современных игр в Full HD и 1440p с высокими настройками графики.",
    specs: {
      processor: "Ryzen 5600",
      gpu: "Gigabyte GeForce RTX 5060 WINDFORCE OC 8 ГБ",
      motherboard: "Gigabyte B550M K",
      cooling: "XASTRA AR400 ARGB Basic",
      ram: "16 Gb 3200 MHz Netac Shadow II (2x8GB)",
      storage: "NETAC NV3000 1 ТБ",
      psu: "Powercase PW500",
      case: "Ocypus Gamma C52 ARGB BLACK"
    }
  },
  "series-2-alpha": {
    name: "Series 2 αlpha",
    price: "105 000₽",
    images: [series2Alpha1, series2Alpha2, series2Alpha3, series2Alpha4],
    description: "Стильная белая сборка на базе Intel Core i5 12400F и RTX 5060. Увеличенный объём оперативной памяти 32GB и элегантный белый дизайн для современного рабочего места.",
    specs: {
      processor: "i5 12400F",
      gpu: "Gigabyte RTX 5060 EAGLE OC ICE-8",
      motherboard: "MSI PRO B760M-A DDR4 II",
      cooling: "JONSBO CR-1000 EVO ARGB White",
      ram: "Knigbank White 3200MHz - 32GB (2x16GB)",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "Powercase PW500",
      case: "Zalman P10 White"
    }
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const product = productId ? productData[productId as keyof typeof productData] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Продукт не найден</h1>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const handleOrder = () => {
    setShowDialog(true);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-8 pt-24">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative group overflow-hidden rounded-lg glass-card">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />
              <button
                onClick={() => setZoomImage(product.images[selectedImage])}
                className="absolute top-4 right-4 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-3xl text-primary font-bold glow-text">{product.price}</p>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4 glass-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Характеристики</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Процессор</span>
                  <span className="font-medium">{product.specs.processor}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Видеокарта</span>
                  <span className="font-medium">{product.specs.gpu}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Материнская плата</span>
                  <span className="font-medium">{product.specs.motherboard}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Охлаждение</span>
                  <span className="font-medium">{product.specs.cooling}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">ОЗУ</span>
                  <span className="font-medium">{product.specs.ram}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">SSD накопитель</span>
                  <span className="font-medium">{product.specs.storage}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Блок питания</span>
                  <span className="font-medium">{product.specs.psu}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Корпус</span>
                  <span className="font-medium">{product.specs.case}</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full glow-box"
              onClick={handleOrder}
            >
              Заказать
            </Button>
          </div>
        </div>
      </div>

      {/* Zoom Dialog */}
      <Dialog open={!!zoomImage} onOpenChange={() => setZoomImage(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-2">
          <div className="relative group">
            <img
              src={zoomImage || ""}
              alt="Zoomed view"
              className="w-full max-h-[80vh] object-contain"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => {
                    const currentIndex = product.images.findIndex(img => img === zoomImage);
                    const prevIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
                    setZoomImage(product.images[prevIndex]);
                    setSelectedImage(prevIndex);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => {
                    const currentIndex = product.images.findIndex(img => img === zoomImage);
                    const nextIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
                    setZoomImage(product.images[nextIndex]);
                    setSelectedImage(nextIndex);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Order Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Заказ {product.name}</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <p>Для оформления заказа свяжитесь с нами:</p>
              <div className="space-y-2">
                <p>
                  <strong>Telegram:</strong>{" "}
                  <a 
                    href="https://t.me/eclipsepc_order" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @eclipsepc_order
                  </a>
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Укажите название сборки ({product.name}) при обращении
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Закрыть</AlertDialogCancel>
            <AlertDialogAction asChild>
              <a 
                href="https://t.me/eclipsepc_order" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Написать в Telegram
              </a>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductDetail;
