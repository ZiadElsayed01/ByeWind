import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Overview", path: "/" },
  { name: "Targets", path: "targets" },
  { name: "Budget", path: "budget" },
  { name: "Users", path: "users" },
  { name: "Files", path: "files" },
  { name: "Activity", path: "activity" },
  { name: "Settings", path: "settings" },
];

export default function Navigation() {
  return (
    <>
      <div className="md:flex items-center flex-wrap justify-between w-full bg-background p-5 text-muted-foreground">
        {/* Left navigation menu */}
        <NavigationMenu>
          <NavigationMenuList className="grid grid-cols-4 md:flex md:flex-row gap-5 mb-6 md:mb-0">
            {navItems.map((item, index) => (
              <NavigationMenuLink key={index} asChild>
                <NavLink
                  to={item.path}
                  className={`text-sm py-1 font-medium `}
                >
                  {item.name}
                </NavLink>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="text-sm text-muted-foreground bg-foreground"
          >
            + Add User
          </Button>
          <Button
            size="sm"
            className="text-sm text-muted-foreground bg-foreground"
          >
            Add Target
          </Button>
          <Button size="sm" className="text-sm bg-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
