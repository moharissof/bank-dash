"use client"

import { LabelList, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { category: "entertainment", value: 30, fill: "#343c6a" },
  { category: "billExpense", value: 15, fill: "#ff8c42" },
  { category: "investment", value: 20, fill: "#ff1493" },
  { category: "others", value: 35, fill: "#1814f3" },
]

const chartConfig = {
  value: {
    label: "Percentage",
  },
  entertainment: {
    label: "Entertainment",
    color: "#343c6a",
  },
  billExpense: {
    label: "Bill Expense",
    color: "#ff8c42",
  },
  investment: {
    label: "Investment",
    color: "#ff1493",
  },
  others: {
    label: "Others",
    color: "#1814f3",
  },
} satisfies ChartConfig

export function ExpenseStatistics() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-2 md:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl font-semibold text-[#343c6a]">Expense Statistics</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-white mx-auto aspect-square max-h-[160px] sm:max-h-[200px] md:max-h-[280px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="value" hideLabel />}
            />
            <Pie 
              data={chartData} 
              dataKey="value"
              nameKey="category"
              outerRadius="80%"
            >
              <LabelList
                dataKey="value"
                className="fill-white"
                stroke="none"
                fontSize={12}
                formatter={(value: number) => `${value}%`}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
