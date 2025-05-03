
import { ProductCard } from "./ProductCard";

// Mock data for demonstration
const featuredProducts = [
  {
    id: "1",
    title: "2018 Tesla Model 3 - Fully Electric",
    price: 35999,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5",
    location: "San Francisco, CA",
    createdAt: "2023-05-15",
    isFeatured: true
  },
  {
    id: "2",
    title: "Modern 3 Bedroom Apartment with Ocean View",
    price: 2500,
    currency: "$",
    condition: "For Rent",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    location: "Miami, FL",
    createdAt: "2023-05-10",
    isFeatured: true
  },
  {
    id: "3",
    title: "MacBook Pro 16\" 2023 - M2 Max",
    price: 2699,
    currency: "$",
    condition: "New",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    location: "Austin, TX",
    createdAt: "2023-05-12",
    isFeatured: true
  },
  {
    id: "4",
    title: "Vintage Mid-Century Modern Sofa",
    price: 899,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    location: "Portland, OR",
    createdAt: "2023-05-08",
    isFeatured: true
  }
];

export function FeaturedListings() {
  return (
    <div className="py-8">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
