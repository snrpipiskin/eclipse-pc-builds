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

export const buildsData = [
  {
    id: "aura-lite",
    name: "AURA LITE",
    price: "31 990₽",
    image: auraLite1,
    images: [auraLite1, auraLite2, auraLite3],
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
  {
    id: "series-2",
    name: "Series 2",
    price: "89 000₽",
    image: series2_4,
    images: [series2_4, series2_2, series2_3, series2_1],
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
  {
    id: "series-2-alpha",
    name: "Series 2 αlpha",
    price: "105 000₽",
    image: series2Alpha1,
    images: [series2Alpha1, series2Alpha2, series2Alpha3, series2Alpha4],
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
];
