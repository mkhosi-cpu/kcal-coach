import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { CalorieProgress } from "@/components/home/CalorieProgress";
import { QuickActions } from "@/components/home/QuickActions";
import { RecentMeals } from "@/components/home/RecentMeals";
import { CoachingTip } from "@/components/home/CoachingTip";

const Index = () => {
  // Mock data - this would come from your state management/API
  const calorieData = {
    consumed: 1247,
    target: 2100,
    remaining: 853
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-md mx-auto px-4 pt-6 pb-24 space-y-6">
        {/* Daily Calorie Progress */}
        <CalorieProgress {...calorieData} />
        
        {/* Coaching Tip */}
        <CoachingTip 
          tip="Great job staying on track! You're 60% towards your daily goal. Consider adding some protein to your next meal."
          type="encouragement"
        />
        
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Recent Meals */}
        <RecentMeals />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Index;
