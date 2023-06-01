import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
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
      <Head>
        <title>Teams</title>
      </Head>
      <div className="flex h-full w-full flex-1 flex-col space-y-8 bg-[#242E42] pb-8">
        <Navbar />
        <div className="mx-auto h-screen w-full rounded-md bg-[#242E42] px-8">
          {isLoading ? (
            <div className="rounded-md bg-white p-5 text-center">
              Loading...
            </div>
          ) : data === undefined ? (
            <div className="rounded-md bg-white p-5 text-center">
              Something went wrong..
            </div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </>
  );
}
