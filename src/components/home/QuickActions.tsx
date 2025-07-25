import { Camera, Plus, Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function QuickActions() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground px-1">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-3">
        <Button 
          size="lg" 
          className="h-20 flex flex-col gap-2 gradient-primary shadow-primary border-0"
        >
          <Camera className="h-6 w-6" />
          <span className="text-sm font-medium">Scan Food</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="h-20 flex flex-col gap-2 border-border hover:bg-muted"
        >
          <Search className="h-6 w-6" />
          <span className="text-sm font-medium">Search Food</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="h-20 flex flex-col gap-2 border-border hover:bg-muted"
        >
          <Plus className="h-6 w-6" />
          <span className="text-sm font-medium">Add Manual</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="h-20 flex flex-col gap-2 border-border hover:bg-muted"
        >
          <Clock className="h-6 w-6" />
          <span className="text-sm font-medium">Recent Foods</span>
        </Button>
      </div>
    </div>
  );
}