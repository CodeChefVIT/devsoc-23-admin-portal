import axios from "~/api";
import { type Team } from "~/types/common";
import getToken from "~/utils/getAccessToken";

interface TeamResponse {
  status: string;
  teams: Team[];
}

export const getTeams = async () => {
  const accessToken = await getToken();

  if (!accessToken) return;

  const response = await axios.get<TeamResponse>("/team/all", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.data.status === "true") {
    const teams = response.data.teams;
    console.log(teams);

    const newTeams = teams.map((team) => {
      return {
        Id: team.Id,
        teamName: team.teamName,
        // TODO: Change this actual team member names once backend is updated
        teamMembers: team.teamMembers,
        // TODO: Change this to actual phone numbers once data is there
        teamPhone: team.teamMembers.map(() => "9988895840"),
        round: team.round,
        modify: team.round,
        ProjectId: team.ProjectId,
      };
    });

    return newTeams;
  }

  return;
};
