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
import pcBuild1 from "@/assets/apex-hero-1.jpg";
import pcBuild1_2 from "@/assets/apex-hero-2.jpg";
import pcBuild2 from "@/assets/pc-build-5.jpg";
import pcBuild3 from "@/assets/pc-build-6.png";
import pcBuild4 from "@/assets/pc-build-7.jpg";
import pcBuild5 from "@/assets/pc-build-8.jpg";
import pcBuild6 from "@/assets/pc-build-9.jpg";
import pcBuild7 from "@/assets/pc-build-1.jpg";
import pcBuild8 from "@/assets/pc-build-2.jpg";
import pcBuild9 from "@/assets/pc-build-3.jpg";
import eclipseWhite1 from "@/assets/eclipse-white-1.jpg";
import eclipseWhite2 from "@/assets/eclipse-white-2.jpg";
import flowWhite1 from "@/assets/flow-white-1.jpg";
import flowWhite2 from "@/assets/flow-white-2.jpg";
import flowWhite3 from "@/assets/flow-white-3.jpg";
import flowWhite4 from "@/assets/flow-white-4.jpg";
import flow1 from "@/assets/flow-1.jpg";
import flow2 from "@/assets/flow-2.jpg";
import flow3 from "@/assets/flow-3.jpg";
import flow4 from "@/assets/flow-4.jpg";
import flow5 from "@/assets/flow-5.jpg";
import eclipse1 from "@/assets/eclipse-1.jpg";
import eclipse2 from "@/assets/eclipse-2.jpg";
import eclipse3 from "@/assets/eclipse-3.jpg";
import eclipsePro1 from "@/assets/eclipse-pro-1.jpg";
import eclipsePro2 from "@/assets/eclipse-pro-2.jpg";
import eclipsePro3 from "@/assets/eclipse-pro-3.jpg";
import eclipsePro4 from "@/assets/eclipse-pro-4.jpg";
import eclipsePro5 from "@/assets/eclipse-pro-5.jpg";
import eclipseStart1 from "@/assets/eclipse-start-1.jpg";
import eclipseStart2 from "@/assets/eclipse-start-2.jpg";
import eclipseStart3 from "@/assets/eclipse-start-3.jpg";
import eclipseStart4 from "@/assets/eclipse-start-4.jpg";
import auraLite1 from "@/assets/aura-lite-1.jpg";
import auraLite2 from "@/assets/aura-lite-2.jpg";
import auraLite3 from "@/assets/aura-lite-3.jpg";
import purplePc1 from "@/assets/purple-pc-1.webp";
import purplePc2 from "@/assets/purple-pc-2.webp";
import purplePc3 from "@/assets/purple-pc-3.webp";
import purplePc4 from "@/assets/purple-pc-4.webp";
import purplePc5 from "@/assets/purple-pc-5.webp";
import purplePc6 from "@/assets/purple-pc-6.webp";
import rgbSpectrum1 from "@/assets/rgb-spectrum-1.webp";
import rgbSpectrum2 from "@/assets/rgb-spectrum-2.webp";
import rgbSpectrum3 from "@/assets/rgb-spectrum-3.webp";
import rgbSpectrum4 from "@/assets/rgb-spectrum-4.webp";
import rgbSpectrum5 from "@/assets/rgb-spectrum-5.webp";
import rgbSpectrum6 from "@/assets/rgb-spectrum-6.webp";
import rgbSpectrum7 from "@/assets/rgb-spectrum-7.webp";

