import series2_1 from "@/assets/series2-1.jpg";
import series2_2 from "@/assets/series2-2.jpg";
import series2_3 from "@/assets/series2-3.jpg";
import series2_4 from "@/assets/series2-4.jpg";
import series2alpha_1 from "@/assets/series2alpha-1.jpg";
import series2alpha_2 from "@/assets/series2alpha-2.jpg";
import series2alpha_3 from "@/assets/series2alpha-3.jpg";
import series2alpha_4 from "@/assets/series2alpha-4.jpg";

export const buildsData = [
  {
    id: "series-2",
    name: "Series 2",
    price: "89 000₽",
    description: "Мощный игровой ПК в стильном черном корпусе. Идеальный баланс производительности и цены для требовательных геймеров.",
    image: series2_1,
    images: [series2_1, series2_2, series2_3, series2_4],
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
    description: "Премиальная сборка в элегантном белом исполнении. Увеличенный объем памяти и топовые комплектующие для максимального комфорта.",
    image: series2alpha_1,
    images: [series2alpha_1, series2alpha_2, series2alpha_3, series2alpha_4],
    specs: {
      processor: "i5 12400F",
      gpu: "Gigabyte RTX 5060 EAGLE OC ICE-8",
      motherboard: "MSI PRO B760M-A DDR4 II",
      cooling: "JONSBO CR-1000 EVO ARGB White",
      ram: "Kingbank White 3200MHz - 32GB (2x16GB)",
      storage: "ADATA LEGEND 860 1 ТБ",
      psu: "Powercase PW500",
      case: "Zalman P10 White"
    }
  }
];
