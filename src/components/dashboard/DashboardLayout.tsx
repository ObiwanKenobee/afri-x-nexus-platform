
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  BookOpen,
  MessageCircle,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
  role?: "entrepreneur" | "mentor" | "funder" | "admin";
}

const DashboardLayout = ({ children, role = "entrepreneur" }: DashboardLayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    ...(role === "entrepreneur"
      ? [
          { name: "My Ventures", href: "/dashboard/ventures", icon: BookOpen },
          { name: "Mentorship", href: "/dashboard/mentorship", icon: MessageCircle },
        ]
      : role === "mentor"
      ? [
          { name: "My Mentees", href: "/dashboard/mentees", icon: User },
          { name: "Resources", href: "/dashboard/resources", icon: BookOpen },
        ]
      : role === "funder"
      ? [
          { name: "Investment Pipeline", href: "/dashboard/pipeline", icon: BookOpen },
          { name: "Portfolio", href: "/dashboard/portfolio", icon: MessageCircle },
        ]
      : [
          { name: "Users", href: "/dashboard/users", icon: User },
          { name: "Content", href: "/dashboard/content", icon: BookOpen },
        ]),
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Help", href: "/dashboard/help", icon: HelpCircle },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Sidebar for desktop */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-y-0 left-0 z-30 w-64 bg-afrix-blue text-white transition-all duration-300 transform lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-afrix-blue/30">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">AFRI-X</span>
            <span className="ml-1 text-afrix-orange font-bold">Platform</span>
          </Link>
          <button
            className="lg:hidden text-white hover:text-afrix-orange"
            onClick={toggleSidebar}
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-4 py-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-afrix-orange flex items-center justify-center text-white font-bold">
              {role.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3">
              <p className="font-medium text-white">John Doe</p>
              <p className="text-xs text-afrix-orange capitalize">{role}</p>
            </div>
          </div>

          <nav className="mt-8">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-afrix-blue/30 text-afrix-orange"
                        : "text-white hover:bg-afrix-blue/20 hover:text-afrix-orange"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive ? "text-afrix-orange" : "text-afrix-orange/60 group-hover:text-afrix-orange"
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
        <div className="absolute bottom-0 w-full p-4 border-t border-afrix-blue/30">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-afrix-blue/20 hover:text-afrix-orange"
            onClick={() => console.log("Logout")}
          >
            <LogOut className="mr-3 h-5 w-5 text-afrix-orange/60" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="w-full h-16 flex items-center justify-between border-b border-gray-200 px-4 lg:px-6">
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center lg:ml-auto">
            <nav className="flex px-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                <Bell size={20} />
              </Button>
              <Link to="/dashboard/profile" className="ml-4">
                <div className="w-8 h-8 rounded-full bg-afrix-blue flex items-center justify-center text-white">
                  JD
                </div>
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-afrix-gray/30 px-4 py-8 lg:px-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-afrix-blue">{location.pathname.split("/").pop()?.charAt(0).toUpperCase() + location.pathname.split("/").pop()?.slice(1) || "Dashboard"}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-afrix-blue">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <Link to="/dashboard" className="hover:text-afrix-blue">Dashboard</Link>
              {location.pathname !== "/dashboard" && (
                <>
                  <ChevronRight size={16} className="mx-1" />
                  <span className="text-gray-700 capitalize">{location.pathname.split("/").pop()}</span>
                </>
              )}
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