const productData = {
  "eclipse-starter": {
    name: "APEX HERO",
    price: "198 000₽",
    images: [pcBuild1, pcBuild1_2],
    description: "Мощная игровая сборка с новейшими технологиями. Процессор AMD Ryzen 7 7800X3D с технологией 3D V-Cache обеспечивает исключительную производительность в играх, а RTX 5070 позволяет наслаждаться играми в высоком разрешении с максимальными настройками графики.",
    specs: {
      processor: "AMD Ryzen 7 7800X3D",
      gpu: "NVIDIA RTX 5070 (BLACK)",
      motherboard: "ASRock B650 Pro RS",
      cooling: "Cougar Poseidon Elite 360 ARGB",
      ram: "32Гб DDR5 ADATA XPG Lancer Blade RGB 2x16Гб 6000МГц",
      storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
      psu: "1STPLAYER NGDP, 850W, 80+ Gold",
      case: "LIAN LI O11 Vision COMPACT"
    }
  },
  "eclipse-gaming": {
    name: "ECLIPSE WHITE",
    price: "155 000₽",
    images: [pcBuild2, eclipseWhite1, eclipseWhite2],
    description: "Создан для серьезных геймеров, требующих высокопроизводительного гейминга в 1440p. Оснащен мощным Intel Core i5-14600KF для отличной игровой производительности и RTX 5060 Ti для высоких настроек графики.",
    specs: {
      processor: "Intel Core i5-14600KF",
      gpu: "NVIDIA RTX 5060 Ti 16Gb (BLACK)",
      motherboard: "ASRock B760 Pro RS",
      cooling: "Cougar Poseidon Elite 360 ARGB",
      ram: "32Гб ADATA XPG Lancer Blade RGB 2x16Гб 6000МГц",
      storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
      psu: "PHANTEKS AMP BH, 650W, 80+ Bronze White",
      case: "ARDOR GAMING Crystal CC2"
    }
  },
  "eclipse-ultimate": {
    name: "FLOW WHITE",
    price: "99 000₽",
    images: [flowWhite1, flowWhite2, flowWhite3, flowWhite4],
    description: "Стильная белая сборка с оптимальным балансом производительности и цены. AMD Ryzen 5 7500F и RTX 5060 обеспечивают уверенную игровую производительность в Full HD и 1440p разрешениях.",
    specs: {
      processor: "AMD Ryzen 5 7500F",
      gpu: "NVIDIA RTX 5060 (BLACK)",
      motherboard: "MSI PRO B650M-B",
      cooling: "JONSBO CR-1000 V2 PRO ARGB White",
      ram: "16Гб ADATA XPG Lancer 2x8Гб 5600МГц",
      storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
      psu: "PHANTEKS AMP BH 650W (80+ BRONZE) White",
      case: "Powercase Alisio Micro Z3W"
    }
  },
  "eclipse-creator": {
    name: "FLOW",
    price: "87 000₽",
    images: [flow1, flow2, flow3, flow4, flow5],
    description: "Сбалансированная игровая сборка с ярким RGB-освещением. Intel Core i5-12400F и RTX 5060 обеспечивают отличную производительность в Full HD и комфортный гейминг в 1440p.",
    specs: {
      processor: "Intel Core i5-12400F",
      gpu: "NVIDIA RTX 5060",
      motherboard: "MSI PRO H610M-G DDR4",
      cooling: "XASTRA AR400 ARGB",
      ram: "16Гб ADATA XPG SPECTRIX D45G RGB 2x8Гб 3200МГц",
      storage: "1000 ГБ M.2 NVMe накопитель MSI SPATIUM M371",
      psu: "GAMERSTORM PF500X, 500W, 80+ Bronze",
      case: "XASTRA A400M"
    }
  },
  "eclipse-streamer": {
    name: "ECLIPSE",
    price: "150 000₽",
    images: [eclipse1, eclipse2, eclipse3],
    description: "Элегантная игровая сборка с премиальным охлаждением. Intel Core i5-14600KF обеспечивает высокую производительность, а RTX 5060 Ti с 16GB памяти отлично справляется с играми в 1440p.",
    specs: {
      processor: "Intel Core i5-14600KF",
      gpu: "NVIDIA RTX 5060 Ti 16Gb",
      motherboard: "MSI PRO B760-P II",
      cooling: "Ocypus Delta L36 ARGB V2",
      ram: "32Гб ADATA XPG Lancer Blade RGB 2x16Гб 6000МГц",
      storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
      psu: "PHANTEKS AMP BH, 650W, 80+ Bronze",
      case: "ARDOR GAMING Crystal CC2"
    }
  },
  "eclipse-elite": {
    name: "ECLIPSE PRO",
    price: "98 000₽",
    images: [eclipsePro1, eclipsePro2, eclipsePro3, eclipsePro4, eclipsePro5],
    description: "Продвинутая игровая сборка с впечатляющей RGB-подсветкой. AMD Ryzen 5 7500F в паре с RTX 5060 обеспечивают отличную производительность для современных игр в Full HD и 1440p.",
    specs: {
      processor: "AMD Ryzen 5 7500F",
      gpu: "NVIDIA RTX 5060",
      motherboard: "MSI PRO B650M-B",
      cooling: "XASTRA AR400 ARGB",
      ram: "16Гб ADATA XPG Lancer 2x8Гб 5600МГц",
      storage: "1000 ГБ M.2 NVMe накопитель ADATA LEGEND 860",
      psu: "Deepcool GAMERSTORM PF600X, 600W, 80+ Bronze",
      case: "XASTRA A400M"
    }
  },
  "eclipse-start": {
    name: "ECLIPSE START",
    price: "39 500₽",
    images: [eclipseStart1, eclipseStart2, eclipseStart3, eclipseStart4],
    description: "Отличная начальная сборка с мощной видеокартой RTX 2060 Super. Процессор AMD Ryzen 5 5500 обеспечивает стабильную работу в современных играх. Возможность выбора из более 30 игровых корпусов с RGB-подсветкой.",
    specs: {
      processor: "AMD Ryzen 5 5500",
      gpu: "RTX 2060 Super",
      motherboard: "Asus / Msi / Gigabyte",
      cooling: "JONSBO CR-1000 EVO ARGB",
      ram: "16GB DDR4 2x8Гб 3200МГц",
      storage: "500GB SSD",
      psu: "600W 80+ Bronze",
      case: "Gaming RGB (более 30 на выбор)"
    }
  },
  "aura-lite": {
    name: "AURA LITE",
    price: "31 990₽",
    images: [auraLite1, auraLite2, auraLite3],
    description: "Экономичная сборка на базе серверного процессора Intel Xeon E5-2640v4 с 10 ядрами и 20 потоками. В паре с RTX 2060 6GB обеспечивает отличную производительность в современных играх при доступной цене.",
    specs: {
      processor: "Intel Core Xeon E5-2640v4 (10 ядер / 20 потоков, 3.4 GHz)",
      gpu: "ASUS GeForce RTX 2060 6GB",
      motherboard: "Серверная материнская плата",
      cooling: "Стандартное",
      ram: "16GB DDR4 2133 Mhz",
      storage: "SSD 120GB, HDD 500GB",
      psu: "700W IWONGOU ATX (RM700) WHITE Bronze",
      case: "Warrior Z5 с 3 ARGB"
    }
  },
  "purple-gaming": {
    name: "PURPLE POWER",
    price: "53 000₽",
    images: [purplePc1, purplePc2, purplePc3, purplePc4, purplePc5, purplePc6],
    description: "Яркая игровая сборка с фиолетовой RGB-подсветкой. AMD Ryzen 5 5500 в паре с мощной GIGABYTE RTX 3060 12GB обеспечивают высокую производительность в современных играх. Увеличенный объем оперативной памяти 32GB идеален для многозадачности.",
    specs: {
      processor: "AMD Ryzen 5 5500",
      gpu: "GIGABYTE RTX 3060 12GB",
      motherboard: "MSI A520M PRO",
      cooling: "Jonsbo CR1000-Max",
      ram: "32GB DDR4 3200 2x16Гб",
      storage: "1TB SSD",
      psu: "1STPLAYER BLACK SIR 600W 80 PLUS",
      case: "HSPD"
    }
  },
  "rgb-spectrum": {
    name: "RGB SPECTRUM",
    price: "59 000₽",
    images: [rgbSpectrum1, rgbSpectrum2, rgbSpectrum3, rgbSpectrum4, rgbSpectrum5, rgbSpectrum6, rgbSpectrum7],
    description: "Впечатляющая сборка с радужной RGB-подсветкой. AMD Ryzen 5 5500 и MSI RTX 5050 8GB обеспечивают отличную производительность в играх. Яркие RGB-вентиляторы создают завораживающее световое шоу. 32GB оперативной памяти и быстрый SSD 1TB гарантируют комфортную работу.",
    specs: {
      processor: "AMD Ryzen 5 5500",
      gpu: "MSI RTX 5050 8GB Gaming",
      motherboard: "Gigabyte A520M K V2",
      cooling: "RGB охлаждение",
      ram: "32GB Netac Shadow 2x16Гб DDR4 3200",
      storage: "1TB Reletech PCI-E 4.0 SSD",
      psu: "4FAN 600W 80+",
      case: "Xastra A402M Black"
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
                className="w-full h-[500px] object-cover"
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
            <div className="grid grid-cols-3 gap-4">
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
                    className="w-full h-32 object-cover"
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
        <DialogContent className="max-w-5xl">
          <img
            src={zoomImage || ""}
            alt={product.name}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>

      {/* Order Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="glass-card">
          <AlertDialogHeader>
            <AlertDialogTitle>Готовы заказать?</AlertDialogTitle>
            <AlertDialogDescription>
              Чтобы завершить ваш заказ {product.name}, пожалуйста, свяжитесь с нами через один из этих каналов:
              <div className="mt-4 space-y-3">
                <div className="flex flex-col gap-2">
                  <a 
                    href={`https://api.whatsapp.com/send/?phone=79993989762&text=Здравствуйте%2C+меня+заинтересовала+сборка%3A+${product.name}&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="https://t.me/eclipsepcxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    Telegram
                  </a>
                  <a 
                    href="https://vk.com/eclipse_pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    VK
                  </a>
                </div>
                <p className="text-sm">Мы поможем вам завершить индивидуальную сборку и ответим на любые вопросы!</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              toast({
                title: "Спасибо!",
                description: "Пожалуйста, свяжитесь с нами через WhatsApp, Telegram или VK, чтобы завершить ваш заказ.",
              });
            }}>
              Понятно
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductDetail;
