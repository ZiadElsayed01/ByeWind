import type { IDate } from "@/types/Types";
import { useState } from "react";


export default function Timeline() {
  const today = new Date()
  const dates: IDate[] = []
  for (let i = -3; i <= 3; i++) {
    // Generate 7 days: today, 3 before, 3 after
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push({
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
    })
  }
  const [selectedIndex, setSelectedIndex] = useState<number>(3);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex justify-between items-center">
      {dates.map((day, index) => {
        const isActive = selectedIndex === index;

        return (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${isActive ? "bg-secondary" : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            <span className={`text-xs font-medium ${isActive && "text-white"}`}>{day.day}</span>
            <span className={`text-lg font-bold text-primary ${isActive && "text-white"}`}>{day.date}</span>
          </div>
        );
      })}
    </div>
  );
}
