import { Disclosure } from "@headlessui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#37ABBC] shadow">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <Image src="/logo.svg" width={40} height={40} alt="Logo" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRightOnRectangleIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
