import { Home, Camera, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-soft">
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col gap-1 h-auto py-2 text-primary"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col gap-1 h-auto py-2 text-muted-foreground hover:text-primary"
          >
            <Camera className="h-5 w-5" />
            <span className="text-xs font-medium">Scan</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col gap-1 h-auto py-2 text-muted-foreground hover:text-primary"
          >
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs font-medium">Stats</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col gap-1 h-auto py-2 text-muted-foreground hover:text-primary"
          >
            <Settings className="h-5 w-5" />
            <span className="text-xs font-medium">Settings</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}