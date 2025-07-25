import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Apple, Coffee } from "lucide-react";

interface Meal {
  id: string;
  name: string;
  calories: number;
  time: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  weight: string;
}

const mockMeals: Meal[] = [
  {
    id: '1',
    name: 'Greek Yogurt with Berries',
    calories: 180,
    time: '8:30 AM',
    type: 'breakfast',
    weight: '150g'
  },
  {
    id: '2',
    name: 'Green Coffee',
    calories: 5,
    time: '9:15 AM',
    type: 'snack',
    weight: '250ml'
  },
  {
    id: '3',
    name: 'Chicken Salad Bowl',
    calories: 420,
    time: '1:00 PM',
    type: 'lunch',
    weight: '280g'
  }
];

const getMealIcon = (type: Meal['type']) => {
  switch (type) {
    case 'breakfast':
      return <Coffee className="h-4 w-4" />;
    case 'lunch':
    case 'dinner':
      return <Apple className="h-4 w-4" />;
    case 'snack':
      return <Clock className="h-4 w-4" />;
  }
};

const getMealColor = (type: Meal['type']) => {
  switch (type) {
    case 'breakfast':
      return 'bg-accent/10 text-accent border-accent/20';
    case 'lunch':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'dinner':
      return 'bg-success/10 text-success border-success/20';
    case 'snack':
      return 'bg-muted text-muted-foreground border-border';
  }
};

export function RecentMeals() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground px-1">Today's Meals</h2>
      
      <div className="space-y-2">
        {mockMeals.map((meal) => (
          <Card key={meal.id} className="p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${getMealColor(meal.type).split(' ')[0]}`}>
                  {getMealIcon(meal.type)}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{meal.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{meal.time}</span>
                    <span>•</span>
                    <span>{meal.weight}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-semibold text-foreground">{meal.calories}</div>
                <div className="text-xs text-muted-foreground">kcal</div>
              </div>
            </div>
          </Card>
        ))}
        
        {mockMeals.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No meals logged today</p>
            <p className="text-sm text-muted-foreground mt-1">Start by scanning or adding your first meal!</p>
          </Card>
        )}
      </div>
    </div>
  );
}