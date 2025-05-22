
import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import AIInsightsPanel from "@/components/dashboard/AIInsightsPanel";

const Dashboard = () => {
  const { role = "entrepreneur" } = useParams<{ role?: "entrepreneur" | "mentor" | "funder" | "admin" }>();
  
  // Just for demonstration, we would typically get the user's role from authentication state
  const validRole = ["entrepreneur", "mentor", "funder", "admin"].includes(role) 
    ? (role as "entrepreneur" | "mentor" | "funder" | "admin") 
    : "entrepreneur";
  
  return (
    <DashboardLayout role={validRole}>
      <DashboardOverview role={validRole} />
    </DashboardLayout>
  );
};

export default Dashboard;
