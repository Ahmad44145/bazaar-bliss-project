
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  currency: string;
  condition: string;
  imageUrl: string;
  location: string;
  createdAt: string;
  isFeatured?: boolean;
}

export function ProductCard({
  id,
  title,
  price,
  currency,
  condition,
  imageUrl,
  location,
  createdAt,
  isFeatured = false
}: ProductCardProps) {
  return (
    <div className="marketplace-card group relative">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        {isFeatured && (
          <Badge className="absolute top-2 left-2 bg-marketplace-amber text-black font-medium">
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 rounded-full bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-base line-clamp-1">{title}</h3>
        <div className="flex items-baseline mt-1">
          <span className="text-lg font-bold">
            {currency} {price.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
          <Badge variant="outline">{condition}</Badge>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
