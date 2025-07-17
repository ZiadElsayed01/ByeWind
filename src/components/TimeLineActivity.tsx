import type { Activity } from "@/types/activities";
import { Avatar, AvatarImage } from "./ui/avatar";

type TimelineActivityProps = {
  activities: Activity[];
};

export default function TimelineActivity({ activities }: TimelineActivityProps) {
  return (
    <>
      <div className="relative">
        <div className="absolute h-full left-3.5 w-0.5 bg-gray-200" />
        {activities?.map((activity) => (
          <div key={activity.id} className="mb-6 last:mb-0">
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8 outline-6 outline-[#f9f9fa]">
                <AvatarImage src={activity.avatarSrc} alt="Avatar" />
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
