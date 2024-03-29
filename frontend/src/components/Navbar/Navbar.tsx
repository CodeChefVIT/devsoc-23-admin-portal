import { Disclosure } from "@headlessui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import useAuth from "~/hooks/auth";

export default function Navbar() {
  const { signOut, isAuthenticated } = useAuth();

  return (
    <Disclosure as="nav" className="bg-[#37ABBC] shadow">
      {() => (
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center gap-5">
                  <Link href="/teams">
                    <Image
                      src="/logo.svg"
                      className="h-auto w-auto"
                      width={40}
                      height={40}
                      alt="Logo"
                    />
                  </Link>
                  <p className="font-bold text-white">Dashboard</p>
                </div>
              </div>
              {isAuthenticated ? (
                <div className="flex items-center justify-center">
                  <ArrowRightOnRectangleIcon
                    onClick={() => signOut()}
                    className="h-6 w-6 text-white"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
