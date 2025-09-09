
import DashboardLayout from "@/components/layout/main";
import { CreditCards } from "@/components/dashboard/CreditCard";
import { RecentTransaction } from "@/components/dashboard/RecentTransaction";
import { WeeklyActivity } from "@/components/dashboard/WeeklyActivity";
import { ExpenseStatistics } from "@/components/dashboard/ExpenseStatistics";
import { QuickTransfer } from "@/components/dashboard/QuickTransfer";
import { BalanceHistory } from "@/components/dashboard/BalanceHistory";

export default function Home() {
  return (
    <DashboardLayout>
      {/* Mobile: Single column, Tablet+: Grid layout */}
      <div className="space-y-4 md:space-y-6">
        
        {/* Top Row: My Cards + Recent Transaction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* My Cards - Takes 2 columns on desktop, full width on tablet and mobile */}
          <div className="lg:col-span-2">
            <CreditCards />
          </div>
          {/* Recent Transaction - Takes 1 column on desktop, full width on tablet and mobile */}
          <div className="lg:col-span-1">
            <RecentTransaction />
          </div>
        </div>

        {/* Second Row: Weekly Activity, Expense Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <WeeklyActivity />
          </div>
          <div>
            <ExpenseStatistics />
          </div>
        </div>

        {/* Bottom Row: Quick Transfer, Balance History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <QuickTransfer />
          </div>
          <div>
            <BalanceHistory />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
