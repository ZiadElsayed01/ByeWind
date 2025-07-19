"use client";

import type * as React from "react";
import { Bug, User, Wifi } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import TimelineActivity from "./TimeLineActivity";
import Frame from "@/assets/Frame.png";
import contact1 from "@/assets/contact1.png";
import contact2 from "@/assets/contact2.png";
import contact3 from "@/assets/contact3.png";
import contact4 from "@/assets/contact4.png";
import contact5 from "@/assets/contact5.png";
import Act1 from "@/assets/Act1.png";
import Act2 from "@/assets/Act2.png";
import Act3 from "@/assets/Act3.png";
import Act4 from "@/assets/Act4.png";
import Act5 from "@/assets/Act5.png";


const notificationsData = [
  {
    id: 1,
    icon: Bug,
    message: "You fixed a bug.",
    time: "Just now",
  },
  {
    id: 2,
    icon: User,
    message: "New user registered.",
    time: "59 minutes ago",
  },
  {
    id: 3,
    icon: Bug,
    message: "You fixed a bug.",
    time: "12 hours ago",
  },
  {
    id: 4,
    icon: Wifi,
    message: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
  },
];

const activitiesData = [
  {
    id: 1,
    avatarSrc: Act1,
    description: "Changed the style.",
    time: "Just now",
  },
  {
    id: 2,
    avatarSrc: Act2,
    description: "Released a new version.",
    time: "59 minutes ago",
  },
  {
    id: 3,
    avatarSrc: Act3,
    description: "Submitted a bug.",
    time: "12 hours ago",
  },
  {
    id: 4,
    avatarSrc: Act4,
    description: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    avatarSrc: Act5,
    description: "Deleted a page in Project X.",
    time: "Feb 2, 2025",
  },
];

const contactsData = [
  {
    id: 1,
    name: "Natali Craig",
    avatarSrc: contact1,
  },
  {
    id: 2,
    name: "Drew Cano",
    avatarSrc: contact2,
  },
  {
    id: 3,
    name: "Andi Lane",
    avatarSrc: contact3,
  },
  {
    id: 4,
    name: "Koray Okumus",
    avatarSrc: contact4,
  },
  {
    id: 5,
    name: "Kate Morrison",
    avatarSrc: contact5,
  },
  {
    id: 6,
    name: "Melody Macy",
    avatarSrc: Frame,
  },
];

export function RightNav({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar side="right" className="fixed" {...props}>
      <SidebarContent>
        <ScrollArea className="h-full">
          {/* Notifications Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="font-semibold px-4 py-3">
              Notifications
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {notificationsData.map((notification, i) => (
                  <SidebarMenuItem key={notification.id} className="px-4 py-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-8 h-8 text-black ${((i + 1) % 2 === 0 ? "bg-[#edeefc]" : "bg-[#e6f1fd]")}  rounded-lg flex items-center justify-center`}>
                          <notification.icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Activities Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="font-semibold  px-4 py-3">
              Activities
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="px-4 py-2">
                <TimelineActivity activities={activitiesData} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Contacts Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-4 py-3">
              Contacts
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {contactsData.map((contact) => (
                  <SidebarMenuItem key={contact.id} className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={contact.avatarSrc}
                          alt={contact.name}
                        />
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {contact.name}
                        </p>
                      </div>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
