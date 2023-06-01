// import { type User } from "~/types/common";

export type Team = {
  Id: string;
  teamName: string;
  teamMembers: string[];
  teamPhone: string[];
  round: string;
  teamSize: string;
  modify: number;
  ProjectId: string;
};

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import axios from "~/api/index";

import { type ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { DataTableColumnHeader } from "~/components/TeamsTable/data-table-column-header";
import getToken from "~/utils/getAccessToken";
import { toast } from "react-toastify";

const updateRound = async (round: string, teamId: string) => {
  toast("Updating round...", { delay: 100 });
  const token = localStorage.getItem("refreshToken");
  const accessToken = await getToken();

  if (!token || !accessToken) return;

  const payload = {
    round: parseInt(round),
  };

  try {
    await axios.post(`/admin/promote/${teamId}`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    toast.success("Round updated!", { delay: 100 });
  } catch (err) {
    toast.error("Error updating round!", { delay: 100 });
  }
};

export const columns: ColumnDef<Team>[] = [
  {
    accessorKey: "teamName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Team Name" />
    ),
  },
  {
    accessorKey: "teamMembers",
    header: "Members",
    cell: ({ row }) => (
      <>
        {row.original.teamMembers.map((member) => (
          <p key={member}>{member}</p>
        ))}
      </>
    ),
  },
  {
    accessorKey: "teamPhone",
    header: "Phone",
    cell: ({ row }) => (
      <>
        {row.original.teamPhone.map((phone) => (
          <p key={phone}>{phone}</p>
        ))}
      </>
    ),
  },
  {
    accessorKey: "teamSize",
    header: "Team Size",
    cell: ({ row }) => (
      <>
        <p>{row.original.teamSize}</p>
      </>
    ),
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "round",
    header: "Status",
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row }) => (
      <>
        <Select
          onValueChange={(round) => void updateRound(round, row.original.Id)}
        >
          <SelectTrigger className="h-8 w-[100px]">
            <SelectValue placeholder={`${row.original.round}`} />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3].map((round) => (
              <SelectItem key={round} value={`${round}`}>
                Round {round}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </>
    ),
  },
  {
    accessorKey: "ProjectId",
    header: "View Project",
    cell: ({ row }) => (
      <>
        <Link
          href={`/teams/${row.original.Id}`}
          className="text-blue-500 underline"
        >
          View Submission
        </Link>
      </>
    ),
  },
];
