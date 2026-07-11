import { ShieldCheck, BookOpen, Target, ShieldAlert } from "lucide-react";

const dashboardStats = [
  {
    id: 1,
    title: "Safety Score",
    value: "92%",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Completed Lessons",
    value: "12",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Completed Quizzes",
    value: "8",
    icon: Target,
  },
  {
    id: 4,
    title: "Threat Analyses",
    value: "31",
    icon: ShieldAlert,
  },
];

export default dashboardStats;
