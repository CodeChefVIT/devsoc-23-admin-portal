import Head from "next/head";
import { useEffect, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

import { type Team } from "~/types/common";
import Navbar from "~/components/Navbar/Navbar";
import useAuth from "~/hooks/auth";
// import { useRouter } from "next/router";
// import { getTeams } from "~/api/team";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const teams: Team[] = [
  {
    Id: "642ad26ef26f5b1114b109d7",
    teamName: "test1234",
    TeamLeaderId: "642ad1fb816231f80bf4c705",
    teamMembers: ["642ad1fb816231f80bf4c705", "642ad1fb816231f80bf4c706"],
    teamSize: 1,
    ProjectId: "642ad29ef26f5b1114b109d9",
    projectExists: true,
    round: 3,
    inviteCode: "THjyWd",
    createdTime: "2023-04-03T13:19:42.288Z",
    updatedTime: "2023-04-03T13:19:42.288Z",
  },
  {
    Id: "642ad26ef26f5b1114b109d7",
    teamName: "test1234",
    TeamLeaderId: "642ad1fb816231f80bf4c705",
    teamMembers: ["642ad1fb816231f80bf4c705", "642ad1fb816231f80bf4c706"],
    teamSize: 1,
    ProjectId: "642ad29ef26f5b1114b109d9",
    projectExists: true,
    round: 3,
    inviteCode: "THjyWd",
    createdTime: "2023-04-03T13:19:42.288Z",
    updatedTime: "2023-04-03T13:19:42.288Z",
  },
  {
    Id: "642ad26ef26f5b1114b109d7",
    teamName: "test1234",
    TeamLeaderId: "642ad1fb816231f80bf4c705",
    teamMembers: ["642ad1fb816231f80bf4c705", "642ad1fb816231f80bf4c706"],
    teamSize: 1,
    ProjectId: "642ad29ef26f5b1114b109d9",
    projectExists: true,
    round: 3,
    inviteCode: "THjyWd",
    createdTime: "2023-04-03T13:19:42.288Z",
    updatedTime: "2023-04-03T13:19:42.288Z",
  },
];

export default function Teams() {
  const { isAuthenticated } = useAuth();
  // const router = useRouter();

  // const teams = useQuery({
  //   queryFn: getTeams,
  // });
  // console.log(teams);

  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<Team[]>([]);

  useEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < teams.length;
    setChecked(selectedPeople.length === teams.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : teams);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  if (isAuthenticated) {
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="bg-[#242E42]">
          <Navbar />
          <div className="p-5"></div>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden bg-white shadow ring-1 ring-black/5 sm:rounded-lg">
                    <table className="min-w-full table-fixed divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="relative px-7 sm:w-12 sm:px-6"
                          >
                            <input
                              type="checkbox"
                              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              ref={checkbox}
                              checked={checked}
                              onChange={toggleAll}
                            />
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Team Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Members
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Phone
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Track Enrolled
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Modify
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            View Project
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {teams.map((team) => (
                          <tr
                            key={team.Id}
                            className={
                              selectedPeople.includes(team)
                                ? "bg-gray-50"
                                : undefined
                            }
                          >
                            <td className="relative px-7 sm:w-12 sm:px-6">
                              {selectedPeople.includes(team) && (
                                <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                              )}
                              <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                value={team.teamName}
                                checked={selectedPeople.includes(team)}
                                onChange={(e) =>
                                  setSelectedPeople(
                                    e.target.checked
                                      ? [...selectedPeople, team]
                                      : selectedPeople.filter((p) => p !== team)
                                  )
                                }
                              />
                            </td>
                            <td
                              className={classNames(
                                "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                                selectedPeople.includes(team)
                                  ? "text-indigo-600"
                                  : "text-gray-900"
                              )}
                            >
                              {team.teamName}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {team.teamMembers}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {team.teamSize}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {team.updatedTime}
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
        </div>
      </>
    );
  }
}
