import auraLite1 from "@/assets/aura-lite-1.jpg";
import auraLite2 from "@/assets/aura-lite-2.jpg";
import auraLite3 from "@/assets/aura-lite-3.jpg";
import eclipseStart1 from "@/assets/eclipse-start-1.jpg";
import eclipseStart2 from "@/assets/eclipse-start-2.jpg";
import eclipseStart3 from "@/assets/eclipse-start-3.jpg";
import eclipseStart4 from "@/assets/eclipse-start-4.jpg";
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
import pcBuild1 from "@/assets/apex-hero-1.jpg";
import pcBuild2 from "@/assets/pc-build-5.jpg";
import pcBuild3 from "@/assets/pc-build-6.png";
import pcBuild4 from "@/assets/pc-build-7.jpg";
import pcBuild5 from "@/assets/pc-build-8.jpg";
import pcBuild6 from "@/assets/pc-build-9.jpg";
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
    id: "purple-gaming",
    name: "ECLIPSE START",
    price: "53 000₽",
    image: purplePc1,
    images: [purplePc1, purplePc2, purplePc3, purplePc4, purplePc5, purplePc6],
    specs: {
      processor: "AMD Ryzen 5 5500",
      gpu: "RTX 3060 12GB",
      motherboard: "MSI A520M PRO",
      cooling: "Jonsbo CR1000-Max",
      ram: "32Гб DDR4 2х16Гб 3200МГц",
      storage: "1TB SSD",
      psu: "1STPLAYER BLACK SIR 600W 80 PLUS",
      case: "HSPD"
    }
  },
  {
    id: "rgb-spectrum",
    name: "NEXUS LITE",
    price: "59 000₽",
    image: rgbSpectrum1,
    images: [rgbSpectrum1, rgbSpectrum2, rgbSpectrum3, rgbSpectrum4, rgbSpectrum5, rgbSpectrum6, rgbSpectrum7],
    specs: {
      processor: "AMD Ryzen 5 5500",
      gpu: "RTX 5050 8GB",
      motherboard: "Gigabyte A520M K V2",
      cooling: "JONSBO CR-1000 EVO ARGB",
      ram: "32GB DDR4 3200 2x16Гб",
      storage: "1TB Reletech PCI-E 4.0 SSD",
      psu: "4FAN 600W 80+",
      case: "Xastra A402M Black"
    }
  },
  {
    id: "eclipse-creator",
    name: "FLOW",
    price: "87 000₽",
    image: flow1,
    images: [flow1, flow2, flow3, flow4, flow5],
    specs: {
      processor: "Intel Core i5-12400F",
      gpu: "NVIDIA RTX 5060",
      motherboard: "MSI PRO H610M-G DDR4",
      cooling: "XASTRA AR400 ARGB",
      ram: "16Гб DDR4 2x8Гб 3200МГц",
      storage: "1TB SSD",
      psu: "GAMERSTORM PF500X, 500W, 80+ Bronze",
      case: "XASTRA A400M"
    }
  },
  {
    id: "eclipse-elite",
    name: "NEXUS CORE",
    price: "98 000₽",
    image: pcBuild6,
    images: [eclipsePro1, eclipsePro2, eclipsePro3, eclipsePro4, eclipsePro5],
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
  {
    id: "eclipse-ultimate",
    name: "FLOW WHITE",
    price: "99 000₽",
    image: pcBuild3,
    images: [pcBuild3],
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
  {
    id: "eclipse-streamer",
    name: "ECLIPSE",
    price: "150 000₽",
    image: pcBuild5,
    images: [eclipse1, eclipse2, eclipse3],
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
  {
    id: "eclipse-gaming",
    name: "ECLIPSE WHITE",
    price: "155 000₽",
    image: pcBuild2,
    images: [pcBuild2],
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
  {
    id: "eclipse-starter",
    name: "APEX HERO",
    price: "198 000₽",
    image: pcBuild1,
    images: [pcBuild1],
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
  }
];
