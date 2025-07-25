import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CalorieProgressProps {
  consumed: number;
  target: number;
  remaining: number;
}

export function CalorieProgress({ consumed, target, remaining }: CalorieProgressProps) {
  const percentage = Math.min((consumed / target) * 100, 100);
  const isOverTarget = consumed > target;
  
  return (
    <Card className="p-6 shadow-soft">
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-bold text-foreground">{consumed}</span>
            <span className="text-muted-foreground">/ {target} kcal</span>
          </div>
          <p className="text-sm text-muted-foreground">Today's Progress</p>
        </div>

        <div className="space-y-2">
          <Progress 
            value={percentage} 
            className={`h-3 ${isOverTarget ? 'opacity-75' : ''}`}
          />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">0</span>
            <span className={`font-medium ${isOverTarget ? 'text-warning' : 'text-success'}`}>
              {remaining > 0 ? `${remaining} left` : `${Math.abs(remaining)} over`}
            </span>
            <span className="text-muted-foreground">{target}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">65g</div>
            <div className="text-xs text-muted-foreground">Carbs</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">42g</div>
            <div className="text-xs text-muted-foreground">Fat</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">88g</div>
            <div className="text-xs text-muted-foreground">Protein</div>
          </div>
        </div>
      </div>
    </Card>
  );
}