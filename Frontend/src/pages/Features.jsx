import { useState } from "react";

const Features = () => {

  const [recommendedCrop, setRecommendedCrop] =
    useState("");

  const [activities, setActivities] = useState([]);

  // Predict Crop Function
  const predictCrop = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/predict-crop",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            N: 90,
            P: 42,
            K: 43,
            temperature: 28,
            humidity: 70,
            ph: 6.5,
            rainfall: 120,
          }),
        }
      );

      const data = await response.json();

      setRecommendedCrop(
        data.recommended_crop
      );

      // Farming Schedule
      setActivities([
        {
          id: 1,
          activity: "Water Crops",
          schedule: "Every 3 Days",
          status: "Pending",
        },

        {
          id: 2,
          activity: "Apply Fertilizer",
          schedule: "After 15 Days",
          status: "Upcoming",
        },

        {
          id: 3,
          activity: "Check Soil Moisture",
          schedule: "Daily",
          status: "Pending",
        },
      ]);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-green-800 mb-4">
          🌾 Smart Farming Features
        </h1>

        <p className="text-gray-600 text-lg">
          AI-powered crop recommendation,
          farming schedule, and smart
          agriculture insights.
        </p>

      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🌤 Weather Monitoring
          </h2>

          <p className="text-gray-600">
            Monitor temperature, humidity,
            and rainfall in real time.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            🌱 Crop Health
          </h2>

          <p className="text-gray-600">
            Track crop growth and health
            conditions smartly.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold text-yellow-700 mb-3">
            🤖 AI Recommendation
          </h2>

          <p className="text-gray-600">
            Predict the best crop using
            AI and environmental data.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            📅 Farming Schedule
          </h2>

          <p className="text-gray-600">
            Get irrigation and fertilizer
            scheduling automatically.
          </p>

        </div>

      </div>

      {/* AI Crop Prediction */}
      <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">

        <h2 className="text-3xl font-bold text-green-700 mb-6">
          🌾 Crop Recommendation
        </h2>

        <button
          onClick={predictCrop}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl text-lg transition"
        >
          Predict Best Crop
        </button>

        {recommendedCrop && (

          <div className="mt-8 bg-green-100 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Recommended Crop
            </h3>

            <p className="text-4xl font-bold text-gray-800">
              🌾 {recommendedCrop}
            </p>

          </div>

        )}

      </div>

      {/* Farming Activity Schedule */}
      {activities.length > 0 && (

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            📅 Farming Schedule
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-green-100 text-green-800">

                  <th className="p-4 text-left">
                    Activity
                  </th>

                  <th className="p-4 text-left">
                    Schedule
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
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-4">
                      {activity.activity}
                    </td>

                    <td className="p-4">
                      {activity.schedule}
                    </td>

                    <td className="p-4">

                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {activity.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
  );
};

export default Features;