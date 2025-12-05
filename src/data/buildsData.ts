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

export const buildsData = [
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
  },
  {
    id: "series-4",
    name: "Series 4",
    price: "130 000₽",
    image: series4_1,
    images: [series4_1, series4_2, series4_3, series4_4],
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
  {
    id: "series-4-alpha",
    name: "Series 4 αlpha",
    price: "140 000₽",
    image: series4Alpha1,
    images: [series4Alpha1, series4Alpha2, series4Alpha3, series4Alpha4],
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
  {
    id: "series-6",
    name: "Series 6",
    price: "145 000₽",
    image: series6_1,
    images: [series6_1, series6_2, series6_3, series6_4],
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
  {
    id: "series-6-alpha",
    name: "Series 6 αlpha",
    price: "160 000₽",
    image: series6Alpha1,
    images: [series6Alpha1, series6Alpha2, series6Alpha3, series6Alpha4],
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
  {
    id: "series-7",
    name: "Series 7",
    price: "175 000₽",
    image: series7_1,
    images: [series7_1, series7_2, series7_3, series7_4],
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
  {
    id: "series-7-alpha",
    name: "Series 7 αlpha",
    price: "195 000₽",
    image: series7Alpha1,
    images: [series7Alpha1, series7Alpha2, series7Alpha3],
    specs: {
      processor: "RYZEN 7 7700 OEM",
      gpu: "GIGABYTE GeForce RTX 5070 EAGLE OC ICE SFF",
      motherboard: "MSI B650M PROJECT ZERO",
      cooling: "Thermalright Frozen Notte 360 White V2",
      ram: "G.Skill Trident Z5 RGB DDR5 32Gb (2x16Gb) 6000MHz CL34",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "1STPLAYER NGDP Gold 750W White",
      case: "Jonsbo D300 White",
      fans: "Jungle Leopard Galaxy White (5 шт)"
    }
  }
];
