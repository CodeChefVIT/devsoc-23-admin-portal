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
      <div className="bg-[#242E42]">
        <Navbar />
        <div className="p-5"></div>
        <div className="container mx-auto rounded-md bg-white">
          {isLoading ? (
            <div>Loading...</div>
          ) : data === undefined ? (
            <div>Something went wrong</div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </>
  );
}
