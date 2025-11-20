import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ZoomIn } from "lucide-react";
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

const productData = {
  "eclipse-starter": {
    name: "APEX HERO",
    price: "198 000₽",
    images: [pcBuild1, pcBuild1_2, pcBuild7],
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
    name: "ECLIPSE GAMING",
    price: "189 900₽",
    images: [pcBuild2, pcBuild9, pcBuild7],
    description: "Создан для серьезных геймеров, требующих высокопроизводительного гейминга в 1440p. Оснащен мощным Ryzen 7 7800X3D с технологией 3D V-Cache для исключительной игровой производительности и RTX 4070 Ti для ультра настроек.",
    specs: {
      processor: "AMD Ryzen 7 7800X3D",
      gpu: "NVIDIA RTX 4070 Ti 12GB",
      motherboard: "MSI X670E",
      cooling: "Arctic Freezer 360",
      ram: "32GB DDR5 6000MHz",
      storage: "2TB NVMe Gen4 SSD",
      psu: "750W 80+ Gold",
      case: "Lian Li O11 Dynamic"
    }
  },
  "eclipse-ultimate": {
    name: "ECLIPSE ULTIMATE",
    price: "329 900₽",
    images: [pcBuild3, pcBuild8, pcBuild9],
    description: "Абсолютная игровая мощь для 4K гейминга на максимальных настройках. Оснащен флагманским RTX 4090 и Ryzen 9 7950X, этот зверь справляется с любой игрой или задачей с бескомпромиссной производительностью.",
    specs: {
      processor: "AMD Ryzen 9 7950X",
      gpu: "NVIDIA RTX 4090 24GB",
      motherboard: "ASUS ROG X670E",
      cooling: "NZXT Kraken Z73",
      ram: "64GB DDR5 6400MHz",
      storage: "4TB NVMe Gen4 SSD",
      psu: "1000W 80+ Platinum",
      case: "Corsair 5000D Airflow"
    }
  },
  "eclipse-creator": {
    name: "ECLIPSE CREATOR",
    price: "249 900₽",
    images: [pcBuild4, pcBuild7, pcBuild8],
    description: "Оптимизирован для контент-криейторов и профессионалов. С 64 ГБ ОЗУ и флагманским Intel i9-14900K справляйтесь с редактированием видео, 3D-рендерингом и многозадачностью с исключительной скоростью и надежностью.",
    specs: {
      processor: "Intel Core i9-14900K",
      gpu: "NVIDIA RTX 4070 12GB",
      motherboard: "ASUS Z790",
      cooling: "Noctua NH-D15",
      ram: "64GB DDR5 5600MHz",
      storage: "2TB NVMe Gen4 SSD",
      psu: "850W 80+ Gold",
      case: "Fractal Design Torrent"
    }
  },
  "eclipse-streamer": {
    name: "ECLIPSE STREAMER",
    price: "219 900₽",
    images: [pcBuild5, pcBuild9, pcBuild7],
    description: "Разработан специально для стримеров и контент-криейторов, которым нужна одновременная производительность в играх и стриминге. Ryzen 9 7900X легко справляется с кодированием, сохраняя высокий FPS в требовательных играх.",
    specs: {
      processor: "AMD Ryzen 9 7900X",
      gpu: "NVIDIA RTX 4070 Ti 12GB",
      motherboard: "MSI B650",
      cooling: "Arctic Liquid Freezer II",
      ram: "32GB DDR5 6000MHz",
      storage: "2TB NVMe Gen4 SSD + 2TB HDD",
      psu: "750W 80+ Gold",
      case: "NZXT H710i"
    }
  },
  "eclipse-elite": {
    name: "ECLIPSE ELITE",
    price: "499 900₽",
    images: [pcBuild6, pcBuild8, pcBuild9],
    description: "Абсолютная вершина вычислительной производительности без компромиссов. Оснащенный специально отобранным i9-14900KS и огромными 128 ГБ ОЗУ, эта сборка рабочей станции уровня сокрушает любую профессиональную или игровую нагрузку.",
    specs: {
      processor: "Intel Core i9-14900KS",
      gpu: "NVIDIA RTX 4090 24GB",
      motherboard: "ASUS ROG Maximus Z790",
      cooling: "EK-AIO Elite 360",
      ram: "128GB DDR5 6400MHz",
      storage: "8TB NVMe Gen4 SSD",
      psu: "1200W 80+ Titanium",
      case: "Lian Li O11 XL"
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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
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
