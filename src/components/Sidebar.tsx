import { Home, Search, Compass, Heart, User, PlusSquare, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Search" },
    { icon: Compass, label: "Explore" },
    { icon: MessageCircle, label: "Messages" },
    { icon: Heart, label: "Notifications" },
    { icon: PlusSquare, label: "Create" },
    { icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-8 bg-gradient-instagram rounded-lg flex items-center justify-center">
          <Instagram className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-instagram bg-clip-text text-transparent">
          Instagram
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map(({ icon: Icon, label, active }) => (
            <li key={label}>
              <Button
                variant={active ? "secondary" : "ghost"}
                className="w-full justify-start gap-4 h-12 text-base font-normal"
              >
                <Icon className="w-6 h-6" />
                {label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start gap-4 h-12">
          <div className="w-6 h-6 rounded-full bg-gradient-story p-0.5">
            <div className="w-full h-full rounded-full bg-card"></div>
          </div>
          <span className="font-medium">Your Profile</span>
        </Button>
      </div>
    </div>
  );
};