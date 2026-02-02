import { ApiResponse } from "../utils/ApiResponse.js";

export const getDashboardData = (req, res) => {
  const dashboardData = {
    temperature: 30,
    humidity: 70,
    rainfall: 100,
    cropHealth: "Good",
    todaysTask: "Water crops",
    cropGrowth: "Vegetative Stage",
    aiInsights: "Good growth expected",
    recommendation: "Add nitrogen fertilizer",
  };

  return res.status(200).json(
    new ApiResponse(
      200,
      dashboardData,
      "Dashboard data fetched successfully"
    )
  );
};
