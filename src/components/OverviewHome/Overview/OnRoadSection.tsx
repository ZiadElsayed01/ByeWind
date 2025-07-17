import { Card, CardTitle } from "@/components/ui/card";
import Frame from "@/assets/Frame.png";
import AvatarMale06 from "@/assets/Avatar_Male_06.png";
import Frame1 from "@/assets/Frame(1).png";
import AvatarAbstract01 from "@/assets/Avatar_Abstract_01.png";
import Frame2 from "@/assets/Frame_(2).png";
import Timeline from "@/components/TimeLine";
import TimelineActivity from "@/components/TimeLineActivity";
import type { Activity, IDate } from "@/types/Types";

export type TimelineActivityProps = {
  dates: IDate[];
};

export default function OnRoadSection() {
  const activities: Activity[] = [
    {
      id: 1,
      avatarSrc: Frame,
      description: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      id: 2,
      avatarSrc: AvatarMale06,
      description: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatarSrc: Frame1,
      description: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatarSrc: AvatarAbstract01,
      description: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      avatarSrc: Frame2,
      description: "Deleted a page in Project X",
      time: "Feb 2, 2025",
    },
  ];

  return (
    <Card className="gap-3">
      <CardTitle>What's on the road?</CardTitle>
      <Timeline />
      <TimelineActivity activities={activities} />
    </Card>
  )
}
