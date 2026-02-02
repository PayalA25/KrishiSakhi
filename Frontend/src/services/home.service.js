import api from "./api";
import { API_ROUTES } from "../utils/apiRoutes";

export const getHomeData = () => {
  return api.get(API_ROUTES.HOME.ROOT);
};
