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
import series2_1 from "@/assets/series-2-1.png";
import series2_2 from "@/assets/series-2-2.jpg";
import series2_3 from "@/assets/series-2-3.jpg";
import series2_4 from "@/assets/series-2-4.jpg";
import series2Alpha1 from "@/assets/series-2-alpha-1.jpeg";
import series2Alpha2 from "@/assets/series-2-alpha-2.jpeg";
import series2Alpha3 from "@/assets/series-2-alpha-3.jpeg";
import series2Alpha4 from "@/assets/series-2-alpha-4.jpeg";
import series4_1 from "@/assets/series-4-1.jpg";
import series4_2 from "@/assets/series-4-2.jpg";
import series4_3 from "@/assets/series-4-3.jpg";
import series4_4 from "@/assets/series-4-4.jpg";
import series4Alpha1 from "@/assets/series-4-alpha-1.jpg";
import series4Alpha2 from "@/assets/series-4-alpha-2.jpg";
import series4Alpha3 from "@/assets/series-4-alpha-3.jpg";
import series4Alpha4 from "@/assets/series-4-alpha-4.jpg";
import series6_1 from "@/assets/series-6-1.jpg";
import series6_2 from "@/assets/series-6-2.jpg";
import series6_3 from "@/assets/series-6-3.png";
import series6_4 from "@/assets/series-6-4.jpg";
import series6Alpha1 from "@/assets/series-6-alpha-1.png";
import series6Alpha2 from "@/assets/series-6-alpha-2.png";
import series6Alpha3 from "@/assets/series-6-alpha-3.png";
import series6Alpha4 from "@/assets/series-6-alpha-4.jpg";
import series7_1 from "@/assets/series-7-1.png";
import series7_2 from "@/assets/series-7-2.png";
import series7_3 from "@/assets/series-7-3.jpg";
import series7_4 from "@/assets/series-7-4.jpg";
import series7Alpha1 from "@/assets/series-7-alpha-1.jpg";
import series7Alpha2 from "@/assets/series-7-alpha-2.jpg";
import series7Alpha3 from "@/assets/series-7-alpha-3.jpg";
import series8_1 from "@/assets/series-8-1.jpg";
import series8_2 from "@/assets/series-8-2.jpg";
import series8_3 from "@/assets/series-8-3.jpg";
import series8_4 from "@/assets/series-8-4.jpg";
import series8Alpha1 from "@/assets/series-8-alpha-1.jpg";
import series8Alpha2 from "@/assets/series-8-alpha-2.jpg";
import series8Alpha3 from "@/assets/series-8-alpha-3.jpg";
import series8Alpha4 from "@/assets/series-8-alpha-4.jpg";
import series9_1 from "@/assets/series-9-1.jpg";
import series9_2 from "@/assets/series-9-2.jpg";
import series9_3 from "@/assets/series-9-3.jpg";
import series9_4 from "@/assets/series-9-4.jpg";
import series9Alpha1 from "@/assets/series-9-alpha-1.jpg";
import series9Alpha2 from "@/assets/series-9-alpha-2.jpg";
import series9Alpha3 from "@/assets/series-9-alpha-3.jpg";
import series9Alpha4 from "@/assets/series-9-alpha-4.jpg";
import seriesX1 from "@/assets/series-x-1.jpg";
import seriesX2 from "@/assets/series-x-2.jpg";
import seriesX3 from "@/assets/series-x-3.jpg";
import seriesX4 from "@/assets/series-x-4.jpg";

