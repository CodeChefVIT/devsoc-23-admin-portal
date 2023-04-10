import axios from "~/api";
import { type Team } from "~/types/common";

export const getTeams = async () => {
  const response = await axios.get<Team[]>("/team/all");

  return response.data;
};
