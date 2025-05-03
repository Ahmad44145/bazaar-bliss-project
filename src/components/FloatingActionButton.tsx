
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function FloatingActionButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
    >
      <Link to="/create-listing" aria-label="Create new listing">
        <Plus className="h-6 w-6" />
      </Link>
    </Button>
  );
}
