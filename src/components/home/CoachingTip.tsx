import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

interface CoachingTipProps {
  tip: string;
  type: 'encouragement' | 'suggestion' | 'warning';
  onDismiss?: () => void;
}

export function CoachingTip({ tip, type, onDismiss }: CoachingTipProps) {
  const getTypeStyles = () => {
    switch (type) {
      case 'encouragement':
        return 'border-success/20 bg-success/5';
      case 'suggestion':
        return 'border-primary/20 bg-primary/5';
      case 'warning':
        return 'border-warning/20 bg-warning/5';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'encouragement':
        return 'text-success';
      case 'suggestion':
        return 'text-primary';
      case 'warning':
        return 'text-warning';
    }
  };

  return (
    <Card className={`p-4 border ${getTypeStyles()}`}>
      <div className="flex items-start gap-3">
        <div className={`p-1.5 rounded-full ${getIconColor()}`}>
          <Sparkles className="h-4 w-4" />
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-foreground font-medium leading-relaxed">
            {tip}
          </p>
        </div>
        
        {onDismiss && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-muted-foreground hover:text-foreground"
            onClick={onDismiss}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </Card>
  );
}