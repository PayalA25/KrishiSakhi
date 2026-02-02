import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import { getDashboardData } from "../services";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    temperature: 30,
    humidity: 60,
    rainfall: 10,
    cropHealth: "Good",
    todaysTask: "Check soil",
    cropGrowth: "Stage 2",
    aiInsights: "Normal growth",
    recommendation: "Fertilize soon",
  });

  useEffect(() => {
    getDashboardData()
      .then((res) => setData(res.data))
      // temp stop important .catch(() => navigate("/login"));
  }, []);

  if (!data) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🌾 Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard title="Temperature" value={`${data.temperature}°C`} />
          <DashboardCard title="Humidity" value={`${data.humidity}%`} />
          <DashboardCard title="Rainfall" value={`${data.rainfall} mm`} />
          <DashboardCard title="Crop Health" value={data.cropHealth} />
        </div>

        {/* Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📌 Today's Overview</h2>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex-1 p-4 bg-green-50 rounded-md shadow-sm">
              <p className="text-gray-600 font-medium">Today's Task</p>
              <p className="text-gray-800 font-bold">{data.todaysTask}</p>
            </div>
            <div className="flex-1 p-4 bg-blue-50 rounded-md shadow-sm">
              <p className="text-gray-600 font-medium">Crop Growth Process</p>
              <p className="text-gray-800 font-bold">{data.cropGrowth}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex-1 p-4 bg-yellow-50 rounded-md shadow-sm">
              <p className="text-gray-600 font-medium">AI Insights</p>
              <p className="text-gray-800 font-bold">{data.aiInsights}</p>
            </div>
            <div className="flex-1 p-4 bg-purple-50 rounded-md shadow-sm">
              <p className="text-gray-600 font-medium">Recommendation</p>
              <p className="text-gray-800 font-bold">{data.recommendation}</p>
            </div>
          </div>
        </div>

        {/* Raw JSON for testing */}
        <div className="mt-6 bg-white p-4 rounded-md shadow-inner text-sm text-gray-600">
          <h3 className="font-semibold mb-2">🔍 Debug Data (Static)</h3>
          <pre className="overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
