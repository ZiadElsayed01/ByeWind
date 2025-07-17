"use client";
import { Search, Bell, RotateCcw, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Header() {
  return (
    <header className={`p-3 border-b bg-background px-4 gap-4 w-full`}>
      {/* Left Section */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <SidebarTrigger side="left" className="h-6 w-6" />
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Star className="h-4 w-4" />
          </Button>
          <Breadcrumb className="hidden md:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink to="/">Dashboards</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink to="/">Default</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-9 pr-12 h-9 bg-muted/50 border-0 focus-visible:ring-1"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                ⌘K
              </kbd>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <div className="h-4 w-4 rounded-full bg-foreground" />
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8">
              <RotateCcw className="h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 relative"
                >
                  <Bell className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>New notification</DropdownMenuItem>
                <DropdownMenuItem>View all notifications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <SidebarTrigger side="right" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
