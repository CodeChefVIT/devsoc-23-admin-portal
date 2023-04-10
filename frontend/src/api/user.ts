import axios from "~/api";
import { type User } from "~/types/common";

export const login = async (data: { email: string; password: string }) => {
  const response = await axios.post<User>("/users/login", data);

  return response.data;
};
