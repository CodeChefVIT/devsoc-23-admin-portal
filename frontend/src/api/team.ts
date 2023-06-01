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

  const response = await axios.get<TeamResponse>("/admin/team", {
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
        teamMembers: team.teamMemberDetails.map(
          (teamMember) => teamMember.firstName + " " + teamMember.lastName
        ),
        teamPhone: team.teamMemberDetails.map(
          (teamMember) => teamMember.phoneNumber
        ),
        teamSize: team.teamMemberDetails.length.toString(),
        round: `Round ${team.round ? team.round : 0}`,
        modify: team.round,
        ProjectId: team.ProjectId,
        projectExists: team.projectExists ? "Yes" : "No",
      };
    });

    console.log(newTeams);

    return newTeams;
  }

  return;
};
