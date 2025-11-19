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
import pcBuild1 from "@/assets/pc-build-4.jpg";
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
    name: "ECLIPSE STARTER",
    price: "$1,299",
    images: [pcBuild1, pcBuild7, pcBuild8],
    description: "Perfect for entry-level gaming and everyday computing. Delivers smooth 1080p gaming performance with modern titles while maintaining excellent build quality and upgradability for future needs.",
    specs: {
      processor: "AMD Ryzen 5 7600X",
      gpu: "NVIDIA RTX 4060 8GB",
      ram: "16GB DDR5 5600MHz",
      storage: "1TB NVMe SSD"
    }
  },
  "eclipse-gaming": {
    name: "ECLIPSE GAMING",
    price: "$1,899",
    images: [pcBuild2, pcBuild9, pcBuild7],
    description: "Built for serious gamers who demand high-performance 1440p gaming. Features the powerful Ryzen 7 7800X3D with 3D V-Cache technology for exceptional gaming performance and the RTX 4070 Ti for ultra settings.",
    specs: {
      processor: "AMD Ryzen 7 7800X3D",
      gpu: "NVIDIA RTX 4070 Ti 12GB",
      ram: "32GB DDR5 6000MHz",
      storage: "2TB NVMe Gen4 SSD"
    }
  },
  "eclipse-ultimate": {
    name: "ECLIPSE ULTIMATE",
    price: "$3,299",
    images: [pcBuild3, pcBuild8, pcBuild9],
    description: "The ultimate gaming powerhouse for 4K gaming at maximum settings. Powered by the flagship RTX 4090 and Ryzen 9 7950X, this beast handles any game or workload with uncompromising performance.",
    specs: {
      processor: "AMD Ryzen 9 7950X",
      gpu: "NVIDIA RTX 4090 24GB",
      ram: "64GB DDR5 6400MHz",
      storage: "4TB NVMe Gen4 SSD"
    }
  },
  "eclipse-creator": {
    name: "ECLIPSE CREATOR",
    price: "$2,499",
    images: [pcBuild4, pcBuild7, pcBuild8],
    description: "Optimized for content creators and professionals. With 64GB of RAM and Intel's flagship i9-14900K, tackle video editing, 3D rendering, and multitasking with exceptional speed and reliability.",
    specs: {
      processor: "Intel Core i9-14900K",
      gpu: "NVIDIA RTX 4070 12GB",
      ram: "64GB DDR5 5600MHz",
      storage: "2TB NVMe Gen4 SSD"
    }
  },
  "eclipse-streamer": {
    name: "ECLIPSE STREAMER",
    price: "$2,199",
    images: [pcBuild5, pcBuild9, pcBuild7],
    description: "Designed specifically for streamers and content creators who need simultaneous gaming and streaming performance. The Ryzen 9 7900X handles encoding effortlessly while maintaining high FPS in demanding games.",
    specs: {
      processor: "AMD Ryzen 9 7900X",
      gpu: "NVIDIA RTX 4070 Ti 12GB",
      ram: "32GB DDR5 6000MHz",
      storage: "2TB NVMe Gen4 SSD + 2TB HDD"
    }
  },
  "eclipse-elite": {
    name: "ECLIPSE ELITE",
    price: "$4,999",
    images: [pcBuild6, pcBuild8, pcBuild9],
    description: "The absolute pinnacle of computing performance with no compromises. Featuring the special-binned i9-14900KS and a massive 128GB of RAM, this workstation-class build crushes any professional or gaming workload.",
    specs: {
      processor: "Intel Core i9-14900KS",
      gpu: "NVIDIA RTX 4090 24GB",
      ram: "128GB DDR5 6400MHz",
      storage: "8TB NVMe Gen4 SSD"
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
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
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
          Back
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
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Processor</span>
                  <span className="font-medium">{product.specs.processor}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Graphics Card</span>
                  <span className="font-medium">{product.specs.gpu}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Memory</span>
                  <span className="font-medium">{product.specs.ram}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="font-medium">{product.specs.storage}</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full glow-box"
              onClick={handleOrder}
            >
              Order Now
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
            <AlertDialogTitle>Ready to Order?</AlertDialogTitle>
            <AlertDialogDescription>
              To complete your order for the {product.name}, please contact us through one of these channels:
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
    </div>
  );
};

export default ProductDetail;