const productData = {
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
  },
  "series-4": {
    name: "Series 4",
    price: "130 000₽",
    images: [series4_1, series4_2, series4_3, series4_4],
    description: "Производительная сборка на новой платформе AMD AM5 с DDR5 памятью. Ryzen 5 7500F и RTX 5060 обеспечивают стабильный FPS в современных играх на высоких настройках.",
    specs: {
      processor: "Ryzen 5 7500F",
      gpu: "Gigabyte GeForce RTX 5060 WINDFORCE OC 8 ГБ",
      motherboard: "ASUS PRIME B650M-R",
      cooling: "JONSBO CR-1000 EVO ARGB Black",
      ram: "Team Group T-Force Vulcan DDR5 32GB (2x16GB) 6000 MHz",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "Deepcool GAMERSTORM PF600X",
      case: "DEEPCOOL CG380 3F Black"
    }
  },
  "series-4-alpha": {
    name: "Series 4 αlpha",
    price: "140 000₽",
    images: [series4Alpha1, series4Alpha2, series4Alpha3, series4Alpha4],
    description: "Премиальная белая сборка с RTX 5060 Ti и RGB-подсветкой G.Skill Trident Z5. Идеальное сочетание эстетики и производительности для требовательных пользователей.",
    specs: {
      processor: "Ryzen 5 7500F",
      gpu: "Palit GeForce RTX 5060 Ti White 8GB",
      motherboard: "ASUS PRIME B650M-A WIFI II",
      cooling: "JONSBO CR-1000 EVO ARGB White",
      ram: "G.Skill Trident Z5 RGB DDR5 6000 МГц 2x16 ГБ",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "Deepcool GAMERSTORM PF600X",
      case: "DEEPCOOL CG380 3F White"
    }
  },
  "series-6": {
    name: "Series 6",
    price: "145 000₽",
    images: [series6_1, series6_2, series6_3, series6_4],
    description: "Мощная сборка на 8-ядерном Ryzen 7 8700F с водяным охлаждением. RTX 5060 Ti и DDR5 память обеспечивают превосходную производительность в играх и рабочих задачах.",
    specs: {
      processor: "Ryzen 7 8700F",
      gpu: "Palit GeForce RTX 5060 Ti DUAL 8 ГБ",
      motherboard: "MSI PRO B650M-P",
      cooling: "JONSBO CR-1000 EVO ARGB Black",
      ram: "Team Group T-Force Vulcan DDR5 32GB (2x16GB) 6000 MHz",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "PHANTEKS AMP BH 650",
      case: "Zalman P30 Black V2"
    }
  },
  "series-6-alpha": {
    name: "Series 6 αlpha",
    price: "160 000₽",
    images: [series6Alpha1, series6Alpha2, series6Alpha3, series6Alpha4],
    description: "Флагманская белая сборка с 240мм СВО и RTX 5060 Ti 16GB. Wi-Fi 7, RGB-подсветка G.Skill Trident Z5 и безупречная эстетика для премиального игрового пространства.",
    specs: {
      processor: "Ryzen 7 8700F",
      gpu: "Palit GeForce RTX 5060 Ti White 16GB",
      motherboard: "MSI B850M GAMING PLUS WIFI",
      cooling: "Thermalright Frozen Notte 240 White V2",
      ram: "G.Skill Trident Z5 RGB DDR5 32Gb (2x16Gb) 6000MHz CL34",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "PHANTEKS AMP BH 650 White",
      case: "ZALMAN P30 White"
    }
  },
  "series-7": {
    name: "Series 7",
    price: "175 000₽",
    images: [series7_1, series7_2, series7_3, series7_4],
    description: "Топовая сборка с Ryzen 5 9600X и RTX 5070 12GB. 360мм СВО обеспечивает отличное охлаждение для стабильной работы на максимальных частотах в 4K-гейминге.",
    specs: {
      processor: "Ryzen 5 9600X OEM",
      gpu: "GIGABYTE RTX 5070 WINDFORCE SFF 12G",
      motherboard: "MSI PRO B650M-P",
      cooling: "THERMALRIGHT Frozen Prism 360 ARGB Black",
      ram: "Team Group T-Force Vulcan DDR5 32GB (2x16GB) 6000 MHz",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "1STPLAYER ACK Silver 750W",
      case: "Zalman P30 Black V2"
    }
  },
  "series-7-alpha": {
    name: "Series 7 αlpha",
    price: "195 000₽",
    images: [series7Alpha1, series7Alpha2, series7Alpha3],
    description: "Флагман линейки с Ryzen 7 7700 и RTX 5070 ICE. Материнская плата PROJECT ZERO с безкабельным дизайном, 360мм СВО и 5 RGB-вентиляторов для максимальной эстетики.",
    specs: {
      processor: "RYZEN 7 7700 OEM",
      gpu: "GIGABYTE GeForce RTX 5070 EAGLE OC ICE SFF",
      motherboard: "MSI B650M PROJECT ZERO",
      cooling: "Thermalright Frozen Notte 360 White V2",
      ram: "G.Skill Trident Z5 RGB DDR5 32Gb (2x16Gb) 6000MHz CL34",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "1STPLAYER NGDP Gold 750W White",
      case: "Jonsbo D300 White"
    }
  },
  "series-8": {
    name: "Series 8",
    price: "225 000₽",
    images: [series8_1, series8_2, series8_3, series8_4],
    description: "Экстремальная игровая станция с легендарным 7800X3D и RTX 5070 Ti 16GB. 360мм СВО, 7 RGB-вентиляторов и премиальные комплектующие для бескомпромиссного 4K-гейминга.",
    specs: {
      processor: "Ryzen 7 7800X3D",
      gpu: "PALIT RTX 5070 Ti 16GB GAMING PRO-S",
      motherboard: "MSI PRO B650-S WIFI",
      cooling: "Thermalright Frozen Notte 360 BLACK ARGB V2",
      ram: "G.Skill Ripjaws S5 DDR5 32Gb (2x16Gb) 6000MHz CL30",
      storage: "ADATA LEGEND 900 1 ТБ",
      psu: "Deepcool GAMERSTORM PQ750G GOLD",
      case: "Jonsbo TK-3"
    }
  },
  "series-8-alpha": {
    name: "Series 8 αlpha",
    price: "270 000₽",
    images: [series8Alpha1, series8Alpha2, series8Alpha3, series8Alpha4],
    description: "Абсолютный флагман с 7800X3D и RTX 5070 Ti в белом исполнении. СВО с дисплеем температуры, 10 RGB-вентиляторов и плата B850 BTF для идеального cable-less дизайна.",
    specs: {
      processor: "Ryzen 7 7800X3D",
      gpu: "Gigabyte GeForce RTX 5070 Ti Eagle 16 ГБ",
      motherboard: "ASUS TUF GAMING B850-BTF WIFI",
      cooling: "Thermalright Frozen Vision 360 ARGB White V2",
      ram: "G.Skill Ripjaws S5 White DDR5 32Gb (2x16Gb) 6000MHz CL30",
      storage: "ADATA LEGEND 900 1 ТБ",
      psu: "PHANTEKS AMP GH 850W White GOLD",
      case: "Jonsbo TK-2",
      fans: "Jungle Leopard Galaxy White (10 шт)"
    }
  },
  "series-9": {
    name: "Series 9",
    price: "295 000₽",
    images: [series9_1, series9_2, series9_3, series9_4],
    description: "Ультра-мощная сборка с RTX 5080 и 7800X3D в культовом корпусе LIAN LI O11. 360мм СВО Elite Vision и 8 RGB-вентиляторов для бескомпромиссного 4K-гейминга.",
    specs: {
      processor: "AMD Ryzen 7 7800X3D",
      gpu: "MSI RTX 5080 16G INSPIRE 3X OC",
      motherboard: "ASUS TUF GAMING B850-PLUS WIFI",
      cooling: "Thermalright Elite Vision 360 ARGB черная",
      ram: "G.Skill Ripjaws S5 DDR5 32Gb (2x16Gb) 6000MHz CL30",
      storage: "ADATA LEGEND 900 1 ТБ",
      psu: "1STPLAYER NGDP Gold 1000W",
      case: "LIAN LI O11 Vision COMPACT",
      fans: "Jungle Leopard Galaxy (8 шт)"
    }
  },
  "series-9-alpha": {
    name: "Series 9 αlpha",
    price: "310 000₽",
    images: [series9Alpha1, series9Alpha2, series9Alpha3, series9Alpha4],
    description: "Белоснежный флагман с RTX 5080 AERO OC и 7800X3D. Премиальные комплектующие ASUS и белая эстетика в панорамном корпусе LIAN LI для максимального визуального эффекта.",
    specs: {
      processor: "AMD Ryzen 7 7800X3D",
      gpu: "GIGABYTE GeForce RTX 5080 AERO OC",
      motherboard: "ASUS B850 MAX GAMING WIFI W",
      cooling: "Thermalright Frozen Vision 360 ARGB White V2",
      ram: "G.Skill Ripjaws S5 White DDR5 32Gb (2x16Gb) 6000MHz CL30",
      storage: "ADATA LEGEND 900 1 ТБ",
      psu: "1STPLAYER NGDP Gold 1000W White",
      case: "LIAN LI O11 Vision COMPACT White",
      fans: "Jungle Leopard Galaxy (8 шт)"
    }
  },
  "series-x": {
    name: "Series X",
    price: "555 000₽",
    images: [seriesX1, seriesX2, seriesX3, seriesX4],
    description: "Абсолютная вершина производительности. Ryzen 9 9950X3D с 3D V-Cache, RTX 5090 32GB и 96GB DDR5. Двойная СВО 360мм, 1300W Platinum и беспроводные вентиляторы Lian Li для эксклюзивной машины мечты.",
    specs: {
      processor: "RYZEN 9 9950X3D OEM",
      gpu: "Palit GeForce RTX 5090 GameRock 32 ГБ",
      motherboard: "GIGABYTE X870 AORUS ELITE WIFI7",
      cooling: "Phanteks Glacier One 360D30 X2 черная",
      ram: "G.Skill TRIDENT Z5 ROYAL RGB 96GB 6400MHz (DDR5)",
      storage: "Samsung 2 ТБ 9100 PRO",
      psu: "Lian Li EDGE1300G Platinum",
      case: "LIAN LI O11 Vision COMPACT",
      fans: "Lian LI UNI FAN SL WIRELESS 120 Reverse Black (6 шт) + Lian LI UNI FAN SL WIRELESS 120 Black (2 шт)",
      extras: "Кронштейн для видеокарты Lian Li (G89.VG4-4-V2X.R0)"
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
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Корпус</span>
                  <span className="font-medium">{product.specs.case}</span>
                </div>
                {(product.specs as any).fans && (
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Вентиляторы</span>
                    <span className="font-medium text-right max-w-[60%]">{(product.specs as any).fans}</span>
                  </div>
                )}
                {(product.specs as any).extras && (
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Дополнительно</span>
                    <span className="font-medium text-right max-w-[60%]">{(product.specs as any).extras}</span>
                  </div>
                )}
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
