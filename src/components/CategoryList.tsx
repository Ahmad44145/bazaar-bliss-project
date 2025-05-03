
import { useState } from "react";
import { 
  Package, 
  Car, 
  Home, 
  Smartphone, 
  Sofa, 
  Briefcase, 
  Heart, 
  Baby, 
  Shirt 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type Category = {
  id: string;
  name: string;
  icon: React.ElementType;
  slug: string;
};

const categories: Category[] = [
  { id: "all", name: "All Categories", icon: Package, slug: "all" },
  { id: "vehicles", name: "Vehicles", icon: Car, slug: "vehicles" },
  { id: "real-estate", name: "Real Estate", icon: Home, slug: "real-estate" },
  { id: "electronics", name: "Electronics", icon: Smartphone, slug: "electronics" },
  { id: "furniture", name: "Furniture", icon: Sofa, slug: "furniture" },
  { id: "jobs", name: "Jobs", icon: Briefcase, slug: "jobs" },
  { id: "fashion", name: "Fashion", icon: Shirt, slug: "fashion" },
  { id: "collectibles", name: "Collectibles", icon: Heart, slug: "collectibles" },
  { id: "baby-kids", name: "Baby & Kids", icon: Baby, slug: "baby-kids" }
];

export function CategoryList() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  return (
    <div className="w-full py-4 border-b">
      <ScrollArea className="w-full">
        <div className="flex space-x-2 px-4 min-w-max pb-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="flex items-center gap-2 px-3 py-2 h-auto"
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
