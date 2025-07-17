"use client";

import * as React from "react";
import {
  FileText,
  Share2,
  Dot,
  ChartPie,
  ShoppingBag,
  FolderClosed,
  SquareUser,
  IdCard,
  Users,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import footerLogo from "../assets/SnowUI_Logo.png";
import { Link } from "react-router-dom";

// Navigation data structure
const navigationData = {
  user: {
    name: "ByeWind",
    avatar: "/src/assets/avatar.png",
  },
  topLevel: [
    {
      title: "Overview",
      icon: Dot,
      url: "/",
    },
    {
      title: "Projects",
      icon: Dot,
      url: "/projects",
    },
  ],
  dashboards: [
    {
      title: "Overview",
      icon: ChartPie,
      url: "/",
    },
    {
      title: "eCommerce",
      icon: ShoppingBag,
      url: "/e-commerce",
      items: [
        {
          title: "Products",
          url: "/e-commerce/products",
        },
        {
          title: "Orders",
          url: "/e-commerce/orders",
        },
        {
          title: "Customers",
          url: "/e-commerce/customers",
        },
        {
          title: "Analytics",
          url: "/e-commerce/analytics",
        },
        {
          title: "Inventory",
          url: "/e-commerce/inventory",
        },
      ],
    },
    {
      title: "Projects",
      icon: FolderClosed,
      url: "/projects",
      items: [
        {
          title: "Active Projects",
          url: "/projects/active-projects",
        },
        {
          title: "Completed",
          url: "/projects/completed",
        },
        {
          title: "Templates",
          url: "/projects/templates",
        },
        {
          title: "Team",
          url: "/projects/team",
        },
        {
          title: "Reports",
          url: "/projects/reports",
        },
      ],
    },
  ],
  pages: [
    {
      title: "User Profile",
      icon: SquareUser,
      url: "/user-profile",
      items: [
        {
          title: "Overview",
          url: "/user-profile/overview",
        },
        {
          title: "Projects",
          url: "/user-profile/projects",
        },
        {
          title: "Campaigns",
          url: "/user-profile/campaigns",
        },
        {
          title: "Documents",
          url: "/user-profile/documents",
        },
        {
          title: "Followers",
          url: "/user-profile/followers",
        },
      ],
    },
    {
      title: "Account",
      icon: IdCard,
      url: "/account",
    },
    {
      title: "Corporate",
      icon: Users,
      url: "/corporate",
    },
    {
      title: "Blog",
      icon: FileText,
      url: "/blog",
    },
    {
      title: "Social",
      icon: Share2,
      url: "/social",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = React.useState("Favorites");

  return (
    <Sidebar {...props} side="left" className="fixed">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={navigationData.user.avatar}
              alt={navigationData.user.name}
            />
            <AvatarFallback>BW</AvatarFallback>
          </Avatar>
          <span className="font-mono text-sidebar-foreground">
            {navigationData.user.name}
          </span>
        </div>

        <div className="flex  px-2">
          <Button
            variant={activeTab === "Favorites" ? "secondary" : "ghost"}
            size="sm"
            className="text-xs bg-transparent text-gray-400 shadow-none"
            onClick={() => setActiveTab("Favorites")}
          >
            Favorites
          </Button>
          <Button
            variant={activeTab === "Recently" ? "secondary" : "ghost"}
            size="sm"
            className="text-xs bg-transparent text-gray-400 shadow-none"
            onClick={() => setActiveTab("Recently")}
          >
            Recently
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Top Level Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.topLevel.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-gray-400" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Dashboards Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/70">
            Dashboards
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.dashboards.map((item) =>
                item.items ? (
                  <Collapsible key={item.title} className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-gray-400" />
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link to={subItem.url}>{subItem.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className="flex items-center gap-2 pl-8"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pages Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/70">
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.pages.map((item) => (
                <Collapsible
                  key={item.title}
                  defaultOpen={item.title === "User Profile"}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-gray-400" />
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link to={subItem.url}>{subItem.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center justify-center py-2">
          <img src={footerLogo} alt="SnowUI" />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
