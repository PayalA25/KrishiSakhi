import axios from "axios";

const API_URL = "http://localhost:5000/dashboard";

export const getDashboardData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
