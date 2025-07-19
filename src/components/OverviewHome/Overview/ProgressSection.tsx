import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import snowui_icon from "../../../assets/SnowUI_Icon.png";
import avatar from "../../../assets/avatar.png";
import frame from "../../../assets/Frame.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import InfoBlock from "@/components/InfoBlock";

export default function ProgressSection() {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Card>
      <CardHeader className="flex items-center justify-between p-0 m-0">
        <CardTitle className="text-lg">SnowUI</CardTitle>
        <img src={snowui_icon} alt="SnowUI_Icon" width={40} height={40} />
      </CardHeader>
      <CardContent className="lg:flex p-0 gap-0 justify-between">
        <div className="lg:flex items-center">
          <InfoBlock
            title="Status"
            content={
              <>
                <Progress
                  value={51}
                  className="h-6 w-40 mt-1 relative"
                  text={
                    <>
                      In Progress<span className="text-gray-500 mx-1"> / </span>
                      51%
                    </>
                  }
                />
              </>
            }
            className="lg:pr-6"
          />
          <InfoBlock
            title="Total Tasks"
            content={
              <>
                15 <span className="text-gray-500">/</span> 48
              </>
            }
            className="lg:px-6"
          />
          <InfoBlock title="Due Data" content={date} className="lg:px-6 " />
          <InfoBlock
            title="Budget Spent"
            content="$15,000"
            className="lg:px-6"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-12 mt-6 lg:mt-0">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2">
            <Avatar>
              <AvatarImage src={avatar} alt="@shadcn" />
            </Avatar>
            <Avatar>
              <AvatarImage src={frame} alt="@shadcn" />
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-[#edeefc] text-black">+3</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
