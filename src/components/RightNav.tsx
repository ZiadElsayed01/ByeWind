"use client"

import type * as React from "react"
import { Bug, User, Wifi } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

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
]

const activitiesData = [
  {
    id: 1,
    user: {
      name: "User",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Changed the style.",
    time: "Just now",
    color: "bg-pink-500",
  },
  {
    id: 2,
    user: {
      name: "User",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Released a new version.",
    time: "59 minutes ago",
    color: "bg-orange-500",
  },
  {
    id: 3,
    user: {
      name: "User",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Submitted a bug.",
    time: "12 hours ago",
    color: "bg-blue-500",
  },
  {
    id: 4,
    user: {
      name: "User",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
    color: "bg-amber-600",
  },
  {
    id: 5,
    user: {
      name: "User",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Deleted a page in Project X.",
    time: "Feb 2, 2025",
    color: "bg-teal-500",
  },
]

const contactsData = [
  {
    id: 1,
    name: "Natali Craig",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Drew Cano",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    name: "Andi Lane",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "Koray Okumus",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 5,
    name: "Kate Morrison",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 6,
    name: "Melody Macy",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export function RightNav({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar side="right" className="w-70" {...props}>
      <SidebarContent>
        <ScrollArea className="h-full">
          {/* Notifications Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-base font-semibold text-foreground px-4 py-3">
              Notifications
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {notificationsData.map((notification) => (
                  <SidebarMenuItem key={notification.id} className="px-4 py-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                          <notification.icon className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Activities Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-base font-semibold text-foreground px-4 py-3">
              Activities
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {activitiesData.map((activity) => (
                  <SidebarMenuItem key={activity.id} className="px-4 py-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 relative">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                          <AvatarFallback className={activity.color}>{activity.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Contacts Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-base font-semibold text-foreground px-4 py-3">
              Contacts
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {contactsData.map((contact) => (
                  <SidebarMenuItem key={contact.id} className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                        <AvatarFallback>
                          {contact.name
                            .split(" ")
                            .map((n) => n.charAt(0))
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{contact.name}</p>
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
  )
}
