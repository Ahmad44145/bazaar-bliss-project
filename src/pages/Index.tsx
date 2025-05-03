
import { Header } from "@/components/Header";
import { CategoryList } from "@/components/CategoryList";
import { FeaturedListings } from "@/components/FeaturedListings";
import { RecentListings } from "@/components/RecentListings";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryList />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Bazaar Bliss
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Buy, sell, and discover amazing items in your local community and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-marketplace-teal hover:bg-marketplace-teal/90">
                Start Selling
              </Button>
              <Button size="lg" variant="outline">
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Listings */}
      <FeaturedListings />
      
      {/* Recent Listings */}
      <RecentListings />
      
      {/* Floating Button */}
      <FloatingActionButton />
      
      {/* Footer */}
      <footer className="bg-muted py-12 mt-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Safety Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Install App</h3>
              <p className="text-muted-foreground mb-4">Get the Bazaar Bliss app for a better experience</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  App Store
                </Button>
                <Button variant="outline" size="sm">
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Bazaar Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
