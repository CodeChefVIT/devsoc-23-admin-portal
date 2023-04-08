import axios from "~/api";
import { type User } from "~/types/common";

export const login = async (
  username: string,
  password: string
): Promise<User> => {
  const response = await axios.post<User>("/user/login", {
    username,
    password,
  });

  return response.data;
};
