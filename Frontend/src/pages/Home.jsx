import { getHomeData } from "../services";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getHomeData()
      .then((res) => console.log(res.data))
      .catch(console.error);
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Krishi Sakhi 🌾</h1>

      <p className="text-gray-700 mb-4">
        Krishi Sakhi helps farmers monitor crop health, weather conditions,
        and get AI-powered recommendations to improve yield.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold text-lg">🌦 Weather Insights</h3>
          <p className="text-sm text-gray-600">
            Real-time temperature, humidity, and rainfall data.
          </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold text-lg">🌱 Crop Health</h3>
          <p className="text-sm text-gray-600">
            Track crop growth stages and health status.
          </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold text-lg">🤖 AI Recommendations</h3>
          <p className="text-sm text-gray-600">
            Smart suggestions to maximize crop yield.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
