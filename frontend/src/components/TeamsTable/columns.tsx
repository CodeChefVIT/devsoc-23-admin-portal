// import { type User } from "~/types/common";

export type Team = {
  Id: string;
  teamName: string;
  teamMembers: string[];
  teamPhone: string[];
  round: number;
  modify: number;
  ProjectId: string;
};

import { type ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { DataTableColumnHeader } from "~/components/TeamsTable/data-table-column-header";

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
    accessorKey: "round",
    header: "Status",
  },
  {
    accessorKey: "ProjectId",
    header: "View Project",
    cell: ({ row }) => (
      <>
        <p>{row.original.Id}</p>
        <Link href={`/teams/${row.original.Id}`}>View Submission</Link>
      </>
    ),
  },
];
