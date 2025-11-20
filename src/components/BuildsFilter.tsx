import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BuildsFilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  sortBy: string;
  gpuBrand: string;
  cpuBrand: string;
  ramSize: string;
  caseColor: string;
  priceRange: string;
  searchQuery: string;
}

const BuildsFilter = ({ onFilterChange }: BuildsFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    sortBy: "default",
    gpuBrand: "all",
    cpuBrand: "all",
    ramSize: "all",
    caseColor: "all",
    priceRange: "all",
    searchQuery: ""
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      sortBy: "default",
      gpuBrand: "all",
      cpuBrand: "all",
      ramSize: "all",
      caseColor: "all",
      priceRange: "all",
      searchQuery: ""
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="mb-12 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">Фильтры и сортировка</h3>
          <Button 
            variant="outline" 
            size="sm"
            onClick={resetFilters}
            className="hover:bg-primary/10"
          >
            Сбросить всё
          </Button>
        </div>


        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Поиск по названию или характеристикам..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
            className="pl-10 bg-background/80 border-border/50 hover:border-primary/50 focus:border-primary transition-colors h-12 text-base"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Sort By */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Сортировка</label>
            <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
              <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="По умолчанию" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                <SelectItem value="default">По умолчанию</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                <SelectItem value="name-asc">Название: А-Я</SelectItem>
                <SelectItem value="name-desc">Название: Я-А</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* GPU Brand */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Видеокарта</label>
            <Select value={filters.gpuBrand} onValueChange={(value) => handleFilterChange("gpuBrand", value)}>
              <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Все" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                <SelectItem value="all">Все производители</SelectItem>
                <SelectItem value="nvidia">NVIDIA</SelectItem>
                <SelectItem value="amd">AMD</SelectItem>
                <SelectItem value="asus">ASUS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* CPU Brand */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Процессор</label>
            <Select value={filters.cpuBrand} onValueChange={(value) => handleFilterChange("cpuBrand", value)}>
              <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Все" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                <SelectItem value="all">Все производители</SelectItem>
                <SelectItem value="intel">Intel</SelectItem>
                <SelectItem value="amd">AMD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* RAM Size */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Оперативная память</label>
            <Select value={filters.ramSize} onValueChange={(value) => handleFilterChange("ramSize", value)}>
              <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Все" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                <SelectItem value="all">Все объемы</SelectItem>
                <SelectItem value="16">16 ГБ</SelectItem>
                <SelectItem value="32">32 ГБ</SelectItem>
                <SelectItem value="64">64 ГБ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Case Color */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Цвет компьютера</label>
            <Select value={filters.caseColor} onValueChange={(value) => handleFilterChange("caseColor", value)}>
              <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Все" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                <SelectItem value="all">Все цвета</SelectItem>
                <SelectItem value="white">Белый</SelectItem>
                <SelectItem value="black">Черный</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Ценовой диапазон</label>
            <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange("priceRange", value)}>
              <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Все" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                <SelectItem value="all">Все цены</SelectItem>
                <SelectItem value="0-50000">До 50 000₽</SelectItem>
                <SelectItem value="50000-100000">50 000₽ - 100 000₽</SelectItem>
                <SelectItem value="100000-150000">100 000₽ - 150 000₽</SelectItem>
                <SelectItem value="150000-200000">150 000₽ - 200 000₽</SelectItem>
                <SelectItem value="200000+">Свыше 200 000₽</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildsFilter;
