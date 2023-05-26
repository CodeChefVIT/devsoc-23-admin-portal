/* eslint-disable @next/next/no-img-element */
import Navbar from "~/components/Navbar/Navbar";
import { type Project, type Team } from "~/types/common";
import { BellIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Dropdown from "~/components/Dropdown/Dropdown";
import Breadcrumbs from "~/components/Breadcrumbs/Breadcrumbs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "~/api";
import getToken from "~/utils/getAccessToken";
interface TeamDetailsResponse {
  team: Team;
  status: string;
}

interface ProjectDetailsResponse {
  project: Project;
  status: string;
}

export default function ProjectDetails() {
  const [team, setTeam] = useState<Team>();
  const [project, setProject] = useState<Project>();
  const router = useRouter();

  useEffect(() => {
    async function getTeamDetails() {
      const id = router.query.id;
      const accessToken = await getToken();

      if (!id || id instanceof Array) return;
      if (!accessToken) return;

      const teamDetails = await axios.get<TeamDetailsResponse>(
        `/team/get/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const projectDetails = await axios.get<ProjectDetailsResponse>(
        `/project/get/?teamId=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setTeam(teamDetails.data.team);
      setProject(projectDetails.data.project);
    }

    void getTeamDetails();
  }, [router.query.id]);

  if (team && project) {
    return (
      <div className="">
        <div className="overflow-y-auto bg-[#242E42]">
          <Navbar />
          <div className="m-5 flex flex-col gap-2">
            <div className="rounded-md bg-white p-4">
              <div className="flex flex-row items-center justify-between">
                <p>{team.teamName}</p>
                <div className="flex items-center justify-center gap-x-2">
                  <Dropdown />
                  <BellIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-1"></div>
              <Breadcrumbs teamName={team.teamName} />
            </div>
            <div className="flex flex-col gap-2 lg:flex-row">
              <div className="grow-0 rounded-md bg-white p-4">
                {/* Header */}
                <div className="flex flex-row items-center justify-between gap-x-10">
                  <div className="flex flex-row items-center justify-center gap-x-5">
                    <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <p>{team.teamName}</p>
                  </div>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Round {team.round}
                  </span>
                </div>
                {/* Table */}
                <div className="px-4">
                  <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Phone Number
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {team.teamMembers.map((team) => (
                              <tr key={team}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                  {team}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {team}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {team}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side card */}
              <div className="grow rounded-md bg-white p-5">
                <p className="text-lg font-semibold">Information</p>
                <div className="p-2"></div>
                <div className="flex flex-col justify-between gap-3 md:flex-row md:flex-wrap">
                  <div className="flex flex-col gap-10">
                    <div>
                      <p className="text-gray-400">Track Name</p>
                      <p>{project.projectTrack}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Time of Submission</p>
                      <p>Some Random Time</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <p className="text-gray-400">Thumbnail</p>
                    <img
                      src="https://picsum.photos/200"
                      alt=""
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-400">Tag Line of Project</p>
                    <p>{project.projectTagLine}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom big card */}
            <div className="mb-5 rounded-md bg-white p-5">
              <div className="flex flex-col gap-5 md:flex-row">
                {/* Left most side */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">GitHub Repo Link</p>
                    <p className="w-full rounded-lg bg-[#EFF1F9] p-3">
                      {project.projectGithubLink}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">Drive Link</p>
                    <p className="w-full rounded-lg bg-[#EFF1F9] p-3">
                      {project.projectDriveLink}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">Built With</p>
                    <p className="w-full rounded-lg bg-[#EFF1F9] p-3">
                      {project.projectStack}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">Figma Link</p>
                    <p className="w-full rounded-lg bg-[#EFF1F9] p-3">
                      {project.projectFigmaLink}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">Other Submitted Documents</p>
                    <p className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-[#EFF1F9] p-3">
                      <button className="">
                        <ArrowDownTrayIcon className="h-5 w-5" />
                      </button>
                      or Submitted link
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">
                      Other Images which are submitted
                    </p>
                    <p className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-[#EFF1F9] p-3">
                      <button className="">
                        <ArrowDownTrayIcon className="h-5 w-5" />
                      </button>
                      Download
                    </p>
                  </div>
                </div>
                {/* Middle description */}
                <div className="flex grow-0 flex-col gap-5 md:w-1/3">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">Description</p>
                    <p className="w-full rounded-lg bg-[#EFF1F9] p-3">
                      {project.projectDescription}
                    </p>
                  </div>
                </div>
                {/* Right comments */}
                <div className="flex flex-col gap-5 overflow-y-auto md:w-1/3">
                  <div className="flex flex-col">
                    <p className="text-gray-400">Comments</p>
                    <textarea className="h-full rounded-lg bg-[#EFF1F9] p-3"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
