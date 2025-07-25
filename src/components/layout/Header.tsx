import { Camera, User, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-health flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">EatWise</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Target className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}