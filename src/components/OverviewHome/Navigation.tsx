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
      <div className="md:flex items-center flex-wrap justify-between w-full bg-white p-5">
        {/* Left navigation menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col md:flex-row gap-5 mb-3 lg:mb-0">
            {navItems.map((item, index) => (
              <NavigationMenuLink key={index} asChild>
                <NavLink
                  to={item.path}
                  className={`text-sm py-1 font-medium text-gray-400`}
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
            variant="secondary"
            size="sm"
            className="text-sm text-gray-400"
          >
            + Add User
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="text-sm text-gray-400"
          >
            Add Target
          </Button>
          <Button variant="secondary" size="sm" className="text-sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
