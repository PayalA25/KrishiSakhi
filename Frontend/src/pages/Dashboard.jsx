import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import { getDashboardData } from "../services/dashboardApi.js";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDashboardData();
      setData(res.data); // ApiResponse.data
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <DashboardCard title="Temperature" value={`${data.temperature}°C`} />
          <DashboardCard title="Humidity" value={`${data.humidity}%`} />
          <DashboardCard title="Rainfall" value={`${data.rainfall} mm`} />
          <DashboardCard title="Crop Health" value={data.cropHealth} />
        </div>

        <div className="mt-6 space-y-4">
          <div>📌 Today's Task: {data.todaysTask}</div>
          <div>🌾 Crop Growth Process: {data.cropGrowth}</div>
          <div>🤖 AI Insights: {data.aiInsights}</div>
          <div>✅ Recommendation: {data.recommendation}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
