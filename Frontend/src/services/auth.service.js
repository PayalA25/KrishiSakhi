import api from "./api";
import { API_ROUTES } from "../utils/apiRoutes";

export const registerUser = (data) => {
  return api.post(API_ROUTES.AUTH.REGISTER, data);
};

export const loginUser = (data) => {
  return api.post(API_ROUTES.AUTH.LOGIN, data);
};
