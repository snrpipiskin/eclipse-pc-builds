import { useState } from "react";
import { ChevronDown, ChevronUp, Search, RotateCcw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
  const [isOpen, setIsOpen] = useState(false);

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

  const hasActiveFilters = filters.sortBy !== "default" || 
    filters.gpuBrand !== "all" || 
    filters.cpuBrand !== "all" || 
    filters.ramSize !== "all" || 
    filters.caseColor !== "all" || 
    filters.priceRange !== "all" ||
    filters.searchQuery.trim() !== "";

  return (
    <div className="mb-12 p-4 md:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex flex-col gap-4">
          {/* Header with toggle */}
          <div className="flex items-center justify-between">
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors">
                <span>Поиск и фильтры</span>
                {hasActiveFilters && (
                  <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                    активны
                  </span>
                )}
                {isOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
            </CollapsibleTrigger>
            {hasActiveFilters && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={resetFilters}
                className="hover:bg-primary/10"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Сбросить
              </Button>
            )}
          </div>

          <CollapsibleContent className="space-y-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

              {/* CPU Brand */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Процессор</label>
                <Select value={filters.cpuBrand} onValueChange={(value) => handleFilterChange("cpuBrand", value)}>
                  <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                    <SelectValue placeholder="Все" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="all">Все процессоры</SelectItem>
                    <SelectItem value="intel">Intel</SelectItem>
                    <SelectItem value="amd">AMD (Ryzen)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Case Color */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Цвет корпуса</label>
                <Select value={filters.caseColor} onValueChange={(value) => handleFilterChange("caseColor", value)}>
                  <SelectTrigger className="bg-background/80 border-border/50 hover:border-primary/50 transition-colors">
                    <SelectValue placeholder="Все" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="all">Все цвета</SelectItem>
                    <SelectItem value="black">Черный</SelectItem>
                    <SelectItem value="white">Белый</SelectItem>
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
                    <SelectItem value="0-100000">До 100 000₽</SelectItem>
                    <SelectItem value="100000-150000">100 000₽ - 150 000₽</SelectItem>
                    <SelectItem value="150000+">Свыше 150 000₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
};

export default BuildsFilter;
