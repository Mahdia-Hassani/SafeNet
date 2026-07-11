import {
  LayoutDashboard,
  ShieldAlert,
  BookOpen,
  Target,
  Settings,
  User,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Scam Analyzer",
    path: "/analyzer",
    icon: ShieldAlert,
  },
  {
    name: "Learning Center",
    path: "/learning",
    icon: BookOpen,
  },
  {
    name: "Threat Simulation",
    path: "/simulation",
    icon: Target,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
];

export default navigation;
