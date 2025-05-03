
import { ProductCard } from "./ProductCard";

// Mock data for demonstration
const recentProducts = [
  {
    id: "5",
    title: "Professional DSLR Camera with Two Lenses",
    price: 1299,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    location: "Chicago, IL",
    createdAt: "2023-05-04"
  },
  {
    id: "6",
    title: "Mountain Bike - Full Suspension",
    price: 850,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91",
    location: "Denver, CO",
    createdAt: "2023-05-03"
  },
  {
    id: "7",
    title: "Leather Office Chair - Ergonomic Design",
    price: 350,
    currency: "$",
    condition: "Like New",
    imageUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
    location: "Seattle, WA",
    createdAt: "2023-05-02"
  },
  {
    id: "8",
    title: "iPhone 14 Pro - 256GB",
    price: 899,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
    location: "New York, NY",
    createdAt: "2023-05-01"
  },
  {
    id: "9",
    title: "75\" Samsung QLED Smart TV",
    price: 1200,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
    location: "Los Angeles, CA",
    createdAt: "2023-04-30"
  },
  {
    id: "10",
    title: "Designer Handbag - Limited Edition",
    price: 1500,
    currency: "$",
    condition: "Like New",
    imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
    location: "Boston, MA",
    createdAt: "2023-04-29"
  },
  {
    id: "11",
    title: "Gaming PC - High Performance",
    price: 1800,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
    location: "Phoenix, AZ",
    createdAt: "2023-04-28"
  },
  {
    id: "12",
    title: "Electric Guitar with Amplifier",
    price: 650,
    currency: "$",
    condition: "Used",
    imageUrl: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02",
    location: "Nashville, TN",
    createdAt: "2023-04-27"
  }
];

export function RecentListings() {
  return (
    <div className="py-8 bg-muted/40">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Recent Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
