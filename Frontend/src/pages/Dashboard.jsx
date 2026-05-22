import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import { getDashboardData } from "../services";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  // Check token from localStorage
  const isLoggedIn = localStorage.getItem("token");

  const [data, setData] = useState({
    temperature: 30,
    humidity: 60,
    rainfall: 100,
    cropHealth: "Good",
    todaysTask: "Check soil moisture",
    cropGrowth: "Stage 2",
    aiInsights: "Normal growth detected",
    recommendation: "Apply fertilizer in 3 days",
  });

  // Farming Activity Table Data
  const activities = [
    {
      id: 1,
      activity: "Water Crops",
      date: "2026-05-09",
      status: "Pending",
    },

    {
      id: 2,
      activity: "Apply Fertilizer",
      date: "2026-05-10",
      status: "Completed",
    },

    {
      id: 3,
      activity: "Check Soil",
      date: "2026-05-11",
      status: "Pending",
    },

    {
      id: 4,
      activity: "Pesticide Spray",
      date: "2026-05-12",
      status: "Upcoming",
    },
  ];

  useEffect(() => {

    // Fetch dashboard only if user logged in
    if (isLoggedIn) {

      getDashboardData()
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));

    }

  }, []);

  // If user is NOT logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">

        <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-2xl">

          <h1 className="text-5xl font-bold text-green-700 mb-6">
            🌾 Dashboard for Your Crop Health
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-8">
            Sign up to monitor crop health, temperature,
            humidity, rainfall, farming schedules,
            AI insights, and smart recommendations
            for better farming productivity.
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl text-lg transition"
          >
            Sign Up Now
          </button>

        </div>

      </div>
    );
  }

  // Logged In Dashboard
  return (
    <div className="flex min-h-screen bg-green-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Header */}
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          🌾 Farmer Dashboard
        </h1>

        {/* Weather & Crop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <DashboardCard
            title="🌡 Temperature"
            value={`${data.temperature}°C`}
          />

          <DashboardCard
            title="💧 Humidity"
            value={`${data.humidity}%`}
          />

          <DashboardCard
            title="🌧 Rainfall"
            value={`${data.rainfall} mm`}
          />

          <DashboardCard
            title="🌱 Crop Health"
            value={data.cropHealth}
          />

        </div>

        {/* AI Insights Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              📌 Today's Task
            </h2>

            <p className="text-gray-700 text-lg">
              {data.todaysTask}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              🌾 Crop Growth
            </h2>

            <p className="text-gray-700 text-lg">
              {data.cropGrowth}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-yellow-700 mb-4">
              🤖 AI Insights
            </h2>

            <p className="text-gray-700 text-lg">
              {data.aiInsights}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-purple-700 mb-4">
              ✅ Recommendation
            </h2>

            <p className="text-gray-700 text-lg">
              {data.recommendation}
            </p>
          </div>

        </div>

        {/* Farming Activity Schedule Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-green-800 mb-6">
            📅 Farming Activity Schedule
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-green-100 text-green-800">

                  <th className="p-4 text-left">
                    Activity
                  </th>

                  <th className="p-4 text-left">
                    Scheduled Date
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody>

                {activities.map((activity) => (
                  <tr
                    key={activity.id}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    <td className="p-4">
                      {activity.activity}
                    </td>

                    <td className="p-4">
                      {activity.date}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold

                        ${
                          activity.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : activity.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }
                        `}
                      >
                        {activity.status}
                      </span>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;