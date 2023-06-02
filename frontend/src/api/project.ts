import axios from "~/api";
import { type Project } from "~/types/common";
import getToken from "~/utils/getAccessToken";

interface ProjectDetailsResponse {
  status: string;
  project: Project;
}

export const getProjectDetails = async (
  teamId: string | string[] | undefined
) => {
  const accessToken = await getToken();

  if (!accessToken || !teamId || Array.isArray(teamId)) return;

  const projectDetails = await axios.get<ProjectDetailsResponse>(
    `/project/get/${teamId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (projectDetails.data.status === "true") {
    const project = projectDetails.data.project;
    return project;
  }
  return;
};
