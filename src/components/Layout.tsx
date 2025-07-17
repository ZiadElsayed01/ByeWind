import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { RightNav } from "./RightNav";
import { Header } from "@/components/Header";
import { useSidebar } from "./../hooks/use-sidebar";

function MainLayout() {
  const { left, right } = useSidebar();

  return (
    <div className="flex flex-1">
      {/* Left Sidebar - transitions width to 0 when closed */}
      <div
        className={`transition-all duration-200 ease-in-out ${
          left.open ? "w-[var(--sidebar-width)]" : "w-0"
        }`}
      >
        <AppSidebar />
      </div>

      {/* Main Content - expands to fill space */}
      <main
        className={`flex-1 flex flex-col transition-all duration-200 ${
          !left.open && !right.open ? "w-full" : ""
        }`}
      >
        <Header />
        <div className="flex-1 overflow-auto p-5 py-0">
          <Outlet />
        </div>
      </main>

      {/* Right Sidebar - transitions width to 0 when closed */}
      <div
        className={`transition-all duration-200 ease-in-out ${
          right.open ? "w-[var(--sidebar-width)]" : "w-0"
        }`}
      >
        <RightNav />
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full overflow-hidden">
        <MainLayout />
      </div>
    </SidebarProvider>
  );
}
