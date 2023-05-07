import Navbar from "~/components/Navbar/Navbar";
import { type Team } from "~/types/common";
import { BellIcon } from "@heroicons/react/24/solid";
import Dropdown from "~/components/Dropdown/Dropdown";
import Breadcrumbs from "~/components/Breadcrumbs/Breadcrumbs";

export default function Project() {
  const team: Team = {
    Id: "642ad26ef26f5b1114b109d7",
    teamName: "test1234",
    TeamLeaderId: "642ad1fb816231f80bf4c705",
    teamMembers: ["642ad1fb816231f80bf4c705", "642ad1fb816231f80bf4c706"],
    teamSize: 2,
    ProjectId: "642ad29ef26f5b1114b109d9",
    projectExists: true,
    round: 3,
    inviteCode: "THjyWd",
    createdTime: "2023-04-03T13:19:42.288Z",
    updatedTime: "2023-04-03T13:19:42.288Z",
  };
  return (
    <div className="bg-[#242E42]">
      <Navbar />
      <div className="m-5">
        <div className="rounded-md bg-white p-5">
          <div className="flex flex-row items-center justify-between">
            <p>{team.teamName}</p>
            <div className="flex items-center justify-center gap-2">
              <Dropdown />
              <BellIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="p-1"></div>
          <Breadcrumbs teamName={team.teamName} />
        </div>
      </div>
    </div>
  );
}
