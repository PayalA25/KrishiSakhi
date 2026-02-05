import { getHomeData } from "../services";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import farmImage from "../assets/HomePageRightSide.png";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getHomeData()
      .then((res) => console.log(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 leading-tight">
            Your Smart Farming Partner 🌱
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            Empowering farmers with <span className="font-semibold">AI-driven insights</span>,
            real-time weather updates, and activity tracking to ensure
            <span className="font-semibold"> better yield & sustainable growth</span>.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>🌦 Personalized weather updates</li>
            <li>🤖 AI-based crop recommendations</li>
            <li>📊 Track farming activities & growth</li>
          </ul>

          {/* CTA BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg
                         hover:bg-green-700 transition"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg
                         hover:bg-green-50 transition"
            >
              Login
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={farmImage}
            alt="Smart Farming"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            How Krishi Sakhi Helps You 🌾
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">🌦 Weather Intelligence</h3>
              <p className="text-gray-600 text-sm">
                Get real-time temperature, humidity, and rainfall updates tailored
                to your farm location.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">🌱 Crop Health Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Monitor crop stages, soil condition, and growth patterns with smart insights.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">🤖 AI Recommendations</h3>
              <p className="text-gray-600 text-sm">
                Receive personalized AI suggestions to maximize productivity and yield.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
