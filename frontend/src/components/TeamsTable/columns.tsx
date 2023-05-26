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

export const columns: ColumnDef<Team>[] = [
  {
    accessorKey: "teamName",
    header: "Team Name",
  },
  {
    accessorKey: "teamMembers",
    header: "Members",
  },
  {
    accessorKey: "teamPhone",
    header: "Phone",
  },
  {
    accessorKey: "round",
    header: "Status",
  },
  {
    accessorKey: "round",
    header: "Modify",
  },
  {
    accessorKey: "ProjectId",
    header: "View Project",
  },
];
