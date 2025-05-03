
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  Heart,
  MessageSquare,
  Package,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-marketplace-teal" />
            <span className="text-xl font-bold">Bazaar Bliss</span>
          </Link>
        </div>
        
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:px-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search for products..." 
              className="w-full pl-10 rounded-full" 
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:items-center md:gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link to="/favorites">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favorites</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link to="/messages">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link to="/notifications">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
          </div>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile search and menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-background border-b">
          <div className="relative w-full mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search for products..." 
              className="w-full pl-10 rounded-full" 
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button variant="ghost" className="flex flex-col items-center justify-center gap-1 h-auto py-2" asChild>
              <Link to="/favorites">
                <Heart className="h-5 w-5" />
                <span className="text-xs">Favorites</span>
              </Link>
            </Button>
            
            <Button variant="ghost" className="flex flex-col items-center justify-center gap-1 h-auto py-2" asChild>
              <Link to="/messages">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs">Messages</span>
              </Link>
            </Button>
            
            <Button variant="ghost" className="flex flex-col items-center justify-center gap-1 h-auto py-2" asChild>
              <Link to="/notifications">
                <Bell className="h-5 w-5" />
                <span className="text-xs">Notifications</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
