import { LoginValues, ProfileData } from "../models/types";
import { setStorageItem } from "../utils/tokenManager";
import axios from "./BaseService";

const BASE_URL = "https://api.homologation.cliqdrive.com.br/auth/";

export const login = async (values: LoginValues) => {
  const response = await axios.post(`${BASE_URL}login/`, values);
  setStorageItem("token", response.data.tokens.access);
  return response.data;
};

export const getProfile = async (): Promise<ProfileData> => {
  const response = await axios.get(`${BASE_URL}profile/`);
  return response.data;
};
