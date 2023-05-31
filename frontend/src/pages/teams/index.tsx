import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";
import { getTeams } from "~/api/team";
import Navbar from "~/components/Navbar/Navbar";
import { columns } from "~/components/TeamsTable/columns";
import { DataTable } from "~/components/TeamsTable/data-table";

export default function Teams() {
  const { data, isLoading } = useQuery({
    queryFn: getTeams,
  });
  return (
    <>
      <div className=" hidden h-full flex-1 flex-col space-y-8 px-8 pb-8 md:flex">
        <Navbar />
        <div className="p-5"></div>
        <div className="mx-auto rounded-md bg-white">
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : data === undefined ? (
            <div className="p-5">Something went wrong</div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </>
  );
}
