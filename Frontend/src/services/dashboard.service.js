import api from "./api";
import { API_ROUTES } from "../utils/apiRoutes";

export const getDashboardData = () => {
  return api.get(API_ROUTES.DASHBOARD.ROOT);
};
